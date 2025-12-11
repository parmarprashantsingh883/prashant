import React, { useState } from "react";
import "./Auth.css";

 function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState("signin");

  return (
    <div className="auth-container">

      {/* LEFT HERO SECTION */}
      <div className="auth-left">
        <div className="hero-content">
          <div className="logo-box">
            <span className="material-icons-outlined cart-icon">shopping_cart</span>
            <h2 className="logo-text">Mega Mart</h2>
          </div>

          <h1 className="hero-title">
            Fresh Groceries <br />
            <span>Delivered Daily</span>
          </h1>

          <p className="hero-desc">
            Join thousands of happy customers who trust us for their daily grocery needs. 
            Fresh produce, great prices, fast delivery.
          </p>

          {/* Features */}
          <div className="feature-grid">

            <div className="feature-box">
              <span className="material-icons-outlined feature-icon">local_shipping</span>
              Free Delivery
            </div>

            <div className="feature-box">
              <span className="material-icons-outlined feature-icon">spa</span>
              Fresh Products
            </div>

            <div className="feature-box">
              <span className="material-icons-outlined feature-icon">savings</span>
              Best Prices
            </div>

            <div className="feature-box">
              <span className="material-icons-outlined feature-icon">bolt</span>
              Fast Service
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="auth-right">
        <div className="form-box">

          <h2 className="welcome-text">Welcome Back!</h2>
          <p className="sub-text">Sign in to continue shopping</p>

          {/* Toggle Tabs */}
          <div className="tabs">
            <button 
              className={mode === "signin" ? "active" : ""}
              onClick={() => setMode("signin")}
            >
              Sign In
            </button>

            <button 
              className={mode === "signup" ? "active" : ""}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>

          {/* FORM */}
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-field">
              <span className="material-icons-outlined">mail</span>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-field">
              <span className="material-icons-outlined">lock</span>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="•••••••" 
              />
              <span 
                className="material-icons-outlined eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </div>
          </div>

          <button className="login-btn">
            Sign In
            <span className="material-icons-outlined">arrow_forward</span>
          </button>

          <p className="bottom-text">
            Don't have an account? <a href="#">Sign up</a>
          </p>

          <p className="privacy-text">
            By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>

    </div>
  );
}
export default AuthPage;