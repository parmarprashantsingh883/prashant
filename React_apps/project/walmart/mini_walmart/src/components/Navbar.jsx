import React, { useState } from "react";
import "../Navbar.css";

export default function Navbar() {
  const [active, setActive] = useState("Categories");

  const menu = ["Home", "Categories", "Products", "Offers", "About"];

  return (
    <nav className="navbar-wrapper">
      {/* FULL WIDTH */}
      <div className="container-fluid">

        {/* CENTERED CONTENT */}
        <div className="navbar-inner">

          {/* LOGO */}
          <div className="logo-area">
            <div className="logo-circle">M</div>
            <div>
              <div className="logo-title">Mega Mart</div>
              <div className="logo-sub">Fresh & Quality</div>
            </div>
          </div>

          {/* MENU */}
          <ul className="menu">
            {menu.map(item => (
              <li key={item}>
                <button
                  className={`menu-btn ${active === item ? "active" : ""}`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="right">
            <button className="signin">Sign In</button>
            <div className="cart">
              🛒
              <span>3</span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}
