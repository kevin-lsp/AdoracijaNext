import HeroSection from '@/components/HeroSection';
import AboutMain from '@/components/AboutMain';
import Footer from '@/components/Footer';
import ChurchBackgroundSection from '@/components/ChurchBackgroundSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ChurchBackgroundSection>
        <AboutMain />
      </ChurchBackgroundSection>
      <Footer />
    </main>
  );
}
