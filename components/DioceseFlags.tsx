"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DiocesePanelContent {
  image: string;
  title: string;
  sections: {
    type: "text" | "callout";
    label?: string;
    text: string;
  }[];
}

interface Diocese {
  name: string;
  label: string;
  bgColor: string;
  accentColor: string;
  coatOfArms?: string;
  content?: DiocesePanelContent;
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
    content: {
      image: "/images/koper-adoracija2.jpg",
      title: "Adoracija v tišini",
      sections: [
        {
          type: "text",
          label: "Lokacija",
          text: "Cerkev svetega Marka (Kvedrova 17, Koper)",
        },
        {
          type: "text",
          label: "Urnik",
          text: "Vsak dan od ponedeljka do petka, dve uri po večerni sveti maši (od 19.30 do 21.30)",
        },

        {
          type: "callout",
          text: "Vabimo vas, da se pridružite skupini stalnih častilcev. Za več informacij pokličite 041 601 854 (Slavko).",
        },
      ],
    },
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

  const activeContent =
    activeIndex !== null ? dioceses[activeIndex].content : null;

  const handleFlagClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Expandable panel */}
      <AnimatePresence>
        {activeContent && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 740, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="overflow-hidden"
          >
            <div className="relative w-[740px] max-h-[80vh] overflow-y-auto bg-cream rounded-l-2xl shadow-2xl border border-gold/20 border-r-0">
              {/* Close button */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-navy/80 text-cream hover:bg-navy transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative w-full rounded-tl-2xl overflow-hidden">
                <Image
                  src={activeContent.image}
                  alt={activeContent.title}
                  width={740}
                  height={500}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-2xl font-bold text-navy mb-1">
                  {activeContent.title}
                </h3>
                <div className="w-12 h-0.5 bg-gold mb-4" />

                <div className="space-y-4">
                  {activeContent.sections.map((section, i) =>
                    section.type === "callout" ? (
                      <div
                        key={i}
                        className="bg-cream-dark p-4 rounded-xl border-l-4 border-gold"
                      >
                        <p className="font-body text-sm text-navy/80 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    ) : (
                      <div key={i}>
                        {section.label && (
                          <p className="font-body text-xs font-bold text-gold-dark uppercase tracking-wider mb-1">
                            {section.label}
                          </p>
                        )}
                        <p className="font-body text-sm text-navy/80 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Flags */}
      <div className="flex flex-col items-end gap-0.5">
        {dioceses.map((diocese, index) => (
          <button
            key={diocese.name}
            onClick={() => handleFlagClick(index)}
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
                clipPath:
                  "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
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
    </div>
  );
};

export default DioceseFlags;
