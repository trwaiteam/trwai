import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Services } from '../components/Services';
import Spline from '@splinetool/react-spline';

export function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        <Header />
        {/* Hero section with Spline animation */}
        <div className="relative">
          {/* Spline Animation Background - Only visible within hero */}
          <div className="absolute inset-0">
            <Spline scene="/src/nexbot_robot_character_concept.spline" />
          </div>
          <Hero />
        </div>
        <div className="relative bg-black">
          <Features />
          <Services />
        </div>
      </div>
    </div>
  );
}