import adorationHero from "@/assets/adoration-hero.jpg";
import TopNavigation from "@/components/TopNavigation";
import DioceseFlags from "@/components/DioceseFlags";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <TopNavigation />

      {/* Diocese Flags - Bottom */}
      <DioceseFlags />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={adorationHero}
          alt="Sacred monstrance with the Blessed Sacrament radiating divine light"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/5 to-navy/70" />
      </div>

      {/* Divine light glow effect */}
      <div className="absolute inset-0 divine-glow" />

      {/* Top Content - Title and Subtitle */}
      <div className="relative z-10 text-center pt-20">
        {/* Subtitle */}
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-gold italic mb-4 animate-fade-up-delay drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          "Ker molitev spreminja."
        </p>

        {/* Main Heading */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white animate-fade-up tracking-wide italic"
          style={{
            textShadow: `
              -2px -2px 0 rgba(0,0,0,0.8),
              2px -2px 0 rgba(0,0,0,0.8),
              -2px 2px 0 rgba(0,0,0,0.8),
              2px 2px 0 rgba(0,0,0,0.8),
              0 4px 12px rgba(0,0,0,0.8)
            `,
          }}
        >
          Adoramus Dominum
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
