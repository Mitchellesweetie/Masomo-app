import React, {useState,useEffect}from 'react'
import axios from 'axios';

function CourseList() {

    const [courses, setCourses] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        // if (loading) return <div>Loading courses...</div>;
        // if (error) return <div>{error}</div>;


        useEffect(() => {
            const fetchCourses = async () => {
                try {
                    const response = await axios.get('http://api.tarajimasomo.co.ke/api/courses');
                    setCourses(response.data);
                } catch (err) {
                    setError('Failed to fetch courses');
                } finally {
                    setLoading(false);
                }
            };
            fetchCourses();
        }, []);
if (loading) return <div>Loading courses...</div>;
if (error) return <div>{error}</div>;

const handleDelete = async (id) => {
    
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
        await axios.delete(`https://api.tarajimasomo.co.ke/api/courses/${id}`);
        setCourses(courses.filter(course => course.id !== id));
    } catch (err) {
        setError('Failed to delete course');
    }
};

return (
    <div className="mt-4 ps-3 pe-3">
        <div className="d-flex justify-content-around align-items-center mb-3">
            <h4>Listed Courses</h4>
            <button
                className="btn btn-success"
                onClick={() => window.location.href = '/courses'}
            >
                Add New Course
            </button>
        </div>
        {courses.length === 0 ? (
            <div>No courses found.</div>
        ) : (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Country</th>
                        <th>Level</th>
                        <th>Fees</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>{course.title}</td>
                            <td>{course.country}</td>
                            <td>{course.level}</td>
                            <td>${course.fees}</td>
                            <td>
                                {/* <button className="btn btn-sm btn-primary me-2">Edit</button> */}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(course._id).then(() => window.location.reload())}
                                >
                                    
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </div>
)
}

export default CourseList