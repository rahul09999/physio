"use client";

export const ShouldersOverlay = ({ className, onClick }) => {
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1920 2240" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <g filter="url(#filter0_d_13_27)">
        <path d="M1102.94 511.716L1138.33 514.859L1159.27 521.671L1183.2 534.769L1204.13 555.727L1226.56 589.259L1246.5 635.366L1159.27 693L1084.5 507L1102.94 511.716ZM767.901 684L672.5 632.5L688.5 592.5L717 551.5L757.5 520.5L787.5 512.5L828.5 510L767.901 684Z" fill="currentColor" shapeRendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_13_27" x="668.5" y="507" width="582" height="194" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_13_27"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_27" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};
