"use client";

import { useState, useEffect } from "react";
import { cn } from "../utils";

/**
 * BodyPartSvgOverlay Component
 * 
 * Loads an external SVG file and renders it as an overlay on the body map.
 * The SVG files have a viewBox of "0 0 1920 2240" and need to be scaled
 * and positioned to overlay perfectly on the body image.
 */
export const BodyPartSvgOverlay = ({ 
  svgPath, 
  isSelected, 
  onClick,
  bodyPartId 
}) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    // Fetch and parse the SVG file
    const loadSvg = async () => {
      try {
        const response = await fetch(svgPath);
        const text = await response.text();
        
        // Parse the SVG to extract the path elements
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, 'image/svg+xml');
        const paths = svgDoc.querySelectorAll('path');
        
        // Extract path data
        const pathData = Array.from(paths).map(path => ({
          d: path.getAttribute('d'),
          fill: path.getAttribute('fill'),
          fillOpacity: path.getAttribute('fill-opacity'),
        }));
        
        setSvgContent(pathData);
      } catch (error) {
        console.error(`Error loading SVG ${svgPath}:`, error);
      }
    };

    if (svgPath) {
      loadSvg();
    }
  }, [svgPath]);

  if (!svgContent) return null;

  return (
    <svg
      viewBox="0 0 1920 2240"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      <g
        onClick={onClick}
        className={cn(
          "cursor-pointer transition-all duration-200 pointer-events-auto",
          // Default state: Transparent fill with no stroke
          "fill-transparent stroke-none",
          // Hover state: Semi-transparent blue fill
          "hover:fill-blue-500/30",
          // Selected state: Blue fill with stroke
          isSelected && "fill-blue-500/50 stroke-blue-500 stroke-[8]"
        )}
      >
        {svgContent.map((pathData, index) => (
          <path
            key={`${bodyPartId}-${index}`}
            d={pathData.d}
            // Override the original fill and stroke for our interactive behavior
            fill="inherit"
            stroke="inherit"
          />
        ))}
      </g>
    </svg>
  );
};
