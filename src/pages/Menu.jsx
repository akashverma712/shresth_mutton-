import { useState } from "react";
import { MENU_CATEGORIES } from "../data/menuData";
import { Plus, Check } from "../components/Icons";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [activeId, setActiveId] = useState(MENU_CATEGORIES[0].id);
  const { addToCart, items } = useCart();
  const active = MENU_CATEGORIES.find((c) => c.id === activeId);

  const qtyFor = (name) => items.find((i) => i.id === `menu-${name}`)?.qty ?? 0;

  return (
    <>
      <section className="menu-banner">
        <p className="eyebrow">रेट चार्ट</p>
        <h1 className="section-title section-title--light">Our Menu</h1>
        <p className="menu-banner__sub">Shuddh evam deshi swad — pure, home-style flavour, straight off the coals.</p>
      </section>

      <section className="menu-page">
        <div className="menu-tabs" role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={cat.id === activeId}
              className={`menu-tab ${cat.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu-panel" role="tabpanel">
          <div className="menu-panel__head">
            <h2>
              {active.label} <span className="menu-panel__hindi">{active.hindi}</span>
            </h2>
            <p>{active.note}</p>
          </div>

          <ul className="menu-list">
            {active.items.map((item) => {
              const qty = qtyFor(item.name);
              return (
                <li className="menu-row" key={item.name}>
                  <span className="menu-row__name">{item.name}</span>
                  <span className="menu-row__leader" aria-hidden="true" />
                  <span className="menu-row__price">₹{item.price}</span>
                  <button
                    className={`menu-row__add ${qty > 0 ? "is-added" : ""}`}
                    onClick={() => addToCart({ id: `menu-${item.name}`, name: item.name, price: item.price })}
                    aria-label={`Add ${item.name} to cart`}
                  >
                    {qty > 0 ? <Check /> : <Plus />}
                    {qty > 0 && <span className="menu-row__qty">{qty}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
