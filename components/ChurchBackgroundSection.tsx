'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface ChurchBackgroundSectionProps {
  children: ReactNode;
}

export default function ChurchBackgroundSection({
  children
}: ChurchBackgroundSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Unified Church Background - 35% opacity for visibility */}
      <div className="absolute inset-0">
        <Image
          src="/images/church-interior-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-35"
          priority
        />
      </div>

      {/* Three-Zone Gradient: Dark top → Transparent middle → Subtle bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-transparent to-navy/20" />

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
