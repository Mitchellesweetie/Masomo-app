import React from 'react'
import { useState } from 'react';

function Scholarships() {

                const [searchParams, setSearchParams] = useState({
                  country: '',
                  level: '',
                  course: ''
                });
                const [results, setResults] = useState([]);
                const [loading, setLoading] = useState(false);

                const handleInputChange = (e) => {
                  const { name, value } = e.target;
                  setSearchParams(prev => ({ ...prev, [name]: value }));
                };

                const handleSearch = async () => {
                  setLoading(true);
                  // Simulate API call
                  try {
                    const response = await fetch('https://api.tarajimasomo.co.ke/api/courses');
                    console.log(response);
                    const data = await response.json();
                    const filtered = data.filter(course =>
                      (!searchParams.country || course.country.toLowerCase().includes(searchParams.country.toLowerCase())) &&
                      (!searchParams.level || course.level === searchParams.level) &&
                      (!searchParams.course || course.title.toLowerCase().includes(searchParams.course.toLowerCase()))
                    );
                    setResults(filtered);
                  } catch (error) {
                    setResults([]);
                  } finally {
                    setLoading(false);
                  }

                  // setTimeout(() => {
                  //   // Dummy data for demonstration
                  //   const dummyCourses = [
                  //     { id: 1, title: 'Computer Science', country: 'Kenya', level: 'Undergraduate' },
                  //     { id: 2, title: 'Business Administration', country: 'Tanzania', level: 'Diploma' },
                  //     { id: 3, title: 'Mechanical Engineering', country: 'Kenya', level: 'Post graduate' }
                  //   ];
                  //   const filtered = dummyCourses.filter(course =>
                  //     (!searchParams.country || course.country.toLowerCase().includes(searchParams.country.toLowerCase())) &&
                  //     (!searchParams.level || course.level === searchParams.level) &&
                  //     (!searchParams.course || course.title.toLowerCase().includes(searchParams.course.toLowerCase()))
                  //   );
                  //   setResults(filtered);
                  //   setLoading(false);
                  // }, 1000);
                };

  return (
    <div>
        
        <div className="container-xxl py-6">
          <div className="container">
            <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
              <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Scholarships</div>
              <h2 className="mb-5">Available Scholarships</h2>
            </div>
            <div className='d-flex flex-row form-control justify-content-around align-items-center mt-3 mb-3'>
            <div style={{width:"30%"}}>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Enter country' 
                  name='country'
                  value={searchParams.country}
                  onChange={handleInputChange}
                  />
            </div>
            <div style={{width:"30%"}}>
                <select 
                className="form-select text-secondary" 
                aria-label="Default select example"
                name='level'
                value={searchParams.level}
                onChange={handleInputChange}
                >
                <option selected>Level</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Post graduate</option>
              </select>
            </div >
            <div style={{width:"30%"}} className='d-flex flex-row justify-content-between align-items-center'>
                <input 
                type="text" 
                className='form-control' 
                placeholder='Enter course title'
                name='course'
                value={searchParams.course}
                onChange={handleInputChange}
                />
                <button className='btn btn-primary ms-2' onClick={handleSearch}>Search</button>
            </div>

            

            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-7 wow fadeInUp w-100" data-wow-delay="0.3s">
                {/* Add your scholarship content here */}

                {/* Update search bar inputs to be controlled */}
                    

                    {loading && <div>Loading...</div>}
                    {!loading && results.length > 0 && (
                      <ul className="list-group mb-3 ">
                        {results.map(course => (
                          <li key={course.id} className="list-group-item">
                            <strong>{course.title}</strong> - {course.country} ({course.level}) -  fees ${course.fees}
                          </li>
                        ))}
                      </ul>
                    )}
                    {!loading && results.length === 0 && <div>No scholarships found.</div>}
              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Scholarships