'use client';

import { Heart, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-gold mb-4 italic">
              Adoramus Dominum
            </h3>
            <p className="text-cream/80 leading-relaxed mb-4">
              Evharistična adoracija v Sloveniji. Pridruži se tihemu češčenju Najsvetejšega in odkrij moč molitve.
            </p>
            <p className="text-cream/60 italic flex items-center gap-2">
              <Heart className="w-4 h-4 text-gold" />
              Srce govori srcu
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold text-gold mb-6">
              Povezave
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  O adoraciji
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('how-to')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Kako pristopiti
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonies')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Besede svetnikov
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calendar')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Urnik
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('signup')}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  Pridruži se
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl font-bold text-gold mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream/80">
                    <a href="tel:+38641601854" className="hover:text-gold transition-colors">
                      041 601 854
                    </a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-cream/80">
                    <a href="mailto:info@adoramus.si" className="hover:text-gold transition-colors">
                      info@adoramus.si
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-cream/60">
            © {new Date().getFullYear()} Adoramus Dominum. Ker molitev spreminja.
          </p>
        </div>
      </div>
    </footer>
  );
}
