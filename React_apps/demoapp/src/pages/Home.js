import React from 'react'
function Home() {
  return (
    <>
<div>
  <div className="container  mt-5 mb-5  p-1">    
    <div className="row">
      {/* Left column (Image) */}
      <div className="col-lg-5 col-md-12 col-12 p-3 h-50 pt-5 position-relative" data-aos="fade-right" data-aos-duration={1000}>
        <img src="images/staff-8.webp" className="img-fluid rounded-5  hero-img object-fit-cover  b-shadow" alt="Staff Image" />
        <div className=" col-lg-7 col-md-12 position-absolute top-0 start-0 m-3 bg-white shadow p-3 rounded-3 d-flex align-items-center">
          <div className="bg-light rounded-circle p-3 me-3">
            <i className="bi bi-telephone text-primary fs-3" />
          </div>
          <div>
            <small className="text-muted">24/7 Emergency</small><br />
            <strong>+1 (555) 911-2468</strong>
          </div>
        </div>
        <div className="position-absolute  start-50 translate-middle-x m-3 bg-white shadow-sm p-3 py-2 rounded-3 d-flex gap-4 align-items-center" style={{width: 250, height: 100, bottom: 20}}>
          <div className="text-center">
            <span className="text-primary fw-bold fs-6">25K+</span><br />
            <small className="text-muted">Patients</small>
          </div>
          <div className="vr" />
          <div className="text-center">
            <span className="text-success fw-bold fs-6">98%</span><br />
            <small className="text-muted">Satisfaction</small>
          </div>
        </div>
      </div>
      {/* Right column (Content) */}
      <div className="col-lg-7 col-md-12 col-12 d-flex flex-column" data-aos="fade-left" data-aos-duration={1000}>
        <span className="text mt-3">Trusted Healthcare Provider</span>
        <h1 className="display-4 fw-bold">Excellence in Medical</h1>
        <h1 className="display-4 fw-bold">Care Since 1985</h1>
        <p className="description">
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.
        </p>
        <div className="row text-center mt-4 g-0">
          {/* Box 1 */}
          <div className="col-lg-4 col-md-4 d-flex align-items-center">
            <i className="bi bi-award icon-box icones" />
            <div className="ms-2">
              <span className="fw-bold fs-3">35+</span>
              <span className="text-secondary d-block">Years</span>
              <span>Experience</span>
            </div>
          </div>
          {/* Box 2 */}
          <div className="col-lg-4 col-md-4 d-flex align-items-center">
            <i className="bi bi-people icon-box icones" />
            <div className="ms-2">
              <span className="fw-bold fs-3">500+</span>
              <span className="text-secondary d-block">Happy</span>
              <span>Patients</span>
            </div>
          </div>
          {/* Box 3 */}
          <div className="col-lg-4 col-md-4 d-flex align-items-center">
            <i className="bi bi-geo-alt-fill icon-box icones" />
            <div className="ms-2">
              <span className="fw-bold fs-3">20+</span>
              <span className="text-secondary d-block">City</span>
              <span>Locations</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="d-flex gap-5 ms-4">
              {/* First button */}
              <button className="btn btn-info text-white fw-bold px-4 py-3 rounded-3">
                Schedule Consultation
              </button>
              {/* Second button */}
              <button className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-3">
                <i className="bi bi-play-circle me-2" /> Watch Our Story
              </button>
            </div>
          </div>
        </div>
        <div className="row align-items-center text-dark d-flex gap-4 mt-3 ms-3">
          {/* First item */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center flex-wrap">
            <i className="bi bi-calendar-check text-info me-2" />
            <span>Find Available Times</span>
          </div>
          {/* Second item */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center flex-wrap">
            <i className="bi bi-chat-dots text-info me-2" />
            <span className="text-nowrap">Chat with Support</span>
          </div>
          {/* Third item */}
          <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-center flex-wrap">
            <i className="bi bi-phone text-info me-2" />
            <span className="text-nowrap">Patient Portal</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid mt-5 mb-5" data-aos="fade-up" data-aos-delay={150}>
    <div className="row">
      <div className="col-12 text-center">
        <h1>Excellence in Healthcare Since 1985</h1>
        <p className="text-center text-muted fs-5 lh-lg">
          We are committed to providing world-class medical care through <br />
          innovation, compassion, and unwavering dedication to our <br />
          patients' wellbeing and recovery.
        </p>
      </div>
    </div>
  </div>
  <div className="container mb-5  ">
    <div className="row d-flex justify-content-evenly align-items-stretch">
      {/* Left Column */}
      <div className="col-lg-4 col-md-12   mt-5 flex-fill" data-aos="fade-right" data-aos-duration={1000}>
        <img src="/images/facilities-6.webp" className="img-fluid rounded-3 w-100  d-block object-fit-cover" alt style={{height: 430}} />
      </div>
      {/* Middle Column (stacked images) */}
      <div className="col-lg-3 col-md-12 mb-3   mt-5" data-aos="fade-right" data-aos-duration={1000}>
        <div className="row gap-4 ">
          <div className="col-12 flex-fill">
            <img src="/images/consultation-3.webp" className="img-fluid rounded-3 w-100 h-100 object-fit-cover" alt />
          </div>
          <div className="col-12 flex-fill">
            <img src="/images/surgery-2.webp" className="img-fluid rounded-3 w-100 h-100 object-fit-cover" alt />
          </div>
        </div>
      </div>
      {/* Right Column */}
      <div className="col-lg-5 col-md-12  p-2 rounded-3 h-100 mt-0 " data-aos="fade-left" data-aos-duration={1000}>
        <div className="highlight-box bg-white shadow-lg  p-3 rounded-4  border-start   border-5 border-info d-flex mb-4 py-4 ">
          <i className="bi bi-heart-pulse-fill icones icon-box" />
          <div className="heading d-flex flex-column  ps-5">
            <h4>Patient-Centered Approach</h4>
            <p>Every treatment plan is carefully customized to meet individual patient needs and medical history.</p>
          </div>
        </div>
        {/* First highlighted feature */}
        <div className="col-12 ps-2 mb-3 d-flex align-items-center gap-3   px-3 rounded">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <p className="mb-0">Advanced diagnostic technology and imaging</p>
        </div>
        {/* Other features */}
        <div className="col-12 ps-2 d-flex align-items-center gap-3 mb-3 ">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <p className="mb-0">Board-certified physicians and specialists</p>
        </div>
        <div className="col-12 ps-2 d-flex align-items-center gap-3 mb-3 ">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <p className="mb-0">Comprehensive rehabilitation programs</p>
        </div>
        <div className="col-12 ps-2 d-flex align-items-center gap-3 mb-3">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <p className="mb-0">24/7 emergency and critical care services</p>
        </div>
        <div className="col-12 d-flex gap-5 ps-3">
          <div className="per d-flex flex-column align-items-center ps-2">
            <h1 className="mb-0 color">98%</h1>
            <p className="text-secondary mb-0">Patient Satisfaction</p>
          </div>
          <div className="num d-flex flex-column   align-items-center ps-2">
            <h1 className="mb-0 color">35K</h1>
            <p className="text-secondary mb-0">Lives Improved</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="d-flex gap-4 ms-4">
              {/* First button */}
              <button className="btn btn-info text-white fw-bold px-4 py-3 rounded-3">
                Explore Our Services
              </button>
              {/* Second button */}
              <button className="btn btn-outline-secondary fw-bold px-4 py-3 rounded-3">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12 d-flex  flex-column align-items-center justify-content-center bg-white rounded-3 shadow-lg py-5" data-aos="fade-up" data-aos-duration={1000}>
        <h1>Featured Departments</h1>
        <p className="mt-3">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>
    </div>
  </div>
  <div className="container mt-5" data-aos="fade-up" data-aos-duration={1000}>
    <div className="row">
      {/* Left section */}
      <div className="col-lg-6 col-md-12 d-flex flex-column">
        <span className="text-uppercase fw-bold text-primary">Emergency Medicine</span>
        <h2 className="display-4 fw-bold">24/7 Emergency Care Services</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        {/* Features */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <span>Advanced diagnostic technology and imaging</span>
        </div>
        <div className="d-flex align-items-center gap-3 mb-3">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <span>Board-certified physicians and specialists</span>
        </div>
        <div className="d-flex align-items-center gap-3 mb-3">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <span>Comprehensive rehabilitation programs</span>
        </div>
        <div className="d-flex align-items-center gap-3 mb-3">
          <i className="bi bi-check-circle-fill fs-5 text-success" />
          <span>24/7 emergency and critical care services</span>
        </div>
        <a href="#" className="slide-btn text-decoration-none fs-5 my-auto">
          Learn More <i className="bi bi-arrow-right" />
        </a>
      </div>
      {/* Right section */}
      <div className="col-lg-6 col-md-12">
        <img src="/images/emergency-3.webp" className="img-fluid object-fit-cover rounded-3" alt="Emergency Care" />
      </div>
    </div>
  </div>
  <div className="container mb-5 mt-5">
    <div className="row d-flex g-5 ">
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>/ */}
      {/* </div>/ */}
      {/* <div class="container mb-5 mt-5"> */}
      {/* <div class="row d-flex g-5 "> */}
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 " data-aos="fade-up" data-aos-duration={1000}>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 " data-aos="fade-up" data-aos-duration={1000}>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 " data-aos="fade-up" data-aos-duration={1000}>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container bg-info-subtle mt-5 mb-5" data-aos="fade-up" data-aos-duration={1000}>
    <div className="row">
      <div className="col-12 p-5 text-center">
        <h1>Explore All Our Medical Departments</h1>
        <p>Et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        <p>praesentium voluptatum deleniti atque corrupti quos dolores</p>
        <button className="btn btn-primary my-btn p-3"> View All Department</button>
      </div>
    </div>
  </div>
  <div className="container  mt-5 mb-5" data-aos="fade-up" data-aos-duration={1000}>
    <div className="row">
      <div className="col-12 p-5 text-center">
        <h1 className="mb-3">Featured Services</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
    </div>
  </div>
  <div className="container my-5" data-aos="fade-up" data-aos-duration={1000}>
    <div className="row d-flex g-5 justify-content-center">
      <div className="col-md-4">
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/cardiology-2.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Cardiology</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/neurology-3.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Cardiology</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/orthopedics-1.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Cardiology</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row d-flex g-5 justify-content-center">
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/pediatrics-4.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Pediatric Care</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/oncology.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Oncology Treatment</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={1000}>
        <div className="card shadow" style={{maxWidth: 400, transition: 'transform 0.3s ease, box-shadow 0.3s ease'}}>
          <img src="/images/laboratory-3.webp" className="img-fluid card-img-top object-fit-cover" alt="Cardiology" />
          <div className="card-body">
            <h5 className="card-title">Laboratory Services</h5>
            <p className="card-text">Specialized care and advanced treatment for heart health.</p>
            <a href="#" className="btn btn-primary slide-btn">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12 p-5 text-center" data-aos="fade-up" data-aos-duration={1000}>
        <h1 className="mb-3">Find A Doctor</h1>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12 p-5 text-center  rounded-3" data-aos="fade-up" data-aos-duration={1000} style={{backgroundColor: 'rgb(224, 243, 255)'}}>
        <h1 className="mb-3">Discover Your Ideal Medical Specialist</h1>
        <p>Connect with our network of certified healthcare professionals across all</p>
        <p> medical disciplines</p>
      </div>
    </div>
  </div>
  <section className="doctor-search py-5">
    <div className="container">
      <form className="search-box p-4 shadow-sm rounded-4 bg-white">
        <div className="row g-3 align-items-end">
          {/* Practitioner Name */}
          <div className="col-md-4">
            <label className="form-label fw-semibold">Practitioner Name</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-search" /></span>
              <input type="text" className="form-control border-start-0" placeholder="Search by name..." />
            </div>
          </div>
          {/* Medical Specialty */}
          <div className="col-md-4">
            <label className="form-label fw-semibold">Medical Specialty</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-plus-circle" /></span>
              <select className="form-select border-start-0">
                <option selected>Select specialty</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
              </select>
            </div>
          </div>
          {/* Location */}
          <div className="col-md-3">
            <label className="form-label fw-semibold">Location</label>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="bi bi-geo-alt" /></span>
              <select className="form-select border-start-0">
                <option selected>All locations</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Pune</option>
                <option>Bangalore</option>
              </select>
            </div>
          </div>
          {/* Search Button */}
          <div className="col-md-1 text-center">
            <button type="submit" className="btn btn-teal rounded-3 w-100 h-100">
              <i className="bi bi-arrow-right text-white fs-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
  <div className="container">
    <div className="row g-4"> {/* g-4 adds equal spacing between cards */}
      {/* Card 1 */}
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      {/* Copy for Card 2 */}
      <div className="col-lg-4 col-md-6 " data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      {/* Copy for Card 3 */}
      <div className=" col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* <div class="container mt-5 mb-5"> */}
      {/* <div class="row g-4"> g-4 adds equal spacing between cards */}
      {/* Card 1 */}
      <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      {/* Copy for Card 2 */}
      <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      {/* Copy for Card 3 */}
      <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration={600}>
        <div className="card p-3 h-100">
          <div className="d-flex align-items-center">
            <img src="/images/staff-1.webp" className="rounded-circle me-3" alt="Doctor" style={{width: 70, height: 70, objectFit: 'cover'}} />
            <div>
              <h3 className="h6 mb-1">Jennifer Morgan</h3>
              <p className="text-muted mb-0">Senior Cardiologist</p>
              <div className="d-flex align-items-center mt-3">
                <span className="badge bg-info text-dark me-2">MD, FACC</span>
                <small className="text-muted">18 years</small>
              </div>
            </div>
          </div>
          <div className="card-body mt-3 d-flex align-items-center">
            <span className="text-warning me-1">★★★★★</span>
            <span className="fw-bold me-1">4.9</span>
            <small className="text-muted">(142 patients)</small>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-secondary w-50 me-2">Profile</button>
            <button className="btn btn-info text-white fw-bold w-50">Consult</button>
          </div>
        </div>
      </div>
      <div className="col-12 text-center mt-5 mb-5">
        <button className="btn btn-info text-white fw-bold px-4 py-3">
          Browse Complete Directory
          <i className="bi bi-chevron-right ms-2" />
        </button>
      </div>
    </div>
  </div>
  <div className="caontainer-fluid bg-dark-subtle mb-5 py-5">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column gap-3 px-5 py-3" data-aos="fade-right" data-aos-duration={1000}>
          <h1>Exceptional Care for Your Health Journey</h1>
          <p className="fs-5">Discover comprehensive healthcare services delivered with compassion and expertise. Our
            dedicated team is committed to providing personalized medical care that puts you first.
          </p>
          <div className="row ">
            <div className="col-12 d-flex gap-4 mt-4">
              <button className="btn btn-primary p-3 "> Schedual Consoltation</button>
              <a href="#" className="slide-btn text-decoration-none fs-5 my-auto">
                Learn More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5  p-0" data-aos="fade-left" data-aos-duration={1000}>
          <img src="/images/showcase-2.webp" className="img-fluid rounded-3  object-fit-cover shadow-lg shadow-danger " alt />
        </div>
      </div>
    </div>
  </div>
  <div className="container mt-5 mb-5">
    <div className="row d-flex g-4 border border-1 border-white shadow-lg">
      <div className="col-lg-3 col-md-6 d-flex flex-column text-center p-4 ">
        <h2 className="text-info fw-bold mb-0 ">25+</h2>
        <h5 className="mt-2">Years Experience</h5>
      </div>
      <div className="col-lg-3 col-md-6 d-flex flex-column text-center p-4 ">
        <h2 className="text-info fw-bold mb-0 ">15+</h2>
        <h5 className="mt-2">Happy Patients</h5>
      </div>
      <div className="col-lg-3 col-md-6 d-flex flex-column text-center p-4 ">
        <h2 className="text-info fw-bold mb-0 ">50+</h2>
        <h5 className="mt-2">YMedical Experts</h5>
      </div>
      <div className="col-lg-3 col-md-6 d-flex flex-column text-center p-4 ">
        <h2 className="text-info fw-bold mb-0 ">24/7</h2>
        <h5 className="mt-2">Emergency Care
        </h5>
      </div>
    </div>
  </div>
  <div className="container mb-5 mt-5">
    <div className="row d-flex g-5 ">
      <div className="col-lg-4 col-md-6">
        <div className="card d-flex justify-content-center  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-center fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 text-center ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="card d-flex justify-content-start  p-3 ">
          <i className="bi bi-heart-pulse-fill fs-1 text-info  icon-box2 rounded-circle  " />
          <div className="card-body">
            <h5 className="text-start fw-bold">Cardiology</h5>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores.</p>
            <div className="card-title d-flex gap-5 mt-5 ">
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
              <div className="text-center">
                <h5 className="text-info fw-bold mb-0">15+</h5>
                <h5 className="mt-0"> specilities</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5 mt-5 mb-5 " data-aos="zoom-in" data-aos-duration={600}>
    <div className="row align-items-center  shadow-lg text-white p-5 rounded-4" style={{backgroundColor: '#00a6ad'}}>
      {/* Left: Icon + Text */}
      <div className="col-lg-6  col-md-12 d-flex align-items-center gap-3 mb-4">
        {/* Circle Icon */}
        <div className="bg-light bg-opacity-25 rounded-circle p-3 d-flex align-items-center justify-content-center">
          <i className="bi bi-telephone-fill fs-3" />
        </div>
        {/* Text */}
        <div>
          <h5 className="mb-1 fw-bold">Need Immediate Assistance?</h5>
          <p className="mb-0 small">Our medical team is available around the clock for urgent consultations and emergency
            support.</p>
        </div>
      </div>
      {/* Right: Phone number + Link */}
      <div className="col-lg-6  col-md-12-flex-column d-flex  ps-5 mt-3  align-items-center gap-4 mt-3 ">
        {/* Phone number box */}
        <div className="bg-white text-dark px-4 py-2 rounded-3 d-flex align-items-center gap-2 fw-bold">
          <i className="bi bi-telephone-fill" />
          (555) 123-4567
        </div>
        {/* Directions link */}
        <a href="#" className="text-white fw-bold text-decoration-underline">Get Directions</a>
      </div>
    </div>
  </div>
</div>
</>
  );
}
export default Home;