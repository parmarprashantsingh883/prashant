import React from "react";
import "./CategoriesSection.css";

export default function CategoriesSection() {
  return (
    <section className="cat-wrapper container-fluid mt-5 mb-5">

      {/* LEFT SIDE */}
      <div className="cat-left">
        <span className="browse-tag">
          <span className="emoji">📊</span> Browse Categories
        </span>

        <h1 className="cat-heading">
          Explore Our <span>Categories</span>
        </h1>

        <p className="cat-desc">
          From farm-fresh produce to pantry essentials, discover everything you need
          for your kitchen organized in easy-to-browse categories. Over 1,000+
          products across 12 categories.
        </p>

        <div className="cat-btn-row">
          <button className="btn-red">Shop All Products →</button>
          <button className="btn-outline">View Today&apos;s Deals</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="cat-right">
        <div className="stats-box">

          {/* Header */}
          <div className="stats-header">
            <div className="stats-icon">
              <span className="emoji white">📈</span>
            </div>
            <div>
              <h3>Quick Stats</h3>
              <p>Our category highlights</p>
            </div>
          </div>

          {/* STATS FLEX */}
          <div className="stats-flex">

            <div className="stats-item">
              <h2>12</h2>
              <span>Categories</span>
            </div>

            <div className="stats-item">
              <h2 className="yellow">1,000+</h2>
              <span>Products</span>
            </div>

            <div className="stats-item">
              <h2>50+</h2>
              <span>Brands</span>
            </div>

            <div className="stats-item">
              <h2 className="red">Daily</h2>
              <span>Fresh Stock</span>
            </div>

          </div>

          <p className="stats-footer">New products added every week!</p>

        </div>
      </div>

    </section>
  );
}
