import { useCallback, useEffect, useState } from "react";
import { Arrow, Plus } from "./Icons";
import { Leaf, Tomato, Chili, StarAnise } from "./Decorations";
import { HERO_DISHES } from "../data/dishes";
import { useCart } from "../context/CartContext";

const CURRENCY = "$";

export default function Hero() {
  const { addToCart } = useCart();
  const total = HERO_DISHES.length;
  const [slide, setSlide] = useState({ index: 0, dir: "next" });

  const go = useCallback(
    (dir) =>
      setSlide((s) => ({
        index: (s.index + (dir === "next" ? 1 : -1) + total) % total,
        dir,
      })),
    [total]
  );

  // Preload every dish so the next image appears instantly.
  useEffect(() => {
    HERO_DISHES.forEach((d) => {
      const im = new Image();
      im.src = d.src;
    });
  }, []);

  // Keyboard: ← and → change the dish.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go("next");
      if (e.key === "ArrowLeft") go("prev");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const { index, dir } = slide;
  const dish = HERO_DISHES[index];
  const prevDish = HERO_DISHES[(index - 1 + total) % total];
  const nextDish = HERO_DISHES[(index + 1) % total];

  return (
    <section className="hero" id="top" aria-roledescription="carousel" aria-label="Featured mutton dishes">
      <div className="ring ring--1" aria-hidden="true" />
      <div className="ring ring--2" aria-hidden="true" />

      <div className="deco deco--anise" aria-hidden="true">
        <StarAnise />
      </div>
      <div className="deco deco--tomato" aria-hidden="true">
        <Tomato />
      </div>
      <div className="deco deco--leaf" aria-hidden="true">
        <Leaf id="leafA" />
      </div>
      <div className="deco deco--leaf-blur" aria-hidden="true">
        <Leaf id="leafB" />
      </div>
      <div className="deco deco--chili" aria-hidden="true">
        <Chili />
      </div>

      <div className="copy">
        <p className="eyebrow">Welcome to Barab Mutton</p>
        <h1 className="headline">
          <span className="line">Your city's best</span>
          <span className="line">Mutton spot</span>
        </h1>
        <div className="price" key={`price-${index}`}>
          <span className="price__name">{dish.name}</span>
          <span className="price__amt">
            <em>Only</em>
            {CURRENCY}
            {dish.price}
          </span>
        </div>
      </div>

      <button className="arrow arrow--prev" onClick={() => go("prev")} aria-label="Previous dish">
        <Arrow dir="prev" />
      </button>
      <button className="arrow arrow--next" onClick={() => go("next")} aria-label="Next dish">
        <Arrow dir="next" />
      </button>

      <button className="side side--prev" onClick={() => go("prev")} aria-label={`Show ${prevDish.name}`}>
        <img src={prevDish.src} alt="" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
      </button>
      <button className="side side--next" onClick={() => go("next")} aria-label={`Show ${nextDish.name}`}>
        <img src={nextDish.src} alt="" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
      </button>

      <div className="plate-wrap">
        <div key={index} className={`plate plate--${dir}`}>
          <img src={dish.src} alt={dish.name} onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
        </div>
        <button className="add" onClick={() => addToCart(dish)} aria-label={`Add ${dish.name} to cart`}>
          <Plus />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {dish.name}, {CURRENCY}
        {dish.price}. Dish {index + 1} of {total}.
      </p>
    </section>
  );
}
