
import { useCallback, useEffect, useState } from "react";

import { Arrow, Plus } from "./Icons";

import { Leaf, Tomato, Chili, StarAnise } from "./Decorations";

import { HERO_DISHES } from "../data/dishes";

import { useCart } from "../context/CartContext";

export default function Hero() {
  const { addToCart } = useCart();

  const total = HERO_DISHES.length;

  const [slide, setSlide] = useState({
    index: 0,
    dir: "next",
  });

  const go = useCallback(
    (direction) => {
      setSlide((current) => ({
        index:
          (current.index +
            (direction === "next" ? 1 : -1) +
            total) %
          total,
        dir: direction,
      }));
    },
    [total]
  );

  useEffect(() => {
    HERO_DISHES.forEach((dish) => {
      const image = new Image();
      image.src = dish.src;
    });
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        go("next");
      }

      if (event.key === "ArrowLeft") {
        go("prev");
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [go]);

  const { index, dir } = slide;

  const dish = HERO_DISHES[index];

  const prevDish =
    HERO_DISHES[(index - 1 + total) % total];

  const nextDish =
    HERO_DISHES[(index + 1) % total];

  if (!dish) {
    return null;
  }

  const currentNumber = String(index + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  return (
    <section
      className="hero"
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured dishes"
    >
      <div
        className="ring ring--1"
        aria-hidden="true"
      />

      <div
        className="ring ring--2"
        aria-hidden="true"
      />

      <div
        className="deco deco--anise"
        aria-hidden="true"
      >
        <StarAnise />
      </div>

      <div
        className="deco deco--tomato"
        aria-hidden="true"
      >
        <Tomato />
      </div>

      <div
        className="deco deco--leaf"
        aria-hidden="true"
      >
        <Leaf id="leafA" />
      </div>

      <div
        className="deco deco--leaf-blur"
        aria-hidden="true"
      >
        <Leaf id="leafB" />
      </div>

      <div
        className="deco deco--chili"
        aria-hidden="true"
      >
        <Chili />
      </div>

      <div className="copy">
        <p className="eyebrow">
          Shresth Champaran Mutton Handi
        </p>

        <h1 className="headline">
          <span className="line">
            Your city's best
          </span>

          <span className="line">
            Mutton spot
          </span>
        </h1>

        <div
          className="hero-counter"
          aria-hidden="true"
        >
          <span>{currentNumber}</span>

          <span className="hero-counter__line" />

          <span>{totalNumber}</span>
        </div>
      </div>

      <button
        type="button"
        className="arrow arrow--prev"
        onClick={() => go("prev")}
        aria-label={`Previous dish: ${prevDish.name}`}
      >
        <Arrow dir="prev" />
      </button>

      <button
        type="button"
        className="arrow arrow--next"
        onClick={() => go("next")}
        aria-label={`Next dish: ${nextDish.name}`}
      >
        <Arrow dir="next" />
      </button>

      <button
        type="button"
        className="side side--prev"
        onClick={() => go("prev")}
        aria-label={`Show ${prevDish.name}`}
      >
        <img
          src={prevDish.src}
          alt=""
          loading="eager"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <span className="side__info">
          <small>Previous</small>
          <strong>{prevDish.name}</strong>
          <b>Rs. {prevDish.price}</b>
        </span>
      </button>

      <button
        type="button"
        className="side side--next"
        onClick={() => go("next")}
        aria-label={`Show ${nextDish.name}`}
      >
        <img
          src={nextDish.src}
          alt=""
          loading="eager"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />

        <span className="side__info">
          <small>Next</small>
          <strong>{nextDish.name}</strong>
          <b>Rs. {nextDish.price}</b>
        </span>
      </button>

      <div className="plate-wrap">
        <div
          key={`${dish.id}-${index}`}
          className={`plate plate--${dir}`}
        >
          <img
            src={dish.src}
            alt={dish.name}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(event) => {
              event.currentTarget.style.visibility = "hidden";
            }}
          />
        </div>

        <button
          type="button"
          className="add"
          onClick={() => addToCart(dish)}
          aria-label={`Add ${dish.name} to cart`}
        >
          <Plus />
        </button>
      </div>

      <p
        className="sr-only"
        aria-live="polite"
      >
        Featured dish {index + 1} of {total}.
      </p>
    </section>
  );
}

