import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/best-deals.css";

export const BestDeals = () => {
  const [deals, setDeals] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/deals")
      .then(res => {
        const sorted = res.data.sort(
          (a, b) =>
            ((b.originalPrice - b.price) / b.originalPrice) -
            ((a.originalPrice - a.price) / a.originalPrice)
        );
        setDeals(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleWish = id => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="deal-flex">
            {[...Array(5)].map((_, i) => (
              <div className="perfect-card skeleton" key={i}></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="bestdeal-heading">
  Best Deals Today
  <span className="deal-underline"></span>
</h2>


        <div className="deal-flex">
          {deals.map(item => {
            const discount = Math.round(
              ((item.originalPrice - item.price) / item.originalPrice) * 100
            );

            return (
              <div className="perfect-card" key={item.id}>
                <div className="perfect-img-box">
                  <span className="tag-left">Hot</span>
                  <span className="tag-right">-{discount}%</span>

                  <button
                    className="wish-btn"
                    onClick={() => toggleWish(item.id)}
                    style={{
                      background: wishlist.includes(item.id) ? "#ef2b2b" : "#fff",
                      color: wishlist.includes(item.id) ? "#fff" : "#000"
                    }}
                  >
                    ♡
                  </button>

                  <img src={item.image} alt={item.name} />
                </div>

                <div className="perfect-body">
                  <p className="perfect-title">{item.name}</p>
                  <div className="perfect-price">
                    <strong>₹{item.price}</strong>
                    <span>₹{item.originalPrice}</span>
                  </div>
                  <button className="perfect-btn">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BestDeals;