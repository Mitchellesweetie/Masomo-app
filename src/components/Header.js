import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function Header() {

  //Taraji Yellow color rgb(248, 185, 32)
  //Taraji Blue color rgb(56, 77, 125)
  return (
    <div>
        {/* Navbar & Hero Start */}
<div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{backgroundColor: "rgb(56, 77, 125)"}}>
    <Link to="/" className="navbar-brand p-0">
      <h1 className="m-0">Taraji Masomo Care</h1>
    </Link>
    {/* <a href="index.html" className="navbar-brand p-0">
      <h1 className="m-0">Taraji Masomo</h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    {/* </a>  */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0">
        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
        <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
        <NavLink to="/blogs" className="nav-item nav-link">Blogs</NavLink>
        <NavLink to="/scholarships" className="nav-item nav-link">Scholarships</NavLink>
        <div className="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
            <div class="dropdown-menu m-0">
                <Link to="/impact" class="dropdown-item">Social Impact</Link>
                <Link to="/contact" class="dropdown-item">Partner with us</Link>
                {/* <a href="team.html" class="dropdown-item">Our Team</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="404.html" class="dropdown-item">404 Page</a> */}
            </div>
        </div>
      </div>
      <NavLink to="/contact" className="btn btn-light rounded-pill py-2 px-4 ms-lg-5" style={{color:"rgb(56, 77, 125);"}}>Book Now</NavLink>
    </div>
  </nav>
  {/* <div className="container-xxl bg-primary hero-header">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="text-white mb-4 animated zoomIn">We Help To Push Your Business To The Top Level</h1>
          <p className="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
          <a href className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight">Learn More</a>
        </div>
        <div className="col-lg-6 text-center text-lg-start">
          <img className="img-fluid animated zoomIn" src="img/hero.png" alt />
        </div>
      </div>
    </div>
  </div> */}
</div>
{/* Navbar & Hero End */}

    </div>
  )
}

export default Header