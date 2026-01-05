import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart } from "lucide-react";
import "../assets/css/product-card.css";

const API = "http://localhost:5000/personalCare";

const categories = [
  { name: "All", image: "https://img.icons8.com/clouds/200/skincare.png" },
  { name: "Skincare", image: "https://img.icons8.com/clouds/200/facial-cleanser.png" },
  { name: "Hair Care", image: "https://img.icons8.com/clouds/200/hair-dryer.png" },
  { name: "Body Care", image: "https://img.icons8.com/clouds/200/body-lotion.png" },
  { name: "Sun Care", image: "https://img.icons8.com/clouds/200/sunscreen.png" }
];

export default function PersonalCarePage() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    axios.get(API)
      .then(res => setProducts(res.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("pc_wishlist") || "[]");
    setWishlist(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("pc_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWish = id => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  let filtered = products.filter(p =>
    activeCategory === "All" || p.subcategory === activeCategory
  ).filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-r from-pink-500 to-rose-500 py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Personal Care Essentials
        </h1>
        <p className="opacity-90">Glow starts here ✨</p>
      </section>

      {/* CATEGORY GRID */}
      <section className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map(cat => (
            <div
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`cursor-pointer text-center p-4 rounded-2xl border transition ${
                activeCategory === cat.name ? "bg-pink-100 border-pink-500" : "hover:bg-muted"
              }`}
            >
              <img src={cat.image} className="w-20 mx-auto mb-3" />
              <p className="font-semibold">{cat.name}</p>
              <p className="text-xs text-muted-foreground">
                {cat.name === "All"
                  ? products.length
                  : products.filter(p => p.subcategory === cat.name).length} Items
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="container flex flex-wrap gap-4 pb-8">
        <input
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        />

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="px-4 py-2 rounded-lg border"
        >
          <option value="default">Sort By</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      {/* PRODUCTS */}
      <section className="container pb-20">
        {loading ? (
          <div className="product-grid">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="product-card animate-pulse">
                <div className="product-img bg-gray-200" />
                <div className="product-body">
                  <div className="h-4 bg-gray-200 mb-2 rounded" />
                  <div className="h-4 bg-gray-200 w-1/2 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="product-grid">
            {filtered.map(p => (
              <div key={p.id} className="product-card">
                <div className="product-img">
                  <img src={p.image} alt={p.name} />

                  <button
                    className="product-wish"
                    onClick={() => toggleWish(p.id)}
                    style={{ background: wishlist.includes(p.id) ? "#ef2b2b" : "#fff" }}
                  >
                    <Heart
                      size={18}
                      color={wishlist.includes(p.id) ? "#fff" : "#ef2b2b"}
                      fill={wishlist.includes(p.id) ? "#fff" : "none"}
                    />
                  </button>
                </div>

                <div className="product-body">
                  <p className="product-title">{p.name}</p>

                  <div className="product-price">
                    <strong>₹{p.price}</strong>
                    {p.originalPrice && <span>₹{p.originalPrice}</span>}
                  </div>

                  <button className="product-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
