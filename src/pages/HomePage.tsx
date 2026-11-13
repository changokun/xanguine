import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ScaleSection from '../components/ScaleSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ScaleSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
