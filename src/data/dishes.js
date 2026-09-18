export const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&h=1100&q=80`;

// The hero carousel — arrows / side-plates cycle through this list.
export const HERO_DISHES = [
  { id: "handi-mutton-1kg", name: "Classic Mutton Curry", price: 65, src: unsplash("1606843046080-45bf7a23c39f") },
  { id: "handi-slow", name: "Slow-Cooked Mutton Handi", price: 72, src: unsplash("1608684363982-d2d470f0b4bc") },
  { id: "mutton-bowl", name: "Mutton Masala Bowls", price: 58, src: unsplash("1727280213367-ecca818ba188") },
  { id: "herb-lamb", name: "Herb Lamb Plate", price: 69, src: unsplash("1697862446672-4bd74cc476d0") },
  { id: "charcoal-mutton", name: "Charcoal Grilled Mutton", price: 75, src: unsplash("1740984822212-9cfd3a2a129a") },
];

// Extra cards for the "Customer Favourites" swiper on the home page.
export const FEATURED_DISHES = [
  { id: "paneer-kadhai", name: "Paneer Kadhai", price: 18, src: unsplash("1631452180519-c014fe946bc7") },
  { id: "mutton-kebab", name: "Mutton Seekh Kebab", price: 25, src: unsplash("1633945274405-b6c8069047b0") },
  { id: "tandoori-roti", name: "Tandoori Roti Basket", price: 8, src: unsplash("1701579231378-3726490a407b") },
  { id: "chicken-handi", name: "Chicken Handi", price: 35, src: unsplash("1631515243349-e0cb75fb8d3a") },
  { id: "steamed-rice", name: "Steamed Rice", price: 4, src: unsplash("1596560548464-f010549b84d7") },
  { id: "chicken-kebab", name: "Chicken Kebab", price: 15, src: unsplash("1626082927389-6cd097cdc6ec") },
];
