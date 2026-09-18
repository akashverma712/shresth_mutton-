import { Link } from "react-router-dom";
import { ChefHat, MapPin, Phone, Mail, SocialIcon } from "./Icons";
import { FEATURED_DISHES } from "../data/dishes";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const gallery = FEATURED_DISHES.slice(0, 6);

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" className="logo">
            <ChefHat />
            <span className="logo__text">
              <span className="logo__name">Barab</span>
              <span className="logo__tag">Mutton &amp; Grill House</span>
            </span>
          </Link>
          <p className="site-footer__about">
            Slow-cooked handi mutton and chicken, Champaran style — sealed, smoked and served the way it's
            been done for generations.
          </p>
          <ul className="site-footer__contact">
            <li>
              <MapPin /> Station Road, near Bus Stand
            </li>
            <li>
              <Phone /> +91 98765 43210
            </li>
            <li>
              <Mail /> hello@barabmutton.example
            </li>
          </ul>
          <div className="site-footer__social">
            <a href="#top" aria-label="Twitter">
              <SocialIcon kind="twitter" />
            </a>
            <a href="#top" aria-label="Facebook">
              <SocialIcon kind="facebook" />
            </a>
            <a href="#top" aria-label="Instagram">
              <SocialIcon kind="instagram" />
            </a>
            <a href="#top" aria-label="LinkedIn">
              <SocialIcon kind="linkedin" />
            </a>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Useful links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Hours</h4>
          <ul className="site-footer__hours">
            <li>
              <span>Mon – Fri</span> <span>12pm – 11pm</span>
            </li>
            <li>
              <span>Sat – Sun</span> <span>12pm – 12am</span>
            </li>
            <li>
              <span>Handi orders</span> <span>Pre-book 2h ahead</span>
            </li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__gallery">
          <h4>From the kitchen</h4>
          <div className="gallery-grid">
            {gallery.map((dish) => (
              <img key={dish.id} src={dish.src} alt={dish.name} loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>
          © {YEAR} Barab Mutton &amp; Grill House. All rights reserved. Built as a demo storefront —
          all prices and orders on this site are illustrative.
        </p>
      </div>
    </footer>
  );
}
