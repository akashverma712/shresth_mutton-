import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FEATURED_DISHES } from "../data/dishes";
import { Plus } from "./Icons";
import { useCart } from "../context/CartContext";

const CURRENCY = "$";

export default function FeaturedSlider() {
  const { addToCart } = useCart();

  return (
    <section className="favourites" aria-label="Customer favourites">
      <div className="favourites__head">
        <p className="eyebrow eyebrow--dark">Loved by regulars</p>
        <h2 className="section-title">Customer favourites</h2>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.15}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3800, disableOnInteraction: true }}
        breakpoints={{
          620: { slidesPerView: 2.2 },
          960: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
        className="favourites__swiper"
      >
        {FEATURED_DISHES.map((dish) => (
          <SwiperSlide key={dish.id}>
            <article className="dish-card">
              <div className="dish-card__img">
                <img src={dish.src} alt={dish.name} loading="lazy" />
              </div>
              <div className="dish-card__body">
                <h3>{dish.name}</h3>
                <div className="dish-card__row">
                  <span className="dish-card__price">
                    {CURRENCY}
                    {dish.price}
                  </span>
                  <button className="dish-card__add" onClick={() => addToCart(dish)} aria-label={`Add ${dish.name} to cart`}>
                    <Plus />
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
