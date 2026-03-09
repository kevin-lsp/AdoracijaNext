import HeroSection from '@/components/HeroSection';
import AboutMain from '@/components/AboutMain';
import Footer from '@/components/Footer';
import ChurchBackgroundSection from '@/components/ChurchBackgroundSection';

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <HeroSection />
      <ChurchBackgroundSection>
        <AboutMain />
      </ChurchBackgroundSection>
      <Footer />
    </main>
  );
}
