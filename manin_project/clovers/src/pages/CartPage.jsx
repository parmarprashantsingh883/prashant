import { useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import "../assets/css/cart.css";
import Breadcrumb from "@/components/Breadcrumb";


export default function CartPage() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalPrice,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    });

  return (
    <>
      <Header />
      <Breadcrumb/>

      <section className="container cart-page">
        <h2 className="cart-title">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-layout">

            {/* LEFT : CART ITEMS */}
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-card" key={item.id}>
                  
                  <div className="cart-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-content">
                    <h4 className="cart-name">{item.name}</h4>
                    <p className="cart-category">Clothing</p>
                    <p className="cart-price">
                      {formatPrice(item.discountPrice || item.price)}
                    </p>

                    <div className="cart-actions">
                      <div className="qty-controller">
                        <button onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.qty}</span>
                        <button onClick={() => increaseQty(item.id)}>+</button>
                      </div>
<button
  className="remove-btn"
  onClick={() => removeFromCart(item.id)}
  title="Remove item"
>
  <span>Remove</span>
</button>

                    </div>
                  </div>

                  <div className="cart-total">
                    {formatPrice(
                      item.qty * (item.discountPrice || item.price)
                    )}
                  </div>

                </div>
              ))}
            </div>

            {/* RIGHT : ORDER SUMMARY */}
            <aside className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>
                <span>{formatPrice(10)}</span>
              </div>

              <div className="summary-row total">
                <span>Total</span>
                <span>{formatPrice(totalPrice + 10)}</span>
              </div>

              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout →
              </button>

              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </aside>

          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
