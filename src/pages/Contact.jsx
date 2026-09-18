import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check } from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only demo: no backend call, just confirm the UI state.
    setSent(true);
    e.target.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section className="menu-banner menu-banner--contact">
        <p className="eyebrow">Get in touch</p>
        <h1 className="section-title section-title--light">Contact Us</h1>
        <p className="menu-banner__sub">Questions, bulk handi orders or feedback — we'd love to hear from you.</p>
      </section>

      <section className="contact-page">
        <div className="contact-info">
          <ul>
            <li>
              <MapPin />
              <div>
                <h3>Address</h3>
                <p>Station Road, near Bus Stand, opposite Chamber's Market</p>
              </div>
            </li>
            <li>
              <Phone />
              <div>
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </li>
            <li>
              <Mail />
              <div>
                <h3>Email</h3>
                <p>hello@barabmutton.example</p>
              </div>
            </li>
            <li>
              <Clock />
              <div>
                <h3>Hours</h3>
                <p>Mon – Fri, 12pm – 11pm · Sat – Sun, 12pm – 12am</p>
              </div>
            </li>
          </ul>

          <div className="contact-map" role="img" aria-label="Map placeholder showing the restaurant's location">
            <span>Map preview</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Send a message</h2>
          <div className="contact-form__row">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" placeholder="Your phone number" />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell us what you need…" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
          {sent && (
            <p className="contact-form__sent">
              <Check /> Thanks — this is a demo form, so nothing was actually sent.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
