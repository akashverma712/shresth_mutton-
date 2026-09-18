import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

let toastSeq = 0;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{ id, name, price, qty }]
  const [toasts, setToasts] = useState([]); // [{ id, name }]

  const addToCart = useCallback((dish) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === dish.id);
      if (existing) {
        return prev.map((i) => (i.id === dish.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: dish.id, name: dish.name, price: dish.price, qty: 1 }];
    });

    const toastId = ++toastSeq;
    setToasts((prev) => [...prev, { id: toastId, name: dish.name }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 2600);
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  const value = { items, addToCart, dismissToast, toasts, count, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside a CartProvider");
  return ctx;
}
