import { Search, MapPin, Heart, ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  
  { label: "Deals", href: "/deals" },
  { label: "Food", href: "/food" },
  { label: "Beverages", href: "/beverages" },
  { label: "Household", href: "/household" },
  { label: "Personal Care", href: "/personal-care" },
  { label: "About Us", href: "/about" }
  
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      

      {/* Main header */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="font-display text-2xl md:text-3xl font-bold text-primary-foreground tracking-tight">
            Clovers.
          </Link>
          
          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-primary-foreground text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors md:hidden">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors">
            <User className="w-5 h-5" strokeWidth={3.5} />
            {/* <span>Log In</span> */}
          </button>
            <button className="hidden md:flex p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors">
              <MapPin className="w-6 h-5" />
            </button>
            
            <button className="hidden md:flex p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="relative p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button 
              className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card shadow-soft">
        <div className="container">
          <ul className="hidden md:flex items-center justify-center gap-8 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.href}
                  className={`font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full  ${
                    location.pathname === link.href ? 'text-primary after:w-full  no-underline' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/orders" className="text-primary font-semibold">My Orders</Link>
            </li>
            <li>
              {/* <Link to="/about" className="text-primary font-semibold">About Us</Link> */}
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-slide-in-right">
          <div className="container py-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/orders" className="block py-2 text-primary font-semibold" onClick={() => setMobileMenuOpen(false)}>My Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
