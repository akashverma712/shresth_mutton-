export const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&h=1100&q=80`;

// The hero carousel — exactly 5 dishes.
export const HERO_DISHES = [
  {
    id: "handi-mutton-1kg",
    name: "Handi Mutton — 1 Kg",
    price: 1400,
    src: unsplash("1606843046080-45bf7a23c39f"),
  },
  {
    id: "handi-mutton-500g",
    name: "Handi Mutton — 500 g",
    price: 700,
    src: unsplash("1608684363982-d2d470f0b4bc"),
  },
  {
    id: "handi-mutton-250g",
    name: "Handi Mutton — 250 g",
    price: 350,
    src: unsplash("1727280213367-ecca818ba188"),
  },
  {
    id: "mutton-thali",
    name: "Mutton Thali",
    price: 180,
    src: unsplash("1697862446672-4bd74cc476d0"),
  },
  {
    id: "handi-chicken-1kg",
    name: "Handi Chicken — 1 Kg",
    price: 700,
    src: unsplash("1740984822212-9cfd3a2a129a"),
  },
];

// Extra cards for the "Customer Favourites" swiper.
// Exactly 6 dishes.
export const FEATURED_DISHES = [
  {
    id: "paneer-kadhai",
    name: "Paneer Kadhai — Full",
    price: 180,
    src: unsplash("1631452180519-c014fe946bc7"),
  },
  {
    id: "mutton-kebab",
    name: "Mutton Kebab",
    price: 250,
    src: unsplash("1633945274405-b6c8069047b0"),
  },
  {
    id: "tandoori-roti",
    name: "Tandoori Roti",
    price: 20,
    src: unsplash("1701579231378-3726490a407b"),
  },
  {
    id: "handi-chicken-500g",
    name: "Handi Chicken — 500 g",
    price: 350,
    src: unsplash("1631515243349-e0cb75fb8d3a"),
  },
  {
    id: "steamed-rice",
    name: "Steamed Rice",
    price: 40,
    src: unsplash("1596560548464-f010549b84d7"),
  },
  {
    id: "chicken-kebab",
    name: "Chicken Kebab",
    price: 150,
    src: unsplash("1626082927389-6cd097cdc6ec"),
  },
];