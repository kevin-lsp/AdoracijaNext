'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, type SignupFormData } from '@/lib/validations/signup';
import { Send, CheckCircle, Mail, Phone, User } from 'lucide-react';
import Image from 'next/image';

const dioceses = [
  { value: 'LJUBLJANA', label: 'Ljubljana' },
  { value: 'MARIBOR', label: 'Maribor' },
  { value: 'CELJE', label: 'Celje' },
  { value: 'KOPER', label: 'Koper' },
  { value: 'NOVO_MESTO', label: 'Novo Mesto' },
  { value: 'MURSKA_SOBOTA', label: 'Murska Sobota' },
];

export default function SignupSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" ref={ref} className="py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* White Container Box */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-navy/10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-navy mb-6">
              Pridruži se
            </h2>
            <p className="text-xl text-navy/60 max-w-2xl mx-auto">
              Postani del skupnosti evharistične adoracije
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-4xl font-bold text-navy mb-6">
                Zakaj se pridružiti?
              </h3>
              <div className="space-y-4">
                {[
                  'Postani del skupnosti molitve',
                  'Prejmi redne obvestila o adoraciji',
                  'Izberi svoj urnik adoracije',
                  'Poglabljaj svojo duhovno pot',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-gold flex-shrink-0" />
                    <p className="text-lg text-navy/80">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-navy/95 backdrop-blur-md p-8 rounded-2xl text-white shadow-2xl border border-white/10">
              <h4 className="font-display text-2xl font-bold mb-4">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <a href="tel:+38641601854" className="hover:text-gold transition-colors">
                    041 601 854
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a href="mailto:info@adoramus.si" className="hover:text-gold transition-colors">
                    info@adoramus.si
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-3xl shadow-2xl p-12 text-center"
              >
                <CheckCircle className="w-20 h-20 text-gold mx-auto mb-6" />
                <h3 className="font-display text-3xl font-bold text-navy mb-4">
                  Hvala za prijavo!
                </h3>
                <p className="text-lg text-navy/70">
                  Kmalu te bomo kontaktirali z več informacijami.
                </p>
              </motion.div>
            ) : (
              <div className="bg-white rounded-3xl shadow-3xl p-8 lg:p-10 border border-navy/10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Ime *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('firstName')}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors"
                          placeholder="Janez"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Priimek *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('lastName')}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors"
                          placeholder="Novak"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      E-pošta *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                      <input
                        type="email"
                        {...register('email')}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors"
                        placeholder="janez.novak@email.si"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                      <input
                        type="tel"
                        {...register('phone')}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors"
                        placeholder="041 234 567"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Diocese */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Škofija
                    </label>
                    <select
                      {...register('diocese')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Izberi škofijo...</option>
                      {dioceses.map((diocese) => (
                        <option key={diocese.value} value={diocese.value}>
                          {diocese.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Sporočilo (opcijsko)
                    </label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-navy/10 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Povej nam kaj več..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Pošiljanje...</span>
                    ) : (
                      <>
                        <span>Prijavi se</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-sm text-navy/60">
                    * Obvezna polja
                  </p>
                </form>
              </div>
            )}
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
