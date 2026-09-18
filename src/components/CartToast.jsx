import { Check } from "./Icons";
import { useCart } from "../context/CartContext";

export default function CartToast() {
  const { toasts, dismissToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-stack" role="status" aria-live="polite">
      {toasts.map((t) => (
        <div className="toast" key={t.id}>
          <span className="toast__icon">
            <Check />
          </span>
          <span className="toast__text">
            <strong>{t.name}</strong> added to cart
          </span>
          <button className="toast__close" onClick={() => dismissToast(t.id)} aria-label="Dismiss">
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
