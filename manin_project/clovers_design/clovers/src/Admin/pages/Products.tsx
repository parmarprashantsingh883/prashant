import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { Plus, Search } from "lucide-react";

const API = "http://localhost:5000/products";
const ITEMS_PER_PAGE = 6;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: ""
  });

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    const res = await axios.get(API);
    setProducts(res.data);
  };

  const handleAdd = async () => {
    await axios.post(API, form);
    setIsAddOpen(false);
    setForm({ name: "", price: "", image: "", category: "", description: "" });
    fetchProducts();
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div>
      <Header title="Products" subtitle="Inventory Control Panel" />

      <div className="p-6 space-y-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center">
          <div className="relative w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search product..."
              onChange={e => setSearch(e.target.value)}
              className="pl-10 border px-4 py-2 rounded-xl w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={() => setIsAddOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl flex items-center gap-2 shadow hover:scale-105 transition"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginated.map(p => (
            <div key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
              
              <img src={p.image}
                onError={e => e.currentTarget.src="https://via.placeholder.com/200"}
                className="h-40 w-full object-cover rounded-xl mb-3" />

              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                {p.category}
              </span>

              <p className="font-semibold mt-2">{p.name}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>

              <div className="flex justify-between items-center mt-3">
                <span className="text-lg font-bold text-blue-600">₹{p.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!paginated.length && (
          <p className="text-center text-gray-400 py-12">
            No products found 😕
          </p>
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-3 pt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-full border font-medium transition
                ${page === i + 1 
                  ? "bg-blue-600 text-white shadow-lg scale-110" 
                  : "hover:bg-gray-100"}`}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add New Product">
        <div className="space-y-3">

          <input className="input" placeholder="Product Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })} />

          <input type="number" className="input" placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })} />

          <input className="select" placeholder="Category"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })} />

          <textarea className="input h-20" placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })} />

          <input className="input" placeholder="Image URL"
            value={form.image}
            onChange={e => setForm({ ...form, image: e.target.value })} />

          {form.image && (
            <img src={form.image}
              onError={e => e.currentTarget.src="https://via.placeholder.com/200"}
              className="h-32 mx-auto rounded-xl shadow" />
          )}

          <button onClick={handleAdd} className="btn-primary w-full mt-3">
            Save Product
          </button>
        </div>
      </Modal>
    </div>
  );
}
