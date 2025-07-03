import React from 'react'
import {Link}from 'react-router-dom';
function About() {
  return (
    <div>
        {/* About Start */}
          <div className="container-xxl py-6 ">
            <div className="container">
              <div className="d-inline-block border rounded-pill px-4 mt-4 mb-3" style={{color:"rgb(248, 185, 32)"}}>About Us</div>
              <h1 
                className="fw-bold mb-4 text-gradient"
                style={{
                  fontSize: "2.8rem",
                  background: "linear-gradient(90deg, rgb(56,77,125) 0%, rgb(248,185,32) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "1px",
                  lineHeight: "1.2"
                }}
              >
                Changing trajectory of our generation for generations to come
              </h1>

              <div className="row g-5 ">
                
                <div className="col-lg-6 wow zoomIn" data-wow-delay="0.1s">
                  <img className="img-fluid mb-3 rounded-3 " style={{"height":"600px"}} src="img/abroad_uni.jpg" />
                  
                </div>
                <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
                  <h2 className="mb-4">Global Academic Opportunities</h2>
                  <p className="mb-4 text-dark">Our mission is to transform dreams of international education into reality through personalized counseling, comprehensive admissions support, and strategic partnerships with reputable educational institutions worldwide.</p>
                  <p className="mb-4 text-dark">We specialize in study abroad programs, scholarship application assistance, visa processing, internship placements, and pre-departure orientations, aiming to nurture future leaders, professionals, and change-makers in various fields.</p>
                  
                  <div className="row g-3 mb-4">
                    <div className="col-12 d-flex">
                      {/* <div className="flex-shrink-0 btn-lg-square rounded-circle" style={{backgroundColor: "rgb(56, 77, 125)"}}>
                        
                      </div> */}
              <div className="ms-4">
                <i className="bi bi-eye-fill text-primary" style={{fontSize:"40px"}} />
                <h6>Vision</h6>
                <span>To create a better world by embracing change and transforming the African education landscape </span>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              {/* <div className="flex-shrink-0 btn-lg-square rounded-circle " style={{backgroundColor: "rgb(56, 77, 125)"}}>
                
              </div> */}
              <div className="ms-4">
                <i className="bi bi-pin-angle-fill text-primary" style={{fontSize:"40px"}}/>
                <h6>Motto </h6>
                <span>Pioneering Futures</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
                <Link to="/services" className="btn btn-primary rounded-pill py-3 px-5 mt-2" href style={{backgroundColor:"rgb(56, 77, 125)"}}>Read More</Link>

    </div>
  </div>
  {/* About End */}

  {/* Newsletter Start */}
<div className="container-xxl my-0 wow fadeInUp" data-wow-delay="0.1s" style={{backgroundColor: "rgb(56, 77, 125)"}}>
  <div className="container px-lg-5">
    <div className="row align-items-center" style={{height: 250}}>
      <div className="col-12 col-md-6">
        <h3 className="text-white">Ready to get started</h3>
        <small className="text-white">Subscribe to our email to get updates on the latest opportunites available </small>
        <div className="position-relative w-100 mt-3">
          <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: 48}} />
          <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane fs-4 " style={{color: "rgb(56, 77, 125)"}} /></button>
        </div>
      </div>
      <div className="col-md-6 text-center mb-n5 d-none d-md-block">
        <img className="img-fluid mt-5" style={{maxHeight: 250}} src="img/newsletter.png" />
      </div>
    </div>
  </div>
</div>
{/* Newsletter End */}

    </div>
  )
}

export default About