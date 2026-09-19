import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedSlider from "../components/FeaturedSlider";
import { unsplash } from "../data/dishes";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="about" id="about">
        <div className="about__img">
          <img src={unsplash("1631452180519-c014fe946bc7")} alt="Handi mutton being served" loading="lazy" />
        </div>
        <div className="about__copy">
          <p className="eyebrow eyebrow--dark">Since the first handi</p>
          <h2 className="section-title">Cooked the slow way, on purpose</h2>
          <p>
            Every handi at Shresth is sealed and cooked low over coals for hours, the way it's done back home
            in Champaran. No shortcuts, no pressure cookers — just mutton, spice and time.
          </p>
          <ul className="about__stats">
            <li>
              <strong>12+</strong>
              <span>years slow-cooking handi</span>
            </li>
            <li>
              <strong>100%</strong>
              <span>fresh, cut to order</span>
            </li>
            <li>
              <strong>4.2★</strong>
              <span>regulars' rating</span>
            </li>
          </ul>
          <Link to="/menu" className="btn btn--primary">
            See the full menu
          </Link>
        </div>
      </section>

      <FeaturedSlider />

      <section className="visit-cta">
        <div className="visit-cta__inner">
          <h2 className="section-title">Hungry already?</h2>
          <p>Handi orders taste best fresh off the coals — call ahead and we'll have yours ready.</p>
          <div className="visit-cta__actions">
            <Link to="/menu" className="btn btn--primary">
              Browse the menu
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Find us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
