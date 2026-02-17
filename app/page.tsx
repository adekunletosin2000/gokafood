import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; // Now positioned immediately after Hero
import MenuPreview from '@/components/MenuPreview';
import MobileProcess from '@/components/MobileProcess';
import FranchiseSection from '@/components/FranchiseSection';
import AmbassadorSection from '@/components/AmbassadorSection';
import ContactSection from '@/components/ContactSection'; // Integrated for easy reach
import Footer from '@/components/Footer';
import MobileTabNav from '@/components/MobileTabNav';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <main className="relative bg-white overflow-x-hidden min-h-screen">
      {/* 1. STATIONARY UI ELEMENTS */}
      <Navbar />
      <ScrollToTop /> 

      {/* 2. HOME (HERO) SECTION */}
      {/* Ensure this component has id="home" for the Navbar links */}
      <HeroSection />

      {/* 3. ABOUT US (MISSION & VALUES) */}
      {/* Moved here to immediately follow the Hero */}
      <AboutSection />

      {/* 4. OPERATIONAL FLOW */}
      <MobileProcess />

      {/* 5. PRODUCT SHOWCASE */}
      <MenuPreview />

      {/* 6. EXPANSION & COMMUNITY */}
      <FranchiseSection />
      <AmbassadorSection />

      {/* 7. CONTACT US */}
      {/* Positioned before the footer for final conversion */}
      <ContactSection />

      {/* 8. FOOTER & NAVIGATION */}
      <Footer />
      <MobileTabNav />
    </main>
  );
}