import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewHero from "@/components/home/NewHero";

const NewDesign = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NewHero />
        {/* Other sections can be added here */}
      </main>
      <Footer />
    </div>
  );
};

export default NewDesign; 