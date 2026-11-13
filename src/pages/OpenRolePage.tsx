import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenRoleSection from '../components/OpenRoleSection';
import ApplicationSection from '../components/ApplicationSection';

export default function OpenRolePage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <OpenRoleSection />
        <ApplicationSection />
      </main>
      <Footer />
    </>
  );
}
