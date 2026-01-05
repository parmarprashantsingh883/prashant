import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../assets/css/product-card.css";
import PromoBanner from "@/components/PromoBanner";

const API = "http://localhost:5000/products";


const categoryTabs = [
  { name: "All", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400" },
  { name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400" },
  { name: "Vegetables", image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=400" },
  { name: "Dairy & Eggs", image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400" },
  { name: "Snacks", image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400" },
  { name: "Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400" },
  { name: "Meat & Seafood", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400" },
  { name: "Frozen Foods", image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010?w=400" }
];

export default function FoodPage() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);
 
  const [price, setPrice] = useState(1000);



  useEffect(() => {
    axios.get(API).then(res => setProducts(res.data));
  }, []);

 const filtered = products.filter(p => {
  const cat = categoryTabs.find(c => c.name === activeCategory);
  const catMatch =
    activeCategory === "All" || p.category_id === categoryTabs.indexOf(cat) + 1;
  const priceMatch = p.price <= price;
  return catMatch && priceMatch;
});

const activeItemsCount = filtered.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />

     
      {/* HERO */}
<section className="relative bg-[#fff7f2] overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-60" />
    <div className="absolute top-40 -right-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-70" />
  </div>

  <div className="relative container py-20 text-center">
    <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full bg-red-100 text-red-600">
      Fresh & Healthy
    </span>

    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Fresh Food <span className="text-red-500">Products</span>
    </h1>

    <p className="mt-4 max-w-xl mx-auto text-gray-600 text-lg">
      Hand-picked groceries delivered straight from farm to your kitchen.
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition">
        Shop Now
      </button>
      <button className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition">
        View Deals
      </button>
    </div>
  </div>
</section>


      {/* CATEGORY SCROLLER */}
<section className="bg-white border-b">
  <div className="container py-10">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
      {categoryTabs.map(cat => (
        <button
          key={cat.name}
          onClick={() => setActiveCategory(cat.name)}
          className={`group relative p-5 rounded-3xl transition-all duration-300
          ${
            activeCategory === cat.name
              ? "bg-red-50 ring-2 ring-red-500 scale-105 shadow-xl"
              : "bg-white hover:bg-gray-50 hover:scale-105 shadow-md"
          }`}
        >
          {activeCategory === cat.name && (
            <span className="absolute -top-2 right-3 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full animate-bounce">
              Active
            </span>
          )}

          <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden shadow-md
                          group-hover:shadow-xl transition-all duration-300">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <p className="mt-3 text-sm font-semibold text-center group-hover:text-red-600 transition-colors">
            {cat.name}
          </p>
        </button>
      ))}
    </div>
  </div>
</section>


      {/* FILTER BAR */}
     <section className="border-t bg-white">
  <div className="container py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* LEFT: ACTIVE CATEGORY LABEL */}
    <div className="flex items-center gap-3">
      <div className="px-5 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold shadow">
        {activeCategory}
      </div>

      <span className="text-sm text-muted-foreground">
        {activeItemsCount} items found
      </span>
    </div>

    {/* RIGHT: FILTER CONTROLS */}
    <div className="flex flex-wrap items-center gap-4">

      <select className="px-4 py-2 border rounded-lg shadow-sm">
        <option>Sort By</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Newest First</option>
      </select>

      <select className="px-4 py-2 border rounded-lg shadow-sm">
        <option>All Products</option>
        <option>In Stock</option>
        <option>Out of Stock</option>
      </select>

      <div className="flex items-center gap-2 text-sm">
        <span className="font-medium">Max ₹{price}</span>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          className="w-40 accent-red-500"
        />
      </div>
    </div>
  </div>
</section>


      {/* PRODUCTS */}
      <section className="container pb-20">
        <div className="product-grid">
          {filtered.map(p => (
            
 <div className="product-card">
  <div className="product-img">
    <button className="product-wish">♡</button>
    <img src={p.image} alt={p.name} />
  </div>

  <div className="product-body">
    <p className="product-title">{p.name}</p>
    <p className="product-desc">
      {p.description || "Premium quality product for your daily needs."}
    </p>

    <div className="product-price">
      <strong>₹{p.price}</strong>
      {p.originalPrice && <span>₹{p.originalPrice}</span>}
    </div>

    <button className="product-btn">Add to Cart</button>
  </div>
</div>
          ))}
        </div>
      </section>
 <PromoBanner page="food" />
      <Footer />
       
    </div>
  );
}

