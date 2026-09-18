export const Leaf = ({ id }) => (
  <svg viewBox="0 0 100 170" aria-hidden="true">
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8cc655" />
        <stop offset="1" stopColor="#2b7128" />
      </linearGradient>
    </defs>
    <path d="M50 4C92 44 98 118 50 166C2 118 8 44 50 4Z" fill={`url(#${id})`} />
    <path d="M50 14V160" stroke="rgba(255,255,255,.35)" strokeWidth="2" fill="none" />
    <path
      d="M50 50 24 36M50 50 76 36M50 82 20 64M50 82 80 64M50 114 24 96M50 114 76 96"
      stroke="rgba(255,255,255,.22)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

export const Tomato = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <radialGradient id="tomG" cx=".35" cy=".3" r=".8">
        <stop offset="0" stopColor="#ff6f5e" />
        <stop offset=".55" stopColor="#e5241d" />
        <stop offset="1" stopColor="#8e0f0f" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="46" fill="url(#tomG)" />
    <ellipse cx="34" cy="28" rx="12" ry="7" fill="rgba(255,255,255,.45)" transform="rotate(-30 34 28)" />
  </svg>
);

export const Chili = () => (
  <svg viewBox="0 0 140 160" aria-hidden="true">
    <defs>
      <linearGradient id="chiG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ff4b3a" />
        <stop offset="1" stopColor="#a30f12" />
      </linearGradient>
    </defs>
    <path
      d="M40 26C88 22 128 76 122 130C120 150 100 152 98 134C94 92 70 62 34 52C24 48 26 28 40 26Z"
      fill="url(#chiG)"
    />
    <path d="M40 26C34 16 26 10 16 10C22 20 26 30 34 40Z" fill="#3f8a2b" />
    <path d="M58 34C86 40 108 66 112 100" stroke="rgba(255,255,255,.35)" strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const StarAnise = () => (
  <svg viewBox="-60 -60 120 120" aria-hidden="true">
    {Array.from({ length: 8 }, (_, i) => (
      <ellipse
        key={i}
        cx="0"
        cy="-30"
        rx="11"
        ry="27"
        fill="#7b3a1c"
        stroke="#4a210f"
        strokeWidth="1.5"
        transform={`rotate(${i * 45})`}
      />
    ))}
    <circle r="10" fill="#5a2a12" />
    {Array.from({ length: 8 }, (_, i) => (
      <circle key={i} cx="0" cy="-36" r="3.2" fill="#d9a066" transform={`rotate(${i * 45 + 22.5})`} />
    ))}
  </svg>
);
