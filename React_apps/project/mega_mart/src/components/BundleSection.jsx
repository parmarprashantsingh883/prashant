import React from "react";
import "../Bundle.css"; // make this file


function BundleSection() {
  return (
    <section className="bundle-section container my-5">
      {/* Header */}
      <div className="d-flex align-items-start gap-3 mb-4">
        <div className="bundle-icon">
          <span className="material-icons-outlined">card_giftcard</span>
        </div>
        <div>
          <h2 className="bundle-title">Bundle & Save</h2>
          <p className="bundle-subtitle">
            Get more for less with our curated bundles
          </p>
        </div>
      </div>

      {/* Bundles Grid */}
      <div className="row g-4">

        {/* CARD 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="bundle-card">
            <div className="bundle-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop"
                alt="Breakfast Bundle"
              />
              <span className="save-tag">Save $6.00</span>
            </div>

            <div className="bundle-body">
              <h4 className="bundle-name">Breakfast Bundle</h4>
              <ul className="bundle-list">
                <li>Eggs (12)</li>
                <li>Bread</li>
                <li>Milk</li>
                <li>Butter</li>
                <li>Orange Juice</li>
              </ul>

              <div className="bundle-pricing">
                <span className="bundle-price">$18.99</span>
                <span className="bundle-old-price">$24.99</span>
              </div>

              <button className="bundle-btn">
                <span className="material-icons-outlined">shopping_bag</span>
                Add Bundle to Cart
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="bundle-card">
            <div className="bundle-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop"
                alt="Snack Pack"
              />
              <span className="save-tag">Save $5.00</span>
            </div>

            <div className="bundle-body">
              <h4 className="bundle-name">Healthy Snack Pack</h4>
              <ul className="bundle-list">
                <li>Mixed Nuts</li>
                <li>Dried Fruits</li>
                <li>Granola Bars</li>
                <li>Dark Chocolate</li>
              </ul>

              <div className="bundle-pricing">
                <span className="bundle-price">$14.99</span>
                <span className="bundle-old-price">$19.99</span>
              </div>

              <button className="bundle-btn">
                <span className="material-icons-outlined">shopping_bag</span>
                Add Bundle to Cart
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="bundle-card">
            <div className="bundle-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
                alt="Salad Essentials"
              />
              <span className="save-tag">Save $4.00</span>
            </div>

            <div className="bundle-body">
              <h4 className="bundle-name">Salad Essentials</h4>
              <ul className="bundle-list">
                <li>Lettuce</li>
                <li>Tomatoes</li>
                <li>Cucumbers</li>
                <li>Olive Oil</li>
                <li>Feta Cheese</li>
              </ul>

              <div className="bundle-pricing">
                <span className="bundle-price">$12.99</span>
                <span className="bundle-old-price">$16.99</span>
              </div>

              <button className="bundle-btn">
                <span className="material-icons-outlined">shopping_bag</span>
                Add Bundle to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default BundleSection;
