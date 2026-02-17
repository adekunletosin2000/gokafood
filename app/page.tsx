import Navbar from '@/components/Navbar';
import MenuPreview from '@/components/MenuPreview';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import PartnerSection from '@/components/PartnerSection';
import PartnerOnboarding from '@/components/PartnerOnboarding';
import AmbassadorSection from '@/components/AmbassadorSection';
import FranchiseSection from '@/components/FranchiseSection';
import ContactSection from '@/components/ContactSection';
import MobileTabNav from '@/components/MobileTabNav';
import MobileProcess from '@/components/MobileProcess';
import SmartDownloadButton from '@/components/SmartDownloadButton';
import ScrollToTop from '@/components/ScrollToTop';
import { Reveal } from '@/components/Reveal';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-hidden min-h-screen">
      {/* 1. PREMIUM NAVIGATION & UTILITIES */}
      <Navbar />
      <ScrollToTop /> {/* Floating helper for long mobile scrolls */}

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-16 px-6 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal width="100%">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-block px-4 py-1.5 bg-orange-50 text-goka-orange rounded-full text-sm font-bold tracking-wide uppercase">
                🚀 Fast & Reliable Delivery
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-goka-dark leading-[1.05] tracking-tighter">
                Quick & <span className="text-goka-orange">Fastest</span> <br className="hidden md:block" />
                Food Delivery.
              </h1>
              <p className="text-goka-gray text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Create and order your food in the fastest way possible. Supporting local eateries like 
                Jollof Fried Rice and Egusi Soup.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <SmartDownloadButton />
                <button className="bg-white text-goka-dark border-2 border-gray-100 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all active:scale-95">
                  View Local Menu
                </button>
              </div>
            </div>
          </Reveal>

          {/* Hero Illustration */}
          <Reveal width="100%">
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-125 aspect-square">
                <img 
                  src="/delivery-man.png" 
                  alt="GokaFood Delivery Man" 
                  className="w-full h-auto object-contain z-10 relative drop-shadow-2xl animate-float"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-orange-50 rounded-full z-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. MOBILE PROCESS - Optimized for 95% mobile users */}
      <MobileProcess />

      {/* NEW: ABOUT SECTION */}
      <AboutSection />

      {/* 4. MENU PREVIEW - Features ₦4000 Jollof/Egusi */}
      <Reveal width="100%">
        <MenuPreview />
      </Reveal>

      {/* 5. FRANCHISE SECTION */}
      <Reveal width="100%">
        <FranchiseSection />
      </Reveal>

      {/* 6. CAMPUS AMBASSADOR SECTION */}
      <Reveal width="100%">
        <AmbassadorSection />
      </Reveal>

      {/* 7. PARTNER SECTIONS */}
      <Reveal width="100%">
        <PartnerSection />
      </Reveal>
      <Reveal width="100%">
        <PartnerOnboarding />
      </Reveal>

      {/* 8. CONTACT SECTION */}
      <Reveal width="100%">
        <ContactSection />
      </Reveal>

      {/* 9. APP DOWNLOAD SECTION */}
      <section id="download-qr">
        <DownloadSection />
      </section>

      {/* 10. FOOTER - Kept outside Reveal to ensure it triggers at page end */}
      <Footer />

      {/* 11. MOBILE BOTTOM TAB NAV - Fixed at very bottom */}
      <MobileTabNav />
    </main>
  );
}