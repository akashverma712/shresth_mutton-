export const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M2.5 3.5h3l2.4 11.2h10.4l2-8H6.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="19.5" r="1.6" fill="currentColor" />
    <circle cx="17" cy="19.5" r="1.6" fill="currentColor" />
  </svg>
);

export const Arrow = ({ dir }) => (
  <svg
    width="26"
    height="20"
    viewBox="0 0 26 20"
    aria-hidden="true"
    style={{ transform: dir === "prev" ? "none" : "scaleX(-1)" }}
  >
    <path
      d="M24 10H3M10 2.5 2.5 10 10 17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Plus = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
    <path d="M11 3v16M3 11h16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Minus = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8h10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const Trash = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M4 6h12M8 6V4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5V6m-6.5 0 .6 10a1.5 1.5 0 0 0 1.5 1.4h3.8a1.5 1.5 0 0 0 1.5-1.4l.6-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Check = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M2.5 8.5 6 12l7.5-8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChefHat = () => (
  <svg width="36" height="30" viewBox="0 0 34 30" aria-hidden="true">
    <g fill="#fff" stroke="#151515" strokeWidth="1.6" strokeLinejoin="round">
      <circle cx="10.5" cy="11" r="6" />
      <circle cx="23.5" cy="11" r="6" />
      <circle cx="17" cy="7.5" r="6.5" />
      <rect x="9" y="13" width="16" height="12" rx="1.5" />
    </g>
    <path d="M9 20h16" stroke="#f5921e" strokeWidth="2" />
  </svg>
);

export const MapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 22s7-7.4 7-13a7 7 0 1 0-14 0c0 5.6 7 13 7 13Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="9" r="2.6" fill="currentColor" />
  </svg>
);

export const Phone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 5c0 8.3 6.7 15 15 15l2-3.6-5-2.2-1.6 2A11.6 11.6 0 0 1 7.8 9.6l2-1.6L7.6 3 4 5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export const Mail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Clock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5.5l4 2.2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const social = {
  twitter: "M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.6A11.4 11.4 0 0 1 3.8 4.9a4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1a4 4 0 0 0 3.2 3.9c-.6.2-1.2.2-1.7.1a4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1Z",
  facebook: "M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7C15.9 3.6 14.9 3.5 13.8 3.5c-2.3 0-3.9 1.4-3.9 4v2.4H7.2V13h2.7v8h3.6Z",
  instagram: "M8 3.5h8a4.5 4.5 0 0 1 4.5 4.5v8A4.5 4.5 0 0 1 16 20.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm4 4.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  linkedin: "M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3.5 9.8h3V20h-3V9.8Zm6 0h2.9v1.4h.04c.4-.8 1.5-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.9V20h-3v-4.8c0-1.1 0-2.6-1.6-2.6-1.6 0-1.9 1.3-1.9 2.5V20h-3V9.8Z",
};

export const SocialIcon = ({ kind }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path d={social[kind]} fill="currentColor" fillRule="evenodd" />
  </svg>
);
