import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Product.css";

function Product() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Fetch API
  useEffect(() => {
    axios
      .get("/api/products.json")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("API Error:", err));
  }, []);

  // Filtering + Search Logic
  const filteredProducts = products.filter((item) => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section
      style={{
    background: "linear-gradient(to bottom, #FFFFFF, #F5EEDC)",
    padding: "60px 0",
    textAlign: "center",
    paddingTop: "140px"   // ADD THIS
  }}
      >
        {/* HEADER */}
        <span
          className="px-4 py-2 rounded-pill"
          style={{
            background: "#F5EEDC",
            color: "#DD4A48",
            fontWeight: 600,
          }}
        >
          Shop Products
        </span>

        <h2 className="fw-bold mt-3" style={{ color: "#1F3529", fontSize: 42 }}>
          All Products
        </h2>

        <p className="mt-2 text-muted" style={{ fontSize: 17 }}>
          Browse our complete selection of fresh groceries, organic produce, and
          everyday essentials.
        </p>

        <div className="container mt-4">
          {/* SEARCH BAR */}
          <div className="position-relative mb-4">
            <span className="material-icons-outlined search-icon">search</span>
            <input
              type="text"
              className="form-control search-box"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* FILTER PILLS */}
          <div className="d-flex flex-wrap gap-2 mb-3">
            {["All", "Fruits", "Vegetables", "Snacks", "Dairy", "Bakery"].map(
              (cat) => (
                <span
                  key={cat}
                  className={`filter-pill ${filter === cat ? "active" : ""}`}
                  onClick={() => setFilter(cat)}
                  style={{ cursor: "pointer" }}
                >
                  {cat}
                </span>
              )
            )}
          </div>

          <p className="text-muted mb-3">
            Showing {filteredProducts.length} products
          </p>

          {/* PRODUCT GRID */}
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-md-4 col-lg-3" key={product.id}>
                <div className="product-card">
                  {/* IMAGE */}
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="p-3">
                    <span className="badge-custom mb-2 d-inline-block">
                      {product.tag}
                    </span>

                    <h5 className="fw-bold mt-2">{product.name}</h5>

                    <p className="text-muted m-0" style={{ fontSize: 14 }}>
                      {product.category}
                    </p>

                    <div className="d-flex align-items-center mt-2">
                      <span className="price">${product.price}</span>
                      <span className="old-price ms-2">${product.oldPrice}</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="rating">⭐ {product.rating}</span>
                      <span
                        className="material-icons-outlined"
                        style={{ color: "#2E7D32", cursor: "pointer" }}
                      >
                        shopping_bag
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LOAD MORE (optional, not functional yet) */}
          <div className="text-center mt-4 mb-5">
            <button className="load-btn">Load More Products</button>
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

export default Product;
