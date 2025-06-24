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

      {/* This section has a light background, so the nav should have dark text */}
      <section
        id="designs"
        data-theme="light"
        className="relative h-screen w-full bg-coastal-linen flex items-center justify-center"
      >
        <h2 className="text-5xl text-coastal-clay" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          قسم تصاميمنا
        </h2>
      </section>

      {/* Dark background section */}
      <section
        id="about"
        data-theme="light"
        className="relative h-screen w-full bg-seaside-aloe flex items-center justify-center"
      >
        <h2 className="text-5xl text-coastal-clay" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          قسم من نحن
        </h2>
      </section>

      {/* Dark background section */}
      <section
        id="why-us"
        data-theme="light"
        className="relative h-screen w-full bg-coastal-clay flex items-center justify-center"
      >
        <h2 className="text-5xl text-coastal-clay" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          قسم لماذا نحن
        </h2>
      </section>
    </>
  );
}
