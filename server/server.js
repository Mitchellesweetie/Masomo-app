const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 5000;

// Middle ware
app.use(cors(
  {
    origin: ['http://localhost:3000','https://tarajimasomo.co.ke','https://masomo-app-gamma.vercel.app/'], // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow credentials if needed
  }
));
app.use(bodyParser.json());

// MongoDB connection
//Url for cloud MongoDB Atlas 'mongodb+srv://<db_username>:<db_password>@cluster0.aknj2.mongodb.net/contactform?retryWrites=true&w=majority'
// For local MongoDB use 'mongodb://localhost:27017/contactform'
//For cloud use mongodb+srv://tarajimasomo:ywLgC0MI3KD6yGy6@cluster0.aknj2.mongodb.net/contactform
mongoose.connect('mongodb+srv://tarajimasomo:ywLgC0MI3KD6yGy6@cluster0.aknj2.mongodb.net/contactform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a schema for the contact form
const contactSchema = new mongoose.Schema({
  country: String,
  name: String,
  email: String,
  subject: String,
  phone: Number,
  time: String,
  message: String,
  // Add a date field to store the submission date
  date: { 
    type: Date, 
    default: Date.now 
    }
  
});

// Create a model for the contact form
const Contact = mongoose.model('Contact', contactSchema);


//Define a schema for users
const userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, unique: true},
  password: String,
  
});

// Create a model for the users
const User = mongoose.model('User', userSchema);

//Create a Schema for courses
const courseSchema = new mongoose.Schema({
  country: String,
  title: String,
  level: String,
  fees: Number,
});


// Middleware to protect routes
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // console.log('Token:', token);
  // console.log(token);
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }


  const token = authHeader.split(' ')[1]; // Assuming the format
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.id;
    next();
  });
};

// Create a model for the courses
const Course = mongoose.model('Course', courseSchema);

//Route to handle user registration
app.post('/api/register', authenticate, async (req, res) => {
  const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    try {
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error registering user' });
    }
  });

  app.post('/api/login', async (req, res) => {

    console.log('Login request received:', req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    else if (!await bcrypt.compare(password, user.password)) {
      res.status(400).json(message = 'Invalid credentials');
    }
    else {

      //Create a JWT token
      // console.log('User found:', user);
      const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful',token, user: { username: user.username, email: user.email } });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  } 
});






// Define a route to handle form submissions
app.post('/api/contact', async (req, res) => {
  const { country, name, email,phone,time, subject, message } = req.body;

  // Create a new contact form entry
  const newContact = new Contact({
    country,
    name,
    email,
    phone,
    time,
    subject,
    message
  });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

//Define a route to get all form submissions
app.get('/api/contacts',authenticate,async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 }); // Sort by date in descending order
    // You can also limit the number of contacts returned if needed
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contacts' });
  }
});

//Define a route to enter courses
app.post('/api/courses', async (req, res) => {
  const { country, title, level, fees } = req.body;

  // Create a new course entry
  const newCourse = new Course({
    country,
    title,
    level,
    fees
  });

  try {
    await newCourse.save();
    res.status(200).json({ message: 'Course added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding course' });
  }
});


//Define a route to get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ country: 1 }); // Sort by country in ascending order
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching courses' });
  }
});

//Define a route to delete a course
app.delete('/api/courses/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting course' });
  }
});


//Define a route to delete a contact
app.delete('/api/contacts/:id', authenticate, async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting contact' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
