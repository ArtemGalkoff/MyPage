const MetallicECG = () => (
  <svg
    width="400"
    height="100"
    viewBox="0 0 400 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <defs>
      <linearGradient id="metalGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#B0B0B0" />
        <stop offset="50%" stopColor="#E0E0E0" />
        <stop offset="100%" stopColor="#707070" />
      </linearGradient>
      <filter id="glow" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB" >
        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#9CA8B3" floodOpacity="0.7" />
      </filter>
    </defs>
    <path
      d="M0 50 L30 50 L40 20 L50 80 L60 40 L80 50 L100 50 L110 10 L130 90 L150 50 L170 50 L180 20 L190 80 L210 50 L230 50 L240 30 L250 70 L270 50 L290 50 L310 20 L330 80 L350 50 L370 50 L390 10 L400 50"
      stroke="url(#metalGradient)"
      strokeWidth="4"
      filter="url(#glow)"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MetallicECG;