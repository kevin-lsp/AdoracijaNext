'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const steps = [
  { number: 1, title: 'Začetek', subtitle: 'Vstopi v tišino', description: 'Pridi v tišino in se zavedi Božje prisotnosti. Umiri svoj um in srce.' },
  { number: 2, title: 'Predaja', subtitle: 'Odstrani bremena', description: 'Položi svoje bremena pred Boga. Pusti mu svoje skrbi, strahove in tesnobe.' },
  { number: 3, title: 'Hvaležnost', subtitle: 'Prepoznaj darove', description: 'Najdi razloge za hvaležnost. Zahvali se Bogu za njegova darila v tvojem življenju.' },
  { number: 4, title: 'Usmerjanje', subtitle: 'Prosi za vodstvo', description: 'Prosi Boga za vodstvo. Zaupaj mu svoje načrte in dovoli mu, da usmerja tvoje korake.' },
  { number: 5, title: 'Poslušanje', subtitle: 'Odkrij Njegov glas', description: 'Bodi pozoren. Poslušaj tihi Božji glas v svojem srcu. On govori v tišini.' },
  { number: 6, title: 'Zaključek', subtitle: 'Zahvala', description: 'Zahvali se Bogu in končaj z molitvijo. Odnesi Njegov mir s seboj v svet.' },
];

export default function HowToSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="how-to" ref={ref} className="relative py-32 overflow-hidden bg-navy">
      {/* Large Visible Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/girl-praying.jpg"
          alt="Prayer"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
            Kako pristopiti
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 max-w-2xl mx-auto">
            Šest korakov za globljo izkušnjo adoracije
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20">
                {/* Number Badge */}
                <div className="absolute -top-6 left-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center shadow-xl"
                  >
                    <span className="text-3xl font-bold text-navy font-display">{step.number}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="font-display text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gold text-sm font-semibold mb-4 tracking-wide">
                    {step.subtitle}
                  </p>
                  <p className="text-cream/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-4 w-12 h-12 border-4 border-gold/20 rounded-full group-hover:border-gold/60 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-lg p-12 rounded-3xl border border-gold/30"
        >
          <p className="font-display text-2xl md:text-3xl italic text-white leading-relaxed max-w-3xl mx-auto">
            "Ni pomembno, koliko časa preživiš v adoraciji, ampak kako odprto je tvoje srce."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
