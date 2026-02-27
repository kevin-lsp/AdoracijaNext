'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupFormData } from '@/lib/validations/signup';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Napaka pri pošiljanju prijave');
      }

      setSubmitStatus('success');
      reset();

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Napaka pri pošiljanju prijave');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      reset();
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  // Close on Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !isSubmitting) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-50"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-2xl shadow-3xl max-w-lg w-full p-8 relative"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onKeyDown={handleKeyDown}
              role="dialog"
              aria-modal="true"
              aria-labelledby="signup-modal-title"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 text-navy/60 hover:text-navy transition-colors disabled:opacity-50"
                aria-label="Zapri"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Success State */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                    Uspešno poslano!
                  </h3>
                  <p className="text-navy/80 font-inter">
                    Hvala za vašo prijavo. Kmalu vas bomo kontaktirali.
                  </p>
                </motion.div>
              )}

              {/* Form State */}
              {submitStatus !== 'success' && (
                <>
                  {/* Header */}
                  <div className="mb-6">
                    <h2
                      id="signup-modal-title"
                      className="text-2xl font-playfair font-bold text-navy mb-2"
                    >
                      Prijava za adoracijo
                    </h2>
                    <div className="w-16 h-0.5 bg-gold mb-4" />
                    <p className="text-sm text-navy/70 font-inter">
                      Izpolnite obrazec za prijavo kot stalni častilec
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* First Name */}
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-inter font-medium text-navy mb-2"
                      >
                        Ime *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('firstName')}
                          id="firstName"
                          type="text"
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border-2 border-navy/20 rounded-lg font-inter text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                          placeholder="Vnesite ime"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-600 text-xs mt-1 font-inter">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-inter font-medium text-navy mb-2"
                      >
                        Priimek *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('lastName')}
                          id="lastName"
                          type="text"
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border-2 border-navy/20 rounded-lg font-inter text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                          placeholder="Vnesite priimek"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-600 text-xs mt-1 font-inter">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-inter font-medium text-navy mb-2"
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('email')}
                          id="email"
                          type="email"
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border-2 border-navy/20 rounded-lg font-inter text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                          placeholder="vas.email@primer.si"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 font-inter">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-inter font-medium text-navy mb-2"
                      >
                        Telefon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-navy/40" />
                        <input
                          {...register('phone')}
                          id="phone"
                          type="tel"
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border-2 border-navy/20 rounded-lg font-inter text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none transition-colors disabled:opacity-50"
                          placeholder="041 234 567"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 font-inter">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* Message (optional) */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-inter font-medium text-navy mb-2"
                      >
                        Sporočilo (neobvezno)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-navy/40" />
                        <textarea
                          {...register('message')}
                          id="message"
                          disabled={isSubmitting}
                          rows={3}
                          className="w-full pl-11 pr-4 py-3 border-2 border-navy/20 rounded-lg font-inter text-navy placeholder:text-navy/40 focus:border-gold focus:outline-none transition-colors resize-none disabled:opacity-50"
                          placeholder="Dodatne informacije ali želje"
                        />
                      </div>
                      {errors.message && (
                        <p className="text-red-600 text-xs mt-1 font-inter">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-red-600 font-inter">{errorMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gold hover:bg-gold-dark text-navy font-inter font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Pošiljanje...' : 'Pošlji prijavo'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignupModal;
