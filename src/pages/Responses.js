import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Responses() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem('token');
      

      if (!token) {
      console.warn('No token found. User might not be logged in.');
      return;
    }

      console.log('Fetching contacts with token:', token);

      try {
        const res = await axios.get('https://api.tarajimasomo.co.ke/api/contacts',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log('Contacts fetched:', res.data);
        setContacts(res.data);
      } catch (err) {
        console.error('Error fetching contacts:', err);
      }
    };

    fetchContacts();
  }, []);
  return (
    <div className='container mt-4'>
        <h2>Contact Submissions</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Country</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Phone</th>
            <th>Time to reach out</th>
            <th>Subject</th>
            <th>Date Submitted</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.country}</td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{contact.phone}</td>
              <td>{contact.time}</td>
              <td>{contact.subject}</td>
              <td>{new Date(contact.date).toLocaleString()}</td>
              <td>
                <button className="btn btn-danger" onClick={async () => {
                  try {
                    await axios.delete(`http://api.tarajimasomo.co.ke/api/contacts/${contact._id}`, {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                      }
                    });
                    setContacts(contacts.filter(c => c._id !== contact._id));
                  } catch (err) {
                    console.error('Error deleting contact:', err);
                  }
                }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Responses