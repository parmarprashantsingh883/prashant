import { FaTruck, FaShieldAlt, FaUndo, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import React from "react";
import "../Footer.css";

export default function Footer() {
  return (
    <>
      {/* TOP FEATURES BAR */}
      <div className="footer-top">
        <div className="feature-box">
          <FaTruck className="feature-icon" />
          <div>
            <h4>Free Delivery</h4>
            <p>On orders over $50</p>
          </div>
        </div>

        <div className="feature-box">
          <FaShieldAlt className="feature-icon" />
          <div>
            <h4>Secure Payment</h4>
            <p>100% Protected</p>
          </div>
        </div>

        <div className="feature-box">
          <FaUndo className="feature-icon" />
          <div>
            <h4>Easy Returns</h4>
            <p>24 Hour Policy</p>
          </div>
        </div>

        <div className="feature-box">
          <FaPhone className="feature-icon" />
          <div>
            <h4>24/7 Support</h4>
            <p>Dedicated Help</p>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <footer className="main-footer">
        <div className="footer-grid">
          
          {/* Column 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-circle">M</span>
              <h2>Mega Mart</h2>
            </div>

            <p className="footer-desc">
              Your trusted destination for fresh groceries, organic produce, 
              and quality everyday essentials since 2014.
            </p>

            <div className="footer-socials">
              <span><FaFacebookF /></span>
              <span><FaInstagram /></span>
              <span><FaTwitter /></span>
              <span><FaYoutube /></span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Shop All</li>
              <li>Special Offers</li>
              <li>Categories</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3>Customer Service</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Track Order</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              <li>123 Market Street, Fresh City, FC 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@megamart.com</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 Mega Mart. All rights reserved.</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </footer>
    </>
  );
}
