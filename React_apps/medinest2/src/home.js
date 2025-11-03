import React from "react";



function Home() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <div className="container-fluid sticky-top">
        <div className="row">
          <div className="col-12 header d-flex align-items-center border-bottom bg-warning px-lg-5 px-md-3 px-2 py-3">
            {/* Logo (desktop + tablet ≥ 576px) */}
            <h2 className="font mb-0 ms-5 d-none d-sm-block">
              Medi<span className="colors">Nest</span>
            </h2>

            {/* Logo (phone only < 576px) */}
            <h2 className="font mb-0 d-sm-none">
              Medi<span className="colors">Nest</span>
            </h2>

            {/* Desktop Navigation */}
            <ul className="list-inline d-none d-lg-flex gap-4 mb-0 ms-5 flex-grow-1 justify-content-center align-items-center">
              <li className="list-inline-item">
                <a
                  href="#home"
                  className="text-decoration-none fs-6"
                  style={{ color: "#00a6ad" }}
                >
                  Home
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#about" className="text-dark fs-6 text-decoration-none">
                  About
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#department"
                  className="text-dark fs-6 text-decoration-none"
                >
                  Department
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#services"
                  className="text-dark fs-6 text-decoration-none"
                >
                  Services
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#doctors"
                  className="text-dark fs-6 text-decoration-none"
                >
                  Doctor
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="#contact"
                  className="text-dark fs-6 text-decoration-none"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Appointment Button (desktop only) */}
            <button
              type="button"
              className="btn btn-info d-none d-lg-block me-5 mx-auto"
            >
              Appointment
            </button>

            {/* Hamburger (mobile + tablet < 992px) */}
            <button
              className="btn d-lg-none ms-auto me-sm-1"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
            >
              <i className="bi bi-list fs-1 text-dark"></i>
            </button>
          </div>
        </div>
      </div>

      {/* ===== OFFCANVAS MENU ===== */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu">
        <div className="offcanvas-header">
          <h2 className="font mb-0 ms-5 offcanvas-title">
            Medi<span className="colors">Nest</span>
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <a
                href="#home"
                className="d-block py-2 text-dark text-decoration-none"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="d-block py-2 text-dark text-decoration-none"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#department"
                className="d-block py-2 text-dark text-decoration-none"
              >
                Department
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="d-block py-2 text-dark text-decoration-none"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#doctors"
                className="d-block py-2 text-dark text-decoration-none"
              >
                Doctor
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="d-block py-2 text-dark text-decoration-none"
              >
                Contact
              </a>
            </li>
          </ul>
          <button type="button" className="btn btn-info mt-3 w-100">
            Appointment
          </button>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          height: "90vh",
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/free-photo/doctor-standing-with-stethoscope-his-hand_1150-21728.jpg') center/cover no-repeat",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Your Health, Our Priority</h1>
          <p className="lead mt-3">
            Caring for you with the best medical services and trusted doctors.
          </p>
          <a href="#appointment" className="btn btn-info mt-4 px-4 py-2">
            Book Appointment
          </a>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            About <span className="text-info">MediNest</span>
          </h2>
          <p className="text-muted">
            MediNest is a trusted healthcare provider offering top-quality
            medical services, compassionate care, and advanced treatments for
            all. We focus on patient well-being through innovation and
            excellence.
          </p>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-heart-pulse display-5 text-info mb-3"></i>
                <h5>Qualified Doctors</h5>
                <p className="text-muted">
                  Experienced professionals providing trusted healthcare.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-hospital display-5 text-info mb-3"></i>
                <h5>Modern Facilities</h5>
                <p className="text-muted">
                  Advanced infrastructure equipped with the latest technology.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <i className="bi bi-emoji-smile display-5 text-info mb-3"></i>
                <h5>Happy Patients</h5>
                <p className="text-muted">
                  Thousands of patients trust MediNest for quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">
            Our <span className="text-info">Services</span>
          </h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow-sm">
                <i className="bi bi-heart text-info display-5 mb-3"></i>
                <h5>Cardiology</h5>
                <p className="text-muted">
                  Expert cardiac care with the best diagnostic and treatment
                  facilities.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow-sm">
                <i className="bi bi-eyedropper text-info display-5 mb-3"></i>
                <h5>Eye Care</h5>
                <p className="text-muted">
                  Comprehensive eye checkups and surgical treatments.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card p-4 shadow-sm">
                <i className="bi bi-bandaid text-info display-5 mb-3"></i>
                <h5>General Surgery</h5>
                <p className="text-muted">
                  Skilled surgeons delivering safe and effective procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-dark text-light py-4">
        <div className="container text-center">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} MediNest. All rights reserved.
          </p>
          <p className="small">
            Designed & Developed by{" "}
            <span className="text-info fw-semibold">MediNest Team</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
