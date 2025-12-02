"use client";

import { useState } from "react";
import { Activity, Phone, RotateCcw } from "lucide-react";
import clsx from "clsx";
import { cn } from "../utils";
import { Button } from "./Button";
import { bodyPartsList, svgFileMapping } from "../data/bodyParts";
import { BodyPartSvgOverlay } from "./BodyPartSvgOverlay";

export const BodyMap = () => {
  const [gender, setGender] = useState("male");
  const [view, setView] = useState("front");
  const [selectedParts, setSelectedParts] = useState([]);
  const [painLevel, setPainLevel] = useState(5);

  const togglePart = (id) => {
    setSelectedParts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleBook = () => {
    const selectedNames = selectedParts
      .map((id) => bodyPartsList.find((p) => p.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const message = `Hi Dr. Akansha, I have Level ${painLevel} pain${selectedNames ? ` in my: ${selectedNames}` : ""}. When can you visit?`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const currentKey = `${gender}_${view}`;
  const currentSvgMapping = svgFileMapping[currentKey] || {};

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
      {/* Visual Interaction Area */}
      <div className="p-6 md:p-10 flex-1 bg-slate-50 relative min-h-[600px] flex flex-col items-center justify-center">
        
        {/* Toggles */}
        <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
          <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-200 inline-flex">
            <button 
              onClick={() => setGender("male")}
              className={cn("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", gender === "male" ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:bg-slate-50")}
            >
              Male
            </button>
            <button 
              onClick={() => setGender("female")}
              className={cn("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", gender === "female" ? "bg-pink-100 text-pink-700" : "text-slate-500 hover:bg-slate-50")}
            >
              Female
            </button>
          </div>
          <div className="bg-white p-1 rounded-lg shadow-sm border border-slate-200 inline-flex">
            <button 
              onClick={() => setView("front")}
              className={cn("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", view === "front" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-50")}
            >
              Front
            </button>
            <button 
              onClick={() => setView("back")}
              className={cn("px-3 py-1.5 rounded-md text-sm font-medium transition-colors", view === "back" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-50")}
            >
              Back
            </button>
          </div>
        </div>

        {/* Reset Button */}
        {selectedParts.length > 0 && (
          <button 
            onClick={() => setSelectedParts([])}
            className="absolute top-6 right-6 bg-white p-2 rounded-full shadow-sm border border-slate-200 text-slate-500 hover:text-red-500 hover:bg-red-50 transition-colors"
            title="Reset Selection"
          >
            <RotateCcw size={18} />
          </button>
        )}

        <div className="relative w-full max-w-xl mx-auto shadow-2xl rounded-2xl overflow-hidden bg-white">
          {/* Base Image */}
          <img 
            src={`/${gender}_${view}_view.png`} 
            alt={`${gender} ${view} view`} 
            className="w-full h-auto"
          />

          {/* Dynamic SVG Overlays from external files */}
          {Object.entries(currentSvgMapping).map(([bodyPartId, svgPath]) => (
            <BodyPartSvgOverlay
              key={bodyPartId}
              svgPath={svgPath}
              bodyPartId={bodyPartId}
              isSelected={selectedParts.includes(bodyPartId)}
              onClick={() => togglePart(bodyPartId)}
            />
          ))}

          {/* Instructions Overlay (only if nothing selected) */}
          {selectedParts.length === 0 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg text-sm font-medium text-slate-600 animate-bounce whitespace-nowrap pointer-events-none">
              Tap multiple areas
            </div>
          )}
        </div>
      </div>

      {/* Diagnosis Panel */}
      <div className="p-6 md:p-10 flex-1 flex flex-col bg-white overflow-y-auto max-h-[800px]">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Select Pain Areas
          </h3>
          <p className="text-slate-500">
            Tap on the body map or use the list below to select all areas where you feel pain.
          </p>
        </div>

        {/* Selection Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {bodyPartsList.map((part) => (
            <button
              key={part.id}
              onClick={() => togglePart(part.id)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm border transition-all",
                selectedParts.includes(part.id)
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
              )}
            >
              {part.name}
            </button>
          ))}
        </div>

        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 border-t border-slate-100 pt-6">
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-semibold text-slate-700">Pain Intensity</span>
              <span className={cn("font-bold px-3 py-1 rounded-full text-sm", 
                painLevel < 4 ? "bg-green-100 text-green-700" : 
                painLevel < 8 ? "bg-yellow-100 text-yellow-700" : 
                "bg-red-100 text-red-700"
              )}>
                Level {painLevel}
              </span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={painLevel} 
              onChange={(e) => setPainLevel(e.target.value)}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
          </div>

          <Button onClick={handleBook} className="w-full text-lg py-4">
            <Phone size={20} />
            Book Session via WhatsApp
          </Button>
          <p className="text-center text-xs text-slate-400 mt-4">
            Dr. Akansha typically replies within 15 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
