import React, { Suspense } from 'react';
import { HeroSection } from '@/components/layout/HeroSection';

export default function HomePage() {
  return (
      <div className="container mx-auto max-w-4xl">
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center font-pixel text-retro-gray">
            INITIALIZING SYSTEM...
          </div>
        }>
          <HeroSection />
        </Suspense>
      </div>
  );
}