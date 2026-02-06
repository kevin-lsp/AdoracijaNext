import monstranceImage from "@/assets/monstrance-hero.jpg";
import Navigation from "@/components/Navigation";

const Hero = () => {
  return (
    <section className="relative min-h-[50vh] flex justify-center overflow-hidden bg-gradient-to-b from-sacred-cream to-background">
      <Navigation />
      <div className="absolute inset-0 opacity-30">
        <img src={monstranceImage} alt="Monstrance" className="w-full h-full object-cover object-left" />
      </div>

      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block p-1 bg-gradient-to-r from-sacred-gold via-sacred-gold-light to-sacred-gold rounded-full mb-4">
            <div className="bg-background px-6 py-1 rounded-full">
              <span className="text-sacred-gold font-bold tracking-wider text-base">✝ ADORACIJA ✝</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-cormorant font-extrabold text-black tracking-tight">
            ADORAMUS DOMINUM
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
