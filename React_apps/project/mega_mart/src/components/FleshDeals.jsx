import React, { useEffect, useState } from "react";
import axios from "axios";
import "../offers.css";

function FlashDeals() {
  const [deals, setDeals] = useState([]);

  // Fetch flash deals from API
  useEffect(() => {
    axios.get("/api/flashDeals.json").then((res) => setDeals(res.data));
  }, []);

  // Countdown logic
  const getTimeLeft = (expireTime) => {
    const end = new Date(expireTime).getTime();
    const now = Date.now();
    const diff = end - now;

    if (diff <= 0) return "Expired";

    const hrs = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${hrs}h ${mins}m left`;
  };

  // Live update every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setDeals((prev) => [...prev]);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flash-section">
      <div className="container">

        <div className="flash-header">
          <span className="flash-icon">⚡</span>
          <div>
            <h2 className="flash-title">Flash Deals</h2>
            <p className="flash-sub">Limited time offers – hurry before they're gone!</p>
          </div>
        </div>

        <div className="flash-grid">
          {deals.map((deal) => {
            const timeLeft = getTimeLeft(deal.expiresAt);
            if (timeLeft === "Expired") return null; // hide expired deals

            return (
              <div className="flash-card upgraded" key={deal.id}>
                <span className="flash-discount">-{deal.discount}%</span>

                <img src={deal.image} className="flash-img" alt={deal.name} />

                <div className="flash-timer">
                  <span className="material-icons-outlined">schedule</span>
                  {timeLeft}
                </div>

                <div className="flash-content">
                  <h4>{deal.name}</h4>

                  <div className="flash-price">
                    <span className="new">${deal.price}</span>
                    <span className="old">${deal.oldPrice}</span>
                  </div>

                  <button className="flash-btn">
                    <span className="material-icons-outlined">shopping_bag</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FlashDeals;
