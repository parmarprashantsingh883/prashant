import React from "react";
import { FaTruck, FaLeaf, FaLock, FaClock, FaShieldAlt, FaHeadphones } from "react-icons/fa";

function Home() {
  return (
    
    
    
    

  <>
      <section
        style={{
          position: "relative",
          background:
            'linear-gradient(rgba(221, 74, 72, 0.85), rgba(221, 74, 72, 0.92)), url("https://images.unsplash.com/photo-1506807803488-8eafc15323c8?auto=format&fit=crop&w=1600&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "130px 0 170px",
          color: "white",
        }}
      >
        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
          {/* LEFT SIDE */}
          <div className="col-lg-6 fade-up">
            {/* Tag */}
            <div
              className="px-4 py-2 mb-4 d-inline-flex align-items-center rounded-pill"
              style={{
                background: "rgba(245, 238, 220, 0.25)",
                color: "#F5EEDC",
                fontWeight: 600,
              }}
            >
              ⭐ Rated #1 Organic Store
            </div>

            {/* Title */}
            <h1
              className="fw-bold mb-3"
              style={{ fontSize: 60, lineHeight: "1.15" }}
            >
              Fresh & <span style={{ color: "#F5EEDC" }}>Organic</span>
              <br />
              Groceries Delivered
            </h1>

            <p className="mb-4" style={{ fontSize: 18, color: "#ffe9e9" }}>
              Handpicked produce delivered from the farm to your doorstep with
              care.
            </p>

            {/* Feature Tags */}
            <div className="d-flex flex-wrap gap-3 mb-4">
              <span className="px-3 py-2 rounded-pill" style={{ background: "#B8403E" }}>
                100% Organic
              </span>
              <span className="px-3 py-2 rounded-pill" style={{ background: "#B8403E" }}>
                Same Day Delivery
              </span>
              <span className="px-3 py-2 rounded-pill" style={{ background: "#B8403E" }}>
                Farm Fresh
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex gap-3">
              <button
                className="btn px-4 py-3 rounded-3 hero-btn"
                style={{
                  background: "#F5EEDC",
                  color: "#DD4A48",
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Shop Fresh Now →
              </button>

              <button
                className="btn px-4 py-3 rounded-3"
                style={{
                  background: "white",
                  color: "#DD4A48",
                  fontSize: 18,
                  border: "2px solid #F5EEDC",
                }}
              >
                Today's Deals
              </button>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div
            className="col-lg-5 mt-5 mt-lg-0 glass-card fade-up floating"
            style={{ color: "#7A1C1A" }}
          >
            <h5 className="fw-bold mb-3" style={{ color: "#DD4A48" }}>
              Why Choose Us?
            </h5>
            <p className="text-muted" style={{ marginTop: "-10px" }}>
              Trusted by thousands
            </p>

            <div
              className="d-flex justify-content-between align-items-center p-3 mb-3 rounded-3"
              style={{ background: "#FFF3F2" }}
            >
              <div className="d-flex align-items-center gap-2">
                <span className="material-icons-outlined" style={{ color: "#DD4A48" }}>
                  eco
                </span>
                <span>Fresh Products</span>
              </div>
              <span className="fw-bold" style={{ color: "#DD4A48" }}>500+</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 mb-3 rounded-3"
              style={{ background: "#FDF2E4" }}
            >
              <div className="d-flex align-items-center gap-2">
                <span className="material-icons-outlined text-warning">mood</span>
                <span>Happy Customers</span>
              </div>
              <span className="fw-bold text-warning">50K+</span>
            </div>

            <div
              className="d-flex justify-content-between align-items-center p-3 rounded-3"
              style={{ background: "#F9EFE1" }}
            >
              <div className="d-flex align-items-center gap-2">
                <span className="material-icons-outlined" style={{ color: "#DD4A48" }}>
                  star
                </span>
                <span>Average Rating</span>
              </div>
              <span className="fw-bold" style={{ color: "#2E7D32" }}>4.9</span>
            </div>
          </div>
        </div>

        {/* Floating Decoration */}
        <img
          src="https://i.ibb.co/9HW8Yk8/leaf.png"
          className="floating"
          style={{
            width: 60,
            position: "absolute",
            top: "22%",
            left: "80%",
            opacity: "0.7",
          }}
          alt=""
        />
      </section>
    

      <section className="difference-section py-5">
  <div className="text-center mb-5">
    <span className="why-badge">Why Choose Us</span>
    <h1 className="fw-bold mt-3">
      The Mega Mart <span className="text-danger">Difference</span>
    </h1>
    <p className="text-muted">
      We're committed to providing you with the freshest products and the best shopping experience
    </p>
  </div>

  <div className="container">
    <div className="row g-4">

      {/* Free Delivery */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
<div className="icon-box">🚚</div>

          </div>
          <h4 className="mt-3 fw-bold">Free Delivery</h4>
          <p className="text-muted">
            Free delivery on orders over $50. Fast and reliable shipping to your doorstep within hours.
          </p>
        </div>
      </div>

      {/* Farm Fresh */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
<div className="icon-box">🥬</div>



          </div>
          <h4 className="mt-3 fw-bold">Farm Fresh</h4>
          <p className="text-muted">
            All our produce is sourced directly from local farms for the freshest quality guaranteed.
          </p>
        </div>
      </div>

      {/* Secure Payment */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
       <div className="icon-box">💳</div>


          </div>
          <h4 className="mt-3 fw-bold">Secure Payment</h4>
          <p className="text-muted">
            Multiple secure payment options including cards, wallets, and cash on delivery.
          </p>
        </div>
      </div>

      {/* Same Day Delivery */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
<div className="icon-box">⏱️</div>



          </div>
          <h4 className="mt-3 fw-bold">Same Day Delivery</h4>
          <p className="text-muted">
            Order before 2 PM and get your groceries delivered the same day.
          </p>
        </div>
      </div>

      {/* Quality Guaranteed */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
<div className="icon-box">🛡️</div>


          </div>
          <h4 className="mt-3 fw-bold">Quality Guaranteed</h4>
          <p className="text-muted">
            Not satisfied? Get a full refund or replacement within 24 hours. No questions asked.
          </p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className="col-md-4">
        <div className="diff-card p-4">
          <div className="icon-box">
       <div className="icon-box">🎧</div>


          </div>
          <h4 className="mt-3 fw-bold">24/7 Support</h4>
          <p className="text-muted">
            Our customer support team is always available to help you with any queries.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="popular-section py-5">
  <div className="container">

    {/* TITLE */}
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div>
        <span className="tag-badge">Featured Products</span>
        <h2 className="fw-bold mt-2 popular-title">
          Popular <span className="text-danger">Right Now</span>
        </h2>
        <p className="text-muted">Handpicked favorites from our customers</p>
      </div>

      <button className="view-btn">View All Products</button>
    </div>

    {/* PRODUCT GRID */}
    <div className="row g-4">

      {/* PRODUCT 1 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag">Best Seller</span>
            <img src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop" alt="Apples" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold">Fresh Organic Apples</h5>

            <div className="rating">
              ⭐ 4.8 <span className="text-muted">(124)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$4.99</span>
                <span className="old-price">$6.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
      

      {/* PRODUCT 2 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag organic">Organic</span>
            <img src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=400&fit=crop" alt="Carrots" />
          </div>

          <div className="product-info p-3">
            <p className="category">Vegetables</p>
            <h5 className="fw-bold">Farm Fresh Carrots</h5>

            <div className="rating">
              ⭐ 4.6 <span className="text-muted">(89)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$2.49</span>
                <span className="old-price">$3.49</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT 3 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400&h=400&fit=crop" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Snacks</p>
            <h5 className="fw-bold">Premium Almonds</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT 4 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag discount">30% Off</span>
            <img src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400&fit=crop" alt="Avocado" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold">Fresh Avocados</h5>

            <div className="rating">
              ⭐ 4.7 <span className="text-muted">(178)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$5.49</span>
                <span className="old-price">$7.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* PRODUCT 4 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://static.toiimg.com/thumb/msid-113970406,width-1280,height-720,imgsize-53206,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold"> Fresh Orange</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
       {/* PRODUCT 5 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YnBWmfhXuGPnrGw-INyzSIVLdAl0fb2Zxg&s" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold"> Farm Fresh Broccoli</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>

{/* PRODUCT 6 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://5.imimg.com/data5/JA/PQ/MY-19237629/fresh-capsicum-500x500.png" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold"> Fresh Capsicum</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT 7 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIWvAlCw4JFDgrh4ExnmScbJyQi_ngICKXA&s" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold"> Lays Classic</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
            {/* PRODUCT 8 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://modernfoodspune.com/wp-content/uploads/2023/05/amul-chees.jpg" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold">  Amul Cheese Slices</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
            </div>
          </div>
        </div>
      </div>
      {/* PRODUCT 9 */}
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-image">
            <span className="product-tag new">New</span>
            <span className="wishlist">♡</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4m4-ouJ3Me-XiJOPa5k5fs_oSiAvlrSaPw&s" alt="Almonds" />
          </div>

          <div className="product-info p-3">
            <p className="category">Fruits</p>
            <h5 className="fw-bold">Daawat Super Basmati Rice</h5>

            <div className="rating">
              ⭐ 4.9 <span className="text-muted">(256)</span>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-2">
              <div>
                <span className="price">$8.99</span>
                <span className="old-price">$11.99</span>
              </div>

              <button className="cart-btn">🛒</button>
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

export default Home;