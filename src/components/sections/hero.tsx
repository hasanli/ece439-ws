"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

interface PinwheelProps extends React.SVGProps<SVGSVGElement> {
  rotation: number;
}

const Pinwheel = ({ rotation, ...props }: PinwheelProps) => (
  <svg viewBox="0 0 100 100" {...props}>
    <defs>
      <linearGradient id="pink-grad-hero" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFC0CB" />
        <stop offset="100%" stopColor="#F08080" />
      </linearGradient>
      <linearGradient id="blue-grad-hero" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ADD8E6" />
        <stop offset="100%" stopColor="#87CEEB" />
      </linearGradient>
    </defs>
    
    <g style={{ transform: `translate(50px, 50px) rotate(${rotation}deg)` }}>
      <path d="M0 0 C 20 -20, 40 -20, 50 0 L 0 0 Z" fill="url(#pink-grad-hero)" transform="rotate(0)" />
      <path d="M0 0 C 20 -20, 40 -20, 50 0 L 0 0 Z" fill="url(#blue-grad-hero)" transform="rotate(90)" />
      <path d="M0 0 C 20 -20, 40 -20, 50 0 L 0 0 Z" fill="url(#pink-grad-hero)" transform="rotate(180)" />
      <path d="M0 0 C 20 -20, 40 -20, 50 0 L 0 0 Z" fill="url(#blue-grad-hero)" transform="rotate(270)" />
    </g>
    
    <circle cx="50" cy="50" r="5" fill="white" stroke="#ccc" strokeWidth="1"/>
  </svg>
);

export default function HeroSection() {
  const [rotation, setRotation] = useState(15);

  useEffect(() => {
    const handleScroll = () => {
      // Rotate based on scroll position, the '15' is the initial rotation offset
      const newRotation = 15 + window.scrollY * 0.2;
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 relative">
      <div className="absolute inset-0 bg-secondary opacity-50"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Beyond Pink & Blue
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                An exploration into how popular kids' YouTube channels shape gender perceptions in early childhood. Our project analyzes the subtle messages in the content they love.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#findings">
                  Explore Our Findings
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-8">
             <Pinwheel rotation={rotation} className="w-full h-full max-w-[400px] aspect-square drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
