import DioceseFlags from "./DioceseFlags";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Diocese Flags */}
      <DioceseFlags />

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/adoration-hero.jpg"
          alt="Sacred monstrance with the Blessed Sacrament radiating divine light"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/5 to-navy/80" />
      </div>

      {/* Divine light glow effect */}
      <div className="absolute inset-0 divine-glow" />

      {/* Main Title - Centered */}
      <div className="relative z-10 flex-1 flex items-start justify-center text-center px-4 pt-32 md:pt-40">
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

      {/* Poetry Quote - Bottom Center */}
      <div className="relative z-10 text-center pb-12 md:pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p
            className="font-display text-lg md:text-xl lg:text-2xl text-white italic leading-relaxed mb-3"
            style={{
              textShadow: `
                -1px -1px 0 rgba(0,0,0,0.9),
                1px -1px 0 rgba(0,0,0,0.9),
                -1px 1px 0 rgba(0,0,0,0.9),
                1px 1px 0 rgba(0,0,0,0.9),
                0 2px 8px rgba(0,0,0,0.7)
              `,
            }}
          >
            Drhteč v veselju legam na oči,
            <br />
            neznana topla slast mi kri prevzema,
            <br />
            nebom izvil se iz božjega objema,
            <br />
            zato blagoslovljena kri kipi.
          </p>
          <p
            className="font-display text-base md:text-lg text-white/90 italic"
            style={{
              textShadow: `
                -1px -1px 0 rgba(0,0,0,0.9),
                1px -1px 0 rgba(0,0,0,0.9),
                -1px 1px 0 rgba(0,0,0,0.9),
                1px 1px 0 rgba(0,0,0,0.9),
                0 2px 6px rgba(0,0,0,0.6)
              `,
            }}
          >
            (F. Balantič: Sonetni venec)
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
