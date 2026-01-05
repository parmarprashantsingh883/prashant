import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/categories";
const ITEMS_PER_PAGE = 4;

/* ---------- Skeleton Loader ---------- */
const CategorySkeleton = () => (
  <div className="rounded-2xl overflow-hidden bg-card shadow-md animate-pulse">
    <div className="aspect-[4/3] bg-muted" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-muted rounded w-2/3" />
      <div className="h-3 bg-muted rounded w-full" />
      <div className="h-3 bg-muted rounded w-4/5" />
    </div>
  </div>
);

/* ---------- Lazy Image ---------- */
const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-opacity duration-700 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(API).then(res => {
      setCategories(res.data);
      setLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const paginated = categories.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (loading) {
    return (
      <section className="py-16">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => <CategorySkeleton key={i} />)}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paginated.map(cat => (
            <Link
              key={cat.id}
              to={`/products?category_id=${cat.id}`}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <LazyImage src={cat.image} alt={cat.name} />
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg">{cat.name}</h3>
                <span className="text-sm text-primary flex items-center gap-1 mt-2">
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-11 h-11 rounded-full border transition-all font-semibold
                  ${page === i + 1
                    ? "bg-primary text-white scale-110 shadow-xl"
                    : "hover:bg-muted"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
