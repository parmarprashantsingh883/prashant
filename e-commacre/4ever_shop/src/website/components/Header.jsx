import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg luxe-navbar">
      <div className="container">
        <Link className="navbar-brand luxe-logo" to="/">LUXE</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#luxeNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="luxeNav">
          <ul className="navbar-nav me-auto luxe-menu">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>

          <div className="d-flex gap-3 align-items-center luxe-icons">
            <Search />
            <User />
            <Heart />
            <div className="cart-icon">
              <ShoppingCart />
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
