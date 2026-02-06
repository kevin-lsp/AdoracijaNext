import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CalendarSection from "@/components/CalendarSection";
import AboutSection from "@/components/AboutSection";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <CalendarSection />
      <AboutSection />
      <SignupForm />
      <Footer />
    </div>
  );
};

export default Index;
