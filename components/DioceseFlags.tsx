'use client';

import { useState } from "react";

interface Diocese {
  name: string;
  label: string;
  bgColor: string;
  accentColor: string;
  coatOfArms?: string;
}

const dioceses: Diocese[] = [
  {
    name: "CELJE",
    label: "škofija",
    bgColor: "rgba(200, 230, 212, 0.7)",
    accentColor: "#2d5a3d",
    coatOfArms: "/images/celje-flag.png",
  },
  {
    name: "KOPER",
    label: "škofija",
    bgColor: "rgba(168, 212, 232, 0.7)",
    accentColor: "#1e4a5f",
    coatOfArms: "/images/koper-flag.png",
  },
  {
    name: "LJUBLJANA",
    label: "nadškofija",
    bgColor: "rgba(232, 200, 216, 0.7)",
    accentColor: "#5a2d4a",
    coatOfArms: "/images/ljubljana-flag.png",
  },
  {
    name: "MARIBOR",
    label: "nadškofija",
    bgColor: "rgba(216, 200, 232, 0.7)",
    accentColor: "#4a2d5a",
    coatOfArms: "/images/maribor-flag.png",
  },
  {
    name: "MURSKA SOBOTA",
    label: "škofija",
    bgColor: "rgba(212, 224, 168, 0.7)",
    accentColor: "#4a5a1e",
    coatOfArms: "/images/murska-sobota-flag.png",
  },
  {
    name: "NOVO MESTO",
    label: "škofija",
    bgColor: "rgba(232, 220, 200, 0.7)",
    accentColor: "#5a4a2d",
    coatOfArms: "/images/novo-mesto-flag.png",
  },
];

const DioceseFlags = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-0.5">
      {dioceses.map((diocese, index) => (
        <button
          key={diocese.name}
          onClick={() => setActiveIndex(index)}
          className={`
            group relative flex items-center
            transition-all duration-300 ease-out
            ${activeIndex === index ? "-translate-x-4" : "translate-x-0"}
            hover:-translate-x-4
          `}
        >
          {/* Flag body with swallowtail left edge */}
          <div
            className="relative flex flex-col items-center justify-center gap-0.5 py-1 px-2 pl-6 w-22 md:w-24 h-24 md:h-28 backdrop-blur-sm shadow-lg"
            style={{
              backgroundColor: diocese.bgColor,
              clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
            }}
          >
            {/* Shield icon */}
            {diocese.coatOfArms ? (
              <div className="w-12 h-14 md:w-16 md:h-20 flex items-center justify-center overflow-hidden">
                <img
                  src={diocese.coatOfArms}
                  alt={`${diocese.name} coat of arms`}
                  className={`max-w-full max-h-full object-contain ${
                    diocese.name === "LJUBLJANA"
                      ? "scale-[0.68]"
                      : diocese.name === "MURSKA SOBOTA" ||
                          diocese.name === "NOVO MESTO"
                        ? "scale-[1.3] mt-4"
                        : ""
                  }`}
                />
              </div>
            ) : (
              <div
                className="w-5 h-6 md:w-6 md:h-7 rounded-b-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  backgroundColor: diocese.accentColor,
                  color: diocese.bgColor,
                }}
              >
                ✝
              </div>
            )}

            {/* Text content */}
            <div
              className={`flex flex-col items-center min-w-0 ${
                diocese.name === "CELJE" ||
                diocese.name === "KOPER" ||
                diocese.name === "LJUBLJANA" ||
                diocese.name === "MARIBOR"
                  ? "mb-2"
                  : ""
              }`}
            >
              <span
                className="text-[6px] md:text-[8px] font-body font-bold leading-tight uppercase tracking-wider"
                style={{ color: diocese.accentColor }}
              >
                {diocese.label}
              </span>
              <span
                className="text-[10px] md:text-[12px] font-display font-extrabold leading-tight text-center"
                style={{ color: diocese.accentColor }}
              >
                {diocese.name}
              </span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default DioceseFlags;
