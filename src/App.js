import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Responses from './pages/Responses';
import Scholarships from './pages/Scholarships';
import Login from './pages/Login';
import Adminpanel from './pages/Adminpanel';
import Courses from './pages/Courses';
import CourseList from './pages/CourseList';
import Impact from './pages/Impact';
import Partner from './pages/Partner';
import Blogview from './pages/Blogview';
import Careers from './pages/Careers';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
// import { useState } from 'react';



function App() {

  //  const [isAuthenticated, setIsAuthenticated] = useState(!!(localStorage.getItem('token')));
   const [isAuthenticated, setIsAuthenticated] = useState(() => {
      const token = localStorage.getItem('token');
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem('token');
          return false;
        }
        return true;
        
        
      } catch (error) {
        return false; // If token is invalid or expired, return false
        
      }
   });

   console.log("isAuthenticated:", isAuthenticated);
  //  const [isAuthenticated, setIsAuthenticated] = useState(false);
   

   const handleLogin = () => {
      setIsAuthenticated(true);
      window.location.href = '/adminpanel'; // Redirect to admin panel after login
      // window.location.href = '/responses';
    };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/blogview/:id" element={<Blogview />} />
          <Route path="/careers" element={<Careers />} />
          {/* <Route path="/courses" element={<Courses />} /> */}


          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/adminpanel" element={isAuthenticated? <Adminpanel />: <Navigate to="/login"/>} >
            <Route path="responses" element={<Responses />} />
            <Route path="courselist" element={<CourseList />} />
            <Route path="blogs" element={<Blogs />} />

          </Route>
          <Route path="/courses" element={<Courses />} />

          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
