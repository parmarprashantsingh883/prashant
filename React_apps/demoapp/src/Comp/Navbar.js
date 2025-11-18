import React from 'react';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid sticky-top">
        <div className="row">
          <div className="col-12 header d-flex align-items-center border-bottom bg-warning px-lg-5 px-md-3 px-2 py-3">
            
            {/* Logo */}
            <h2 className="font mb-0 ms-5 d-none d-sm-block">
              Medi<span className="colors">Nest</span>
            </h2>
            <h2 className="font mb-0 d-sm-none">
              Medi<span className="colors">Nest</span>
            </h2>

            {/* Desktop Navigation */}
            <ul className="list-inline d-none d-lg-flex gap-4 mb-0 ms-5 flex-grow-1 justify-content-center align-items-center">
              <li className="list-inline-item">
                <NavLink style={{ color: '#00a6ad' }} to="/" className="text-decoration-none fs-6">Home</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/about" className="text-dark fs-6 text-decoration-none">About</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/department" className="text-dark fs-6 text-decoration-none">Department</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/service" className="text-dark fs-6 text-decoration-none">Services</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/doctor" className="text-dark fs-6 text-decoration-none">Doctor</NavLink>
              </li>

              {/* Dropdown (example, static for now) */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark fs-6 text-decoration-none" href="#" role="button" data-bs-toggle="dropdown">
                  More Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Dropdown 1</a></li>
                  <li><a className="dropdown-item" href="#">Dropdown 2</a></li>
                  <li><a className="dropdown-item" href="#">Dropdown 3</a></li>
                </ul>
              </li>

              <li className="list-inline-item">
                <Link to="/contact" className="text-dark fs-6 text-decoration-none">Contact</Link>
              </li>
            </ul>

            {/* Appointment Button */}
            <button type="button" className="btn btn-info d-none d-lg-block me-5">Appointment</button>

            {/* Hamburger (mobile) */}
            <button className="btn d-lg-none ms-auto me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
              <i className="bi bi-list fs-1 text-dark"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasMenu">
        <div className="offcanvas-header">
          <h2 className="font mb-0 ms-3 offcanvas-title">
            Medi<span className="colors">Nest</span>
          </h2>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li><Link to="/" className="d-block py-2 text-dark text-decoration-none">Home</Link></li>
            <li><Link to="/about" className="d-block py-2 text-dark text-decoration-none">About</Link></li>
            <li><Link to="/department" className="d-block py-2 text-dark text-decoration-none">Department</Link></li>
            <li><Link to="/service" className="d-block py-2 text-dark text-decoration-none">Services</Link></li>
            <li><Link to="/doctor" className="d-block py-2 text-dark text-decoration-none">Doctor</Link></li>
            <li><Link to="/contact" className="d-block py-2 text-dark text-decoration-none">Contact</Link></li>
          </ul>
          <button type="button" className="btn btn-info mt-3 w-100">Appointment</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
