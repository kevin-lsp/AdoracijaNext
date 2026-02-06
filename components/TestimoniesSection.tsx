'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonies = [
  {
    quote: 'Ljubite in naučite se ljubiti Evharistijo. Ostanite pred Jezusom v molitvi.',
    author: 'Sv. Carlo Acutis',
    image: '/images/monstrance-light.jpg',
  },
  {
    quote: 'Tiha ura pred Jezusom v svetohranitvi je lahko celo bolj dragocena za Božje kraljestvo kot ura dela.',
    author: 'Sv. Janez Pavel II.',
    image: '/images/church-mosaic.jpg',
  },
  {
    quote: 'Evharistija je zakrament ljubezni; pomeni ljubezen; označuje ljubezen; ustvarja ljubezen.',
    author: 'Sv. Tomaž Akvinski',
    image: '/images/monstrance-hero.jpg',
  },
  {
    quote: 'Pred Najsvetejšim najdemo občutje miru, ki ga svet ne more dati.',
    author: 'Sv. Mati Terezija',
    image: '/images/adoration-hero.jpg',
  },
];

export default function TestimoniesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonies.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);

  const current = testimonies[currentIndex];

  return (
    <section id="testimonies" ref={ref} className="relative py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6">
            Besede svetnikov
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Modrost tistih, ki so globoko izkusili adoracijo
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Background Image Card */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              key={currentIndex}
              src={current.image}
              alt={current.author}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/20" />

            {/* Quote Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <motion.div
                key={`quote-${currentIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-white leading-relaxed mb-8 italic">
                  "{current.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gold text-2xl font-semibold">
                    — {current.author}
                  </p>
                  <div className="flex gap-3">
                    {/* Navigation Buttons */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prev}
                      className="w-14 h-14 rounded-full bg-gold hover:bg-gold-light flex items-center justify-center shadow-lg transition-colors"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-6 h-6 text-navy" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={next}
                      className="w-14 h-14 rounded-full bg-gold hover:bg-gold-light flex items-center justify-center shadow-lg transition-colors"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-6 h-6 text-navy" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gold'
                    : 'w-3 h-3 bg-navy/30 hover:bg-navy/50'
                }`}
                aria-label={`Go to testimony ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
