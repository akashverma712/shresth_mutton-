import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChefHat, CartIcon, Minus, Plus, Trash, Check } from "./Icons";
import { useCart } from "../context/CartContext";

const BRAND = { name: "Shresth", tagline: "Champaran Mutton Handi" };

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { items, count, total, addToCart, decrementItem, removeItem, confirmOrder, confirming } = useCart();
  const cartRef = useRef(null);

  // Close the cart dropdown on outside click.
  useEffect(() => {
    const onClick = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className="nav">
      <span className="nav__slash" aria-hidden="true" />

      <NavLink className="logo" to="/" aria-label={`${BRAND.name} home`} onClick={() => setMenuOpen(false)}>
        <ChefHat />
        <span className="logo__text">
          <span className="logo__name">{BRAND.name}</span>
          <span className="logo__tag">{BRAND.tagline}</span>
        </span>
      </NavLink>

      <nav className={`links ${menuOpen ? "open" : ""}`} aria-label="Main">
        {NAV.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="tools cart-wrap" ref={cartRef}>
        <button
          className="icon-btn"
          aria-label={`Cart, ${count} items`}
          aria-expanded={cartOpen}
          onClick={() => setCartOpen((o) => !o)}
        >
          <CartIcon />
          <span className="badge" key={count}>
            {count}
          </span>
        </button>

        {cartOpen && (
          <div className="cart-panel">
            {confirming ? (
              <div className="cart-confirming">
                <div className="cart-confirming__circle">
                  <Check />
                </div>
                <p>Order confirmed!</p>
                <span>Your handi is on its way to the kitchen.</span>
              </div>
            ) : (
              <>
                <p className="cart-panel__title">Your order</p>

                {items.length === 0 ? (
                  <p className="cart-panel__empty">Your cart is empty.</p>
                ) : (
                  <>
                    <ul className="cart-items">
                      {items.map((item) => (
                        <li className="cart-item" key={item.id}>
                          <span className="cart-item__name">{item.name}</span>

                          <span className="cart-item__qty">
                            <button onClick={() => decrementItem(item.id)} aria-label={`Remove one ${item.name}`}>
                              <Minus />
                            </button>
                            <span>{item.qty}</span>
                            <button onClick={() => addToCart(item)} aria-label={`Add one more ${item.name}`}>
                              <Plus />
                            </button>
                          </span>

                          <span className="cart-item__price">₹{item.price * item.qty}</span>

                          <button
                            className="cart-item__remove"
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className="cart-panel__total">
                      <span>Total</span>
                      <span>₹{total}</span>
                    </div>
                  </>
                )}

                <button
                  className="cart-confirm"
                  disabled={items.length === 0}
                  onClick={confirmOrder}
                >
                  Confirm order
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <button className="burger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
