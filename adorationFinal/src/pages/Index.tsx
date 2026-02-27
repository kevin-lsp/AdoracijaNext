import HeroSection from "@/components/HeroSection";
import AboutMain from "@/components/AboutMain";
import DioceseFlags from "@/components/DioceseFlags";
import churchInteriorBg from "@/assets/church-interior-bg.jpg";

const Index = () => {
  return (
    <div id="home" className="min-h-screen relative">
      {/* Fixed church interior background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${churchInteriorBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <HeroSection />
      <AboutMain />
      <DioceseFlags />
    </div>
  );
};

export default Index;
