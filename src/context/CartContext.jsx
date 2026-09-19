import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

let toastSeq = 0;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{ id, name, price, qty }]
  const [toasts, setToasts] = useState([]); // [{ id, name }]
  const [confirming, setConfirming] = useState(false); // drives the confirm-order animation

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

  // Removes one unit of an item — drops it entirely once it hits zero.
  const decrementItem = useCallback((id) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  // Removes the whole dish, whatever its quantity.
  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Dummy "place order" flow: plays a short confirming animation, then clears the cart.
  const confirmOrder = useCallback(() => {
    if (items.length === 0 || confirming) return;
    setConfirming(true);
    window.setTimeout(() => {
      setItems([]);
      setConfirming(false);
    }, 1800);
  }, [items.length, confirming]);

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items]);

  const value = {
    items,
    addToCart,
    decrementItem,
    removeItem,
    confirmOrder,
    confirming,
    dismissToast,
    toasts,
    count,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside a CartProvider");
  return ctx;
}
