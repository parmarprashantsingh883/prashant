import React from "react";
import "../offers.css";
import FlashDeals from "../components/FleshDeals";
import BundleSection from "../components/BundleSection";

function Offers() {
  return (
    <>

      <section className="offer-section">
      <div className="container text-center">
        
        {/* HOT DEALS BADGE */}
        <div className="offer-badge">
          <span className="material-icons-outlined">bolt</span>
          Hot Deals This Week
        </div>

        {/* MAIN HEADING */}
        <h1 className="offer-title">
          Save Big on <span className="highlight">Fresh</span> Groceries
        </h1>

        {/* SUBTEXT */}
        <p className="offer-sub">
          Discover incredible savings on your favorite products. New deals added daily!
        </p>

        {/* OFFER CARDS */}
        <div className="offer-stats">
          <div className="stat-box">
            <h2>50%</h2>
            <p>Up to off</p>
          </div>

          <div className="stat-box">
            <h2>100+</h2>
            <p>Deals active</p>
          </div>

          <div className="stat-box">
            <h2>Free</h2>
            <p>Delivery $50+</p>
          </div>
        </div>
      </div>
    </section>

    <FlashDeals/>
    <section className="weekly-section container mt-5 mb-5">
  <div className="weekly-header">
    <div className="icon-box">
      <span className="material-icons-outlined">sell</span>
    </div>

    <div>
      <h2 className="weekly-title">Weekly Offers</h2>
      <p className="weekly-subtitle">
        Use these codes at checkout for extra savings
      </p>
    </div>
  </div>

  <div className="row g-4 mt-3">

    {/* CARD 1 */}
    <div className="col-lg-4 col-md-6">
      <div className="weekly-card">
        <div className="weekly-img-wrapper">
          <img src="https://cdn.shopify.com/s/files/1/1604/1355/files/IMG_5680_600x600.jpg?v=1686527803" alt="Produce" />
          <span className="weekly-tag">30% OFF</span>
        </div>

        <div className="weekly-content">
          <h4 className="weekly-item-title">Fresh Produce Week</h4>
          <p className="weekly-desc">
            Get 30% off on all fruits and vegetables
          </p>

          <div className="weekly-bottom">
            <span className="offer-code">
              Code: <b>FRESH30</b>
            </span>
            <span className="expiry">Until Dec 15, 2024</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="col-lg-4 col-md-6">
      <div className="weekly-card">
        <div className="weekly-img-wrapper">
          <img src="https://static.vecteezy.com/system/resources/previews/060/654/430/large_2x/crispy-potato-chips-delight-kitchen-foodgraphy-rustic-setting-close-up-snack-enjoyment-free-photo.jpeg" alt="Snacks" />
          <span className="weekly-tag">B2G1</span>
        </div>

        <div className="weekly-content">
          <h4 className="weekly-item-title">Snack Attack Sale</h4>
          <p className="weekly-desc">
            Buy 2 Get 1 Free on all snacks
          </p>

          <div className="weekly-bottom">
            <span className="offer-code">
              Code: <b>SNACK3</b>
            </span>
            <span className="expiry">Until Dec 20, 2024</span>
          </div>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="col-lg-4 col-md-6">
      <div className="weekly-card">
        <div className="weekly-img-wrapper">
          <img src="https://dairydelighticecream.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-21.06.16-2.jpeg" alt="Dairy" />
          <span className="weekly-tag">25% OFF</span>
        </div>

        <div className="weekly-content">
          <h4 className="weekly-item-title">Dairy Delight</h4>
          <p className="weekly-desc">
            25% off on dairy products
          </p>

          <div className="weekly-bottom">
            <span className="offer-code">
              Code: <b>DAIRY25</b>
            </span>
            <span className="expiry">Until Dec 18, 2024</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
<BundleSection/>
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

export default Offers;
