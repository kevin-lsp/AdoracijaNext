'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Sparkles, Heart, BookOpen } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Kaj je adoracija?',
    description: 'Tiho češčenje Jezusa, prisotnega v Evharistiji. Beseda "adorare" pomeni globoko čast in občudovanje.',
    image: '/images/jozi-picture.jpg',
    accent: 'gold',
  },
  {
    icon: Heart,
    title: 'Namen adoracije',
    description: 'Intimno srečanje z Bogom. Izmenjava ljubezni z Jezusom in poslušanje Njegovega glasu v tišini.',
    image: '/images/fra-angelico.jpg',
    accent: 'burgundy',
  },
  {
    icon: Sparkles,
    title: 'Sadovi adoracije',
    description: 'Bog nas tolažip zdravi in obnavlja. Odpira naša srca, veča ljubezen in daje novo upanje.',
    image: '/images/andreja-picture.jpeg',
    accent: 'gold',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="about" ref={ref} className="relative py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6">
            Evharistična Adoracija
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Odkrijte globino molitve pred Najsvetejšim
          </p>
        </motion.div>

        {/* Feature Cards - Alternating Layout */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="absolute top-8 right-8 bg-gold w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <Icon className="w-10 h-10 text-navy" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="inline-block mb-4">
                      <span className="text-gold text-sm font-bold tracking-widest uppercase">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                      {feature.title}
                    </h3>
                    <div className="w-24 h-1 bg-gold mb-8" />
                    <p className="text-xl text-navy/70 leading-relaxed mb-8">
                      {feature.description}
                    </p>

                    {/* Decorative Quote */}
                    <div className="bg-cream p-6 rounded-2xl border-l-4 border-gold">
                      <p className="font-display text-lg italic text-navy/80">
                        {index === 0 && '"V tišini pred Bogom najdemo mir, ki presega vse razumevanje."'}
                        {index === 1 && '"Srečanje z Jezusom v adoraciji spremeni naše srce."'}
                        {index === 2 && '"Bog nas zdravi in obnavlja v svoji prisotnosti."'}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
