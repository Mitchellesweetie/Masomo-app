import React, { useEffect,useState } from 'react';
import axios from 'axios';
// import { useEffect, useState } from 'react';

function Courses() {

    const [formData, setFormData] = useState({
    title: '',
    country: '',
    level: '',
    fees: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your actual API call
    try{
        await axios.post('http://localhost:5000/api/courses', formData);
        alert('Course submitted successfully!');
        setFormData({ title: '', country: '', level: '', fees: '' }); // Reset form

    }catch(err){
      console.error('Error submitting course:', err);}
  };

  return (
    <div>
        <div className="container mt-4">
      <h3 className="mb-4">Course Information Form</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Course Title</label>
          <input
            type="text"
            className="form-control"
            placeholder='Enter Course Title (e.g., BSc Computer Science)'
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            placeholder='Enter Country (e.g., USA)'
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="level" className="form-label">Level</label>
          <select
            className="form-select"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Level --</option>
            <option value="Diploma">Diploma</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="fees" className="form-label">School Fees</label>
          
          <input
            type="number"
            className="form-control"
            id="fees"
            name="fees"
            placeholder='Enter School Fees (e.g., 5000)'
            min="0"
            step="0.01"
            value={formData.fees}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Course</button>
      </form>
      <div>

      </div>
    </div>
    </div>
  )
}

export default Courses