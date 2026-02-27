'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-white/50 backdrop-blur-sm rounded-3xl">
      <div className="text-center">
        <CalendarIcon className="w-12 h-12 text-gold animate-pulse mx-auto mb-4" />
        <p className="text-navy/60">Nalaganje urnika...</p>
      </div>
    </div>
  ),
});

import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const events = [
  { title: 'Adoracija', start: '2026-01-28T19:00:00', end: '2026-01-28T20:00:00' },
  { title: 'Adoracija', start: '2026-01-29T19:00:00', end: '2026-01-29T20:00:00' },
  { title: 'Adoracija', start: '2026-01-30T19:00:00', end: '2026-01-30T20:00:00' },
  { title: 'Adoracija', start: '2026-01-31T19:00:00', end: '2026-01-31T20:00:00' },
];

export default function CalendarSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="calendar" ref={ref} className="relative py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6">
            Urnik adoracije
          </h2>
          <p className="text-xl text-navy/60 max-w-2xl mx-auto">
            Pridruži se nam v molitvi pred Najsvetejšim
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: Clock,
                title: 'Urnik',
                description: 'Adoracija poteka vsak dan od 19:00 do 20:00',
                color: 'from-gold/20 to-gold/5',
              },
              {
                icon: MapPin,
                title: 'Lokacija',
                description: 'Cerkev v vaši župniji - preverite svoj urnik',
                color: 'from-navy/20 to-navy/5',
              },
              {
                icon: CalendarIcon,
                title: 'Prijava',
                description: 'Pridruži se rednemu urniku adoracije',
                color: 'from-gold/20 to-gold/5',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl border border-navy/10 hover:border-gold/50 transition-colors`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 border border-navy/10"
          >
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin, listPlugin]}
              initialView="timeGridWeek"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridWeek,listWeek',
              }}
              slotMinTime="19:00:00"
              slotMaxTime="21:00:00"
              allDaySlot={false}
              events={events}
              height="auto"
              locale="sl"
              buttonText={{
                today: 'Danes',
                week: 'Teden',
                list: 'Seznam',
              }}
              eventColor="#D4AF37"
              eventTextColor="#0F172A"
              nowIndicator={true}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-navy/60">
            Urnik se lahko spremeni. Za več informacij kontaktirajte vašo župnijo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
