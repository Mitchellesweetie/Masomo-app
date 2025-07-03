// import { Carousel } from 'bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link, NavLink } from 'react-router-dom';

function Services() {
  return (
    <div>

      <div style={{
        width: "100%",
        background: "#f8b920",
        color: "#222",
        fontWeight: "bold",
        fontSize: "1.1rem",
        padding: "8px 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        marginBottom: "20px"
      }}>
        <marquee behavior="scroll" direction="left" scrollamount="6">
          Currently Active Programme: Undergraduate Scholarships for September 2025 Intake – Apply Now!
        </marquee>
      </div>

        {/* Service Start */}
          <div className="container-xxl py-6">
            <div className="container">
              <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                <div className="d-inline-block border rounded-pill px-4 mt-3 mb-3" style={{color:"rgb(248, 185, 32)"}}>Our Services</div>
                <h2 className="mb-5">We Sort Your Academic needs</h2>
              </div>
              <div className="row g-4">
                {[
                  {
                    icon: "fa-user-tie",
                    title: "Application assistance",
                    desc: "Support in filling out university applications, compiling required documents, and meeting deadlin"
                  },
                  {
                    icon: "fa-chart-pie",
                    title: "Accomodation Support",
                    desc: "Help students find and book student housing or hostels in their destination country."
                  },
                  {
                    icon: "fa-chart-line",
                    title: "Language Test Preparation",
                    desc: "Coaching or resources for IELTS, TOEFL, PTE, or other language proficiency tests required by universities."
                  },
                  {
                    icon: "fa-chart-area",
                    title: "University & Course Selection Guidance",
                    desc: "Help students choose the right university and course based on their academic background, interests, and career goals."
                  },
                  {
                    icon: "fa-balance-scale",
                    title: "Visa Counseling",
                    desc: "Step-by-step guidance for student visa applications including document checklists, interview preparation, and submission help."
                  },
                  {
                    icon: "fa-house-damage",
                    title: "Scholarship & Funding Advice",
                    desc: "Assist students in identifying and applying for scholarships, grants, and other funding opportunities."
                  },
                  {
                    icon: "fa-laptop",
                    title: "Online Academy",
                    desc: "Access interactive online courses, webinars, and workshops designed to enhance academic skills and prepare for international studies."
                  },
                  {
                    icon: "fa-book",
                    title: "Tuition Services",
                    desc: "Get paired with volunteer/paid tutors, subject-specific tutoring and peer-to-peer mentorship"
                  },
                  {
                    icon: "fa-book",
                    title: "Library Services",
                    desc: "Get subject-specific tutoring e.g Math,Biology,Programming, Swahile e.t.c and  a curated collection of e-books,journals, and articles"
                  }
                  ,
                  {
                    icon: "fa-briefcase",
                    title: "Internship & Attachment Placement",
                    desc: "Connect students with internship and attachment opportunities to gain practical experience in their field of study."
                  }
                ].map((service, idx) => (
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + 0.3 * (idx % 3)}s`} key={service.title}>
                    <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
                      <div className="service-item rounded h-100" style={{ cursor: "pointer" }}>
                        <div className="d-flex justify-content-between">
                          <div className="service-icon">
                            <i className={`fa ${service.icon} fa-2x`} />
                          </div>
                          <span className="service-btn">
                            <i className="fa fa-link fa-2x" />
                          </span>
                        </div>
                        <div className="p-5">
                          <h5 className="mb-3">{service.title}</h5>
                          <span>{service.desc}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        {/* Service End */}

   {/* Testimonial Start */}

     

    
  
<div className="container-xxl py-6">
  <div className="container">
    <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
      <div className="d-inline-block border rounded-pill px-4 mb-3" style={{color:"rgb(248, 185, 32)"}}>Testimonial</div>
      <h2 className="mb-5">What Our Clients Say!</h2>
    </div>
    <div id="carouselExampleInterval" className="carousel slide p-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/testimonial-1.jpg" className="rounded-circle me-2" alt="..." />
            <h3 className='pt-4 mb-0'> Faith W.</h3>
          </div>
          <h3>Canada</h3>
          <p>Taraji Masomo Care provided me with exceptional support throughout my study abroad journey. Their team was knowledgeable, responsive, and genuinely cared about my success. I couldn't have done it without them!</p>
        </div>
        <div className="carousel-item " data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/testimonial-2.jpg" className="rounded-circle me-2" alt="..." />
            <h3 className='pt-4 mb-0'> Brian M.</h3>
          </div>
          <h3>University of Manchester</h3>
          <p>"Taraji Masomo changed the course of my life. I had almost given up on studying abroad, but their guidance helped me land a full scholarship to the University of Toronto. They walked with me every step — from the application to the visa process. I’ll forever be grateful!"</p>
        </div>
        <div className="carousel-item " data-bs-interval={5000}>
          <div className='d-flex justify-content-center'>
            <img src="img/african_girl.jpg" className="rounded-circle me-2" style={{width:"100px", height:"100px"}} alt="..." />
            <h3 className='pt-4 mb-0'> Naomi K.</h3>
          </div>
          <h3>Australia</h3>
          <p>"The team at Taraji Masomo made the entire scholarship application process feel easy. Their support helped me secure funding at a top university in the UK. I highly recommend them to any student dreaming big!"</p>
        </div>
       
      </div>
      <button className="carousel-control-prev text-primary" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon text-primary" aria-hidden="true" ><i class="bi bi-chevron-compact-left"></i></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next text-dark" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon text-primary" aria-hidden="true" ><i class="bi bi-chevron-compact-right"></i></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" />
          <div className="ps-3">
            <h6 className="mb-1">Client Name</h6>
            <small>Profession</small>
          </div>
        </div>
      </div>
    </div> */}
  </div>
</div>
{/* Testimonial End */}


    </div>
  )
}

export default Services