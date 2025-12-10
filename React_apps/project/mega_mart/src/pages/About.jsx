import React from "react";
import "../about.css";

function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="story-tag">Our Story</div>

        <h1 className="about-heading">
          Bringing <span className="about-highlight">Freshness</span> to Every Home <br />
          Since 2014
        </h1>

        <p className="about-subtext">
          What started as a small family dream has grown into your trusted
          neighborhood grocery destination, serving over 50,000 happy families.
        </p>
      </section>

      {/* STATISTICS SECTION */}
      <section className="about-stats">
        <div className="container">
          <div className="row text-center justify-content-center">

            {/* 1 */}
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">10+</div>
              <div className="stats-label">Years of Service</div>
            </div>

            {/* 2 */}
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">50k+</div>
              <div className="stats-label">Happy Customers</div>
            </div>

            {/* 3 */}
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">500+</div>
              <div className="stats-label">Quality Products</div>
            </div>

            {/* 4 */}
            <div className="col-md-3 col-6 mb-4">
              <div className="stats-number">20+</div>
              <div className="stats-label">Local Farms</div>
            </div>

          </div>
        </div>
      </section>
      {/* MISSION SECTION */}
<section className="mission-section">
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT CONTENT */}
      <div className="col-lg-6 mb-5">
        <div className="mission-tag">Our Mission</div>

        <h2 className="mission-title">
          Making Healthy Living Accessible to Everyone
        </h2>

        <p className="mission-text">
          At Mega Mart, we believe everyone deserves access to fresh,
          high-quality groceries at fair prices. We work directly with local
          farmers and trusted suppliers to eliminate middlemen and pass the
          savings on to you.
        </p>

        <p className="mission-text">
          Our commitment goes beyond just selling groceries. We're building a
          community that values sustainability, supports local agriculture,
          and promotes healthy eating habits for families everywhere.
        </p>

        <button className="mission-btn">
          Start Shopping →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="col-lg-6 position-relative">
        <div className="mission-image-wrapper">
          <img src="/mart.jpg" alt="Fresh Vegetables" />

        </div>

        {/* FLOATING CARD */}
        <div className="floating-card">
          <div className="floating-icon">👨‍👩‍👧</div>
          <div>
            <div className="floating-number">50,000+</div>
            <div className="floating-label">Families trust us</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* VALUES SECTION */}
<section className="values-section">
  <div className="values-tag">Our Values</div>

  <h2 className="values-title">What Sets Us Apart</h2>
  <p className="values-subtext">
    These core values guide everything we do at Mega Mart
  </p>

  <div className="container">
    <div className="row g-4">

      {/* CARD 1 */}
      <div className="col-lg-3 col-md-6">
        <div className="value-card">
          <div className="value-icon">🌿</div>
          <h4 className="value-title">Fresh & Quality</h4>
          <p className="value-desc">
            We source directly from certified farms to ensure the freshest produce
            reaches your table.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="col-lg-3 col-md-6">
        <div className="value-card">
          <div className="value-icon">🚚</div>
          <h4 className="value-title">Fast Delivery</h4>
          <p className="value-desc">
            Same-day delivery for orders placed before 2 PM. Your groceries arrive
            fresh and on time.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="col-lg-3 col-md-6">
        <div className="value-card">
          <div className="value-icon">🛡️</div>
          <h4 className="value-title">Quality Guaranteed</h4>
          <p className="value-desc">
            Not satisfied? Get a full refund or replacement within 24 hours. No
            questions asked.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="col-lg-3 col-md-6">
        <div className="value-card">
          <div className="value-icon">🏅</div>
          <h4 className="value-title">Best Prices</h4>
          <p className="value-desc">
            We negotiate directly with farmers to bring you premium quality at
            competitive prices.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section className="contact-section">
  <div className="contact-wrapper">
    <h2 className="contact-title">Get in Touch</h2>
    <p className="contact-subtitle">
      Have questions? We'd love to hear from you.
    </p>

    <div className="container">
      <div className="row justify-content-center g-4">

        {/* Visit Us */}
        <div className="col-lg-4 col-md-6">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div>
              <div className="contact-card-title">Visit Us</div>
              <div className="contact-card-text">
                123 Market Street, Fresh City
              </div>
            </div>
          </div>
        </div>

        {/* Call Us */}
        <div className="col-lg-4 col-md-6">
          <div className="contact-card">
            <div className="contact-icon" style={{ background: "#FFF4D9", color: "#E3A300" }}>📞</div>
            <div>
              <div className="contact-card-title">Call Us</div>
              <div className="contact-card-text">+1 (555) 123-4567</div>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="col-lg-4 col-md-6">
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <div>
              <div className="contact-card-title">Email Us</div>
              <div className="contact-card-text">hello@megamart.com</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
<section className="newsletter-section">
  <div className="newsletter-container">

    {/* Pills */}
    <div className="newsletter-pills">
      <span><i>🎁</i> Exclusive Offers</span>
      <span><i>📅</i> Weekly Discounts</span>
      <span><i>🆕</i> New Arrivals</span>
    </div>

    {/* Heading */}
    <h1 className="newsletter-title">Get Fresh Deals in Your Inbox</h1>

    <p className="newsletter-subtext">
      Subscribe to our newsletter and get exclusive offers, new arrivals, and recipe ideas 
      delivered weekly. Plus, get <strong>10% off</strong> your first order!
    </p>

    {/* Form */}
    <div className="newsletter-form">
      <input type="email" placeholder="Enter your email address" />
      <button>
        Subscribe <span className="send-icon">✈️</span>
      </button>
    </div>

    <p className="newsletter-note">
      No spam, unsubscribe at any time. By subscribing you agree to our Privacy Policy.
    </p>

  </div>
</section>



    </>
  );
}

export default About;
