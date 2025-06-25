import AboutAndWhyUsSections from '@/components/AboutAndWhyUsSections';
import DesignsSection from '@/components/DesignsSection';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero doesn't need a theme, it will use the default 'dark' theme */}
      <Hero />

      <section data-theme="light">
        <div
          className="relative h-[500px] w-full bg-gradient-to-b from-white to-[#ebebeb]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        />
      </section>

      {/* Main content has a dark background, so the nav should have light text */}
      <section id="home" data-theme="light">
        <MainContent />
      </section>

      <section data-theme="light">
        <div
          className="relative h-[100px] w-full bg-gradient-to-b from-[#ebebeb] to-white"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        />
      </section>

      <DesignsSection />

      <section data-theme="light">
        <div
          className="relative h-[100px] w-full bg-gradient-to-b from-[#ebebeb] to-white"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          }}
        />
      </section>

      <AboutAndWhyUsSections />

    </>
  );
}
