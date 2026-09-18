import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartToast from "./CartToast";

export default function Layout() {
  return (
    <div className="brb">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartToast />
    </div>
  );
}
