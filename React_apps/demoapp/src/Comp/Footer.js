
  import React from 'react';;
  function Footer() {
  return (

  <div className="container-fluid shadow-lg">
    <div className="container bg-body-secondary p-4 rounded">
      <div className="row g-4">
        {/* Brand + Address */}
        <div className="col-lg-3 col-md-6 d-flex flex-column">
          <h2 className="fw-bold text-primary">MediNest</h2>
          <p>A108 Adam Street<br />New York, NY 535022</p>
          <p className="mb-0">Phone: +1 5589 55488 55</p>
          <p>Email: info@example.com</p>
          <div className="d-flex gap-3 mt-3">
            <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-dark" style={{width: 45, height: 45, fontSize: 18}}>
              <i className="bi bi-twitter-x" />
            </a>
            <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-dark" style={{width: 45, height: 45, fontSize: 18}}>
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-dark" style={{width: 45, height: 45, fontSize: 18}}>
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="d-flex align-items-center justify-content-center border rounded-circle text-info" style={{width: 45, height: 45, fontSize: 18, borderColor: '#0A66C2'}}>
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
        {/* Useful Links */}
        <div className="col-lg-2 col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-3">Useful Links</h5>
          <a className="footer-link" href="#">Home</a>
          <a className="footer-link" href="#">About Us</a>
          <a className="footer-link" href="#">Services</a>
          <a className="footer-link" href="#">Terms of Service</a>
          <a className="footer-link" href="#">Privacy Policy</a>
        </div>
        {/* Services */}
        <div className="col-lg-2 col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-3">Our Services</h5>
          <a className="footer-link" href="#">Web Design</a>
          <a className="footer-link" href="#">Web Development</a>
          <a className="footer-link" href="#">Product Management</a>
          <a className="footer-link" href="#">Marketing</a>
          <a className="footer-link" href="#">Graphic Design</a>
        </div>
        {/* Extra Column 1 */}
        <div className="col-lg-2 col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-3">Resources</h5>
          <a className="footer-link" href="#">Documentation</a>
          <a className="footer-link" href="#">API Reference</a>
          <a className="footer-link" href="#">Community</a>
          <a className="footer-link" href="#">Support</a>
          <a className="footer-link" href="#">FAQ</a>
        </div>
        {/* Extra Column 2 */}
        <div className="col-lg-3 col-md-6 d-flex flex-column">
          <h5 className="fw-bold mb-3">More Info</h5>
          <a className="footer-link" href="#">Careers</a>
          <a className="footer-link" href="#">Partners</a>
          <a className="footer-link" href="#">Case Studies</a>
          <a className="footer-link" href="#">Events</a>
          <a className="footer-link" href="#">Contact</a>
        </div>
      </div>
    </div>
    {/* Copyright Bar */}
    <div className="text-center mt-4 border-top py-5">
      <p className="mb-0">© 2025 <strong>MediNest</strong>. All Rights Reserved.</p>
    </div>
  </div>
  );
}
  export default Footer;

