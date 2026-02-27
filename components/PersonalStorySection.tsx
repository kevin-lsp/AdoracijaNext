'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Story {
  quote: string;
  author: string;
  isPlaceholder?: boolean;
}

const stories: Story[] = [
  {
    quote: `»Prijetno je muditi se pri njem in se kakor ljubljeni učenec nasloniti na njegove prsi (Jn 13, 15), da se nas dotakne brezmejna ljubezen njegovega srca. … Kolikokrat, dragi bratje in sestre, sem to izkusil in iz tega prejel moč, tolažbo in podporo.«`,
    author: "Sv. Janez Pavel II."
  },
  {
    quote: `"Vedno znova torej hrepenim po njegovem prihodu in marsikdaj ponovno pride. In ko se mi bo ponovno prikazal in ga bom prijel s svojimi rokami, se mi bo izmuznil; in čeprav se mi je izmaknil, ga spet iščem. To počne vedno znova, dokler ga resnično ne zadržim in se vzpnem, "naslonjen na svojega ljubega"."`,
    author: "Origen, Homilija k Visoki pesmi"
  },
  {
    quote: `"Jaz sem mislil na Boga, na Marijo, Bog pa je mislil na vse!"`,
    author: "4-letni deček Jean"
  },
  {
    quote: `"V kapeli imamo izpostavljen Najsvetejši zakrament. Božanske so ure, ki jih preživimo v tem majhnem kotičku nebes, kjer imamo videnje v snovi pod ponižno hostijo."`,
    author: "Elizabeta Svete Trojice"
  },
  {
    quote: `"Zvečer mi je rekel Gospod: "Moj otrok, odpočij se na mojem Srcu, vidim, da si utrujena od dela v mojem vinogradu." In mojo dušo je preplavilo božje veselje"`,
    author: "Jezus sveti Favstini Kowalski"
  },
  {
    quote: `Vaša zgodba bo kmalu dodana ...`,
    author: "Pričakujemo vašo zgodbo",
    isPlaceholder: true
  }
];

export default function PersonalStorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-cream/20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* NO TITLE - as requested by user */}

        {/* Story quote cards in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-white/60 backdrop-blur-sm p-6 rounded-lg border-l-4 border-gold shadow-md hover:shadow-lg transition-shadow duration-300 ${
                story.isPlaceholder ? 'opacity-60' : ''
              }`}
            >
              <p className="text-navy/90 italic mb-3 text-left text-base md:text-lg leading-relaxed font-inter">
                {story.quote}
              </p>
              <p className="text-gold font-semibold text-right">
                — {story.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
