
import React from 'react';
import Hero from '../components/Hero';
import FeatureHighlights from '../components/FeatureHighlights';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-white to-serenity-50">
      <Hero />
      <FeatureHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
