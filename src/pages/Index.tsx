import React from "react";
import Hero from "@/components/home/Hero";
import LogoCloud from "@/components/home/LogoCloud";
import Products from "@/components/home/Products";
import UseCases from "@/components/home/UseCases";
import Testimonials from "@/components/home/Testimonials";
import Challenges from "@/components/home/Challenges";
import HowItWorks from "@/components/home/HowItWorks";
import Contact from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisitorNotifications from "@/components/VisitorNotifications";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <Products />
        <Challenges />
        <UseCases />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <VisitorNotifications />
    </div>
  );
};

export default Index;
