import { NavLink } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm fixed-top">

      <div className="container">

        {/* LOGO */}
       <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
  <div className="logo-box">M</div>

  <div className="brand-text">
    <h4 className="brand-title">Mega Mart</h4>
    <small className="brand-subtext">Fresh & Quality</small>
  </div>
</NavLink>


        {/* Normal Bootstrap Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU (Desktop + Mobile) */}
        <div className="collapse navbar-collapse justify-content-center" id="mainMenu">
          <ul className="navbar-nav gap-4">
            <li><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li><NavLink to="/categories" className="nav-link">Categories</NavLink></li>
            <li><NavLink to="/product" className="nav-link">Products</NavLink></li>
            <li><NavLink to="/offers" className="nav-link">Offers</NavLink></li>
            <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          </ul>
        </div>

        {/* RIGHT ICONS */}
        <div className="nav-icons d-flex align-items-center gap-4">
          <i className="material-icons-outlined">search</i>
          <i className="material-icons-outlined">favorite_border</i>
          <i className="material-icons-outlined">person</i>

          <div className="cart-btn">
            <i className="material-icons-outlined">shopping_cart</i>
            <span className="cart-badge">3</span>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
