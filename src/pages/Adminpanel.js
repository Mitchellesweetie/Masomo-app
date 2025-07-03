import React from 'react'
import {Outlet,Link} from 'react-router-dom'

function Adminpanel() {
  return (
    <div>
      <h1 className='text-center mt-5'>Admin Panel</h1>
      <p className='text-center'>This is the admin panel. You can manage your website from here.</p>
      <p className='text-center'>You can view the contact submissions by clicking on the button below.</p>
      <div className='text-center'>
        <Link className='btn btn-primary' to="responses" >View Contact Submissions</Link>
        <Link className='btn btn-secondary ms-3' to="courselist" >View Course List</Link>
        <Link className='btn btn-success ms-3' to="blogs">View Blogs</Link>
      </div>

      <main>
        <Outlet />
      </main>
      
    </div>
  )
}

export default Adminpanel