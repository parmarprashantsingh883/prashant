import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart } from "lucide-react";
import "../assets/css/product-card.css";

interface Household {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
}

const householdTypes = ["Cleaning Supplies", "Laundry", "Bathroom", "Air Care"];

const HouseholdPage = () => {
  const [products, setProducts] = useState<Household[]>([]);
  const [activeType, setActiveType] = useState<string>("All");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/household")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered =
    activeType === "All"
      ? products
      : products.filter(p => p.category === activeType);

  const toggleWish = (id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-accent to-accent/80 py-16 text-center text-accent-foreground">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {activeType === "All" ? "All Household Products" : activeType} 
        </h1>
        <p className="max-w-2xl mx-auto text-accent-foreground/80">
          Make your home shine with premium cleaning & daily-use products.
        </p>
      </section>

      {/* TYPE FILTER */}
      <section className="py-10 bg-card border-b">
        <div className="container flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setActiveType("All")}
            className={`px-5 py-2 rounded-full border ${
              activeType === "All" ? "bg-red-500 text-white" : ""
            }`}
          >
            All
          </button>

          {householdTypes.map(type => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-5 py-2 rounded-full border ${
                activeType === type ? "bg-red-500 text-white" : ""
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">
            {activeType === "All" ? "All Household Products" : activeType} ({filtered.length})
          </h2>

          {loading ? (
            <p>Loading products...</p>
          ) : (
            <div className="product-grid">
              {filtered.map(item => (
                <div className="product-card" key={item.id}>
                  <div className="product-img">
                    <button
                      className="product-wish"
                      onClick={() => toggleWish(item.id)}
                      style={{
                        background: wishlist.includes(item.id) ? "#ef2b2b" : "#fff",
                        color: wishlist.includes(item.id) ? "#fff" : "#000"
                      }}
                    >
                      <Heart size={16} fill={wishlist.includes(item.id) ? "white" : "none"} />
                    </button>

                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="product-body">
                    <p className="product-title">{item.name}</p>
                    <div className="product-price">
                      <strong>₹{item.price}</strong>
                      {item.originalPrice && <span>₹{item.originalPrice}</span>}
                    </div>
                    <button className="product-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HouseholdPage;
