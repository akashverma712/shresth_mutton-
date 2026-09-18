import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChefHat, SearchIcon, CartIcon } from "./Icons";
import { useCart } from "../context/CartContext";

const BRAND = { name: "Barab", tagline: "Mutton & Grill House" };

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/#about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();

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

      <div className="tools">
        <button className="icon-btn" aria-label="Search">
          <SearchIcon />
        </button>
        <button className="icon-btn" aria-label={`Cart, ${count} items`}>
          <CartIcon />
          <span className="badge" key={count}>
            {count}
          </span>
        </button>
      </div>

      <button className="burger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
