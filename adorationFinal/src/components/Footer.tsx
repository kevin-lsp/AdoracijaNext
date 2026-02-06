const Footer = () => {
  return (
    <footer id="contact" className="bg-sacred-shadow text-sacred-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-sacred-gold font-bold text-xl mb-4">Adoramus Dominum</h3>
              <p className="text-sm text-sacred-cream/80">
                Vsakodnevno evharistično češčenje v ljubezni in molitvi
              </p>
            </div>

            <div>
              <h4 className="text-sacred-gold font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-sm text-sacred-cream/80">
                <p>📞 041 601 854</p>
                <p>✉️ adoracija.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-sacred-gold font-semibold mb-4">Povezave</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sacred-cream/80 hover:text-sacred-gold transition-colors"
                >
                  Domov
                </button>
                <button 
                  onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sacred-cream/80 hover:text-sacred-gold transition-colors"
                >
                  Urnik
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-sacred-cream/80 hover:text-sacred-gold transition-colors"
                >
                  O Adoraciji
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-sacred-cream/20 pt-8 text-center">
            <p className="text-sm text-sacred-cream/60">
              © {new Date().getFullYear()} Adoramus Dominum. Vse pravice pridržane.
            </p>
            <p className="text-xs text-sacred-cream/50 mt-2 italic">
              "Srce govori srcu"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
