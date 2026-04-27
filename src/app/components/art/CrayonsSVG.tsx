export function CrayonsSVG() {
  return (
    <svg
      width="200"
      height="180"
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(-15 60 90)">
        <rect x="40" y="40" width="25" height="100" rx="3" fill="#FF6B6B" />
        <polygon points="40,40 52.5,20 65,40" fill="#8B0000" />
        <rect x="42" y="50" width="21" height="15" fill="#FFF" opacity="0.3" />
        <text x="52.5" y="80" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">R</text>
      </g>
      <g transform="rotate(0 100 90)">
        <rect x="87.5" y="30" width="25" height="110" rx="3" fill="#FFD93D" />
        <polygon points="87.5,30 100,10 112.5,30" fill="#B8860B" />
        <rect x="89.5" y="45" width="21" height="15" fill="#FFF" opacity="0.3" />
        <text x="100" y="85" textAnchor="middle" fill="#666" fontSize="10" fontWeight="bold">Y</text>
      </g>
      <g transform="rotate(15 140 90)">
        <rect x="127.5" y="35" width="25" height="105" rx="3" fill="#4D96FF" />
        <polygon points="127.5,35 140,15 152.5,35" fill="#00008B" />
        <rect x="129.5" y="48" width="21" height="15" fill="#FFF" opacity="0.3" />
        <text x="140" y="82" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold">B</text>
      </g>
    </svg>
  );
}
