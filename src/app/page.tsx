import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import FindingsSection from '@/components/sections/findings';
import ExamplesSection from '@/components/sections/examples';
import GuidanceSection from '@/components/sections/guidance';
import AdviceTool from '@/components/advice-tool';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FindingsSection />
        <ExamplesSection />
        <GuidanceSection />
        <AdviceTool />
      </main>
      <Footer />
    </div>
  );
}
