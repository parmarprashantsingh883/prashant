import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import OrderPlacedModal from "@/components/OrderPlacedModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/checkout.css";

const API = "http://localhost:5000";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const userId = 1; // logged-in user

  const [slot, setSlot] = useState("Morning");
  const [payment, setPayment] = useState("COD");
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });

  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const DELIVERY = 40;
  const TAX = Math.round(totalPrice * 0.05);
  const GRAND_TOTAL = totalPrice + DELIVERY + TAX;

  /* ================= PLACE ORDER ================= */
  const placeOrder = async () => {
    if (!cart.length) return alert("Cart is empty");

    if (payment === "UPI" && !upiId)
      return alert("Enter UPI ID");

    if (payment === "Card" && (!card.number || !card.expiry || !card.cvv))
      return alert("Enter card details");

    setPlacing(true);

    try {
      // 1️⃣ CREATE ORDER
      const orderRes = await axios.post(`${API}/orders`, {
        user_id: userId,
        total: GRAND_TOTAL,
        status: "Placed",
        date: new Date().toISOString().split("T")[0],
        payment_method: payment,
        slot
      });

      const createdOrderId = orderRes.data.id;

      // 2️⃣ CREATE ORDER ITEMS
      await Promise.all(
        cart.map(item =>
          axios.post(`${API}/orderItems`, {
            order_id: createdOrderId,
            product_id: item.id,
            quantity: item.qty,
            price: item.discountPrice || item.price
          })
        )
      );

      clearCart();
      setOrderId(createdOrderId);
    } catch (err) {
      console.error(err);
      alert("Order failed");
    } finally {
      setPlacing(false);
    }
  };

  return (
    <>
      <Header />

      <section className="checkout container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Complete your order securely</p>
        </div>

        <div className="checkout-layout">

          {/* ================= LEFT ================= */}
          <div className="checkout-left">

            <h3>Your Items</h3>

            {cart.map(item => (
              <div className="checkout-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="info">
                  <p className="name">{item.name}</p>
                  <p className="price">
                    ₹{item.discountPrice || item.price} × {item.qty}
                  </p>
                </div>

                <p className="total">
                  ₹{item.qty * (item.discountPrice || item.price)}
                </p>
              </div>
            ))}
          </div>

          {/* ================= RIGHT ================= */}
          <div className="checkout-right">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Items</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>₹{DELIVERY}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>₹{TAX}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{GRAND_TOTAL}</span>
            </div>

            {/* SLOT */}
            <div className="block">
              <p>Delivery Slot</p>
              <div className="options">
                {["Morning", "Afternoon", "Evening"].map(s => (
                  <button
                    key={s}
                    className={slot === s ? "active" : ""}
                    onClick={() => setSlot(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* PAYMENT */}
            <div className="block">
              <p>Payment Method</p>

              <div className="options">
                {["COD", "UPI", "Card"].map(p => (
                  <button
                    key={p}
                    className={payment === p ? "active" : ""}
                    onClick={() => setPayment(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {payment === "UPI" && (
                <input
                  placeholder="example@upi"
                  value={upiId}
                  onChange={e => setUpiId(e.target.value)}
                />
              )}

              {payment === "Card" && (
                <>
                  <input
                    placeholder="Card Number"
                    value={card.number}
                    onChange={e =>
                      setCard({ ...card, number: e.target.value })
                    }
                  />
                  <div className="row">
                    <input
                      placeholder="MM/YY"
                      value={card.expiry}
                      onChange={e =>
                        setCard({ ...card, expiry: e.target.value })
                      }
                    />
                    <input
                      placeholder="CVV"
                      value={card.cvv}
                      onChange={e =>
                        setCard({ ...card, cvv: e.target.value })
                      }
                    />
                  </div>
                </>
              )}
            </div>

            {/* ADDRESS */}
            <div className="block">
              <p>Delivery Address</p>
              <input placeholder="Full Name" />
              <input placeholder="Phone" />
              <textarea placeholder="Address" />
              <div className="row">
                <input placeholder="City" />
                <input placeholder="Pincode" />
              </div>
            </div>

            <button
              className="place-order"
              disabled={placing}
              onClick={placeOrder}
            >
              {placing ? "Placing Order..." : `Place Order • ₹${GRAND_TOTAL}`}
            </button>

          </div>
        </div>
      </section>

      <Footer />

      {/* SUCCESS MODAL */}
      <OrderPlacedModal
        open={!!orderId}
        orderId={orderId}
        onClose={() => navigate("/")}
      />
    </>
  );
}
