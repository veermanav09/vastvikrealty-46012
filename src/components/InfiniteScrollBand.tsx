import { useState, useEffect } from "react";

const InfiniteScrollBand = () => {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to viewport width (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      setMouseX(x);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const text = "Welcome to Vastvik Realty";
  const repeatedText = Array(20).fill(text).join(" • ");

  return (
    <div className="relative w-full py-8 bg-primary overflow-hidden border-y border-white/10">
      {/* 3D depth effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div 
        className="whitespace-nowrap inline-block scroll-band"
        style={{
          transform: `translateX(calc(-50% + ${mouseX * 100}px))`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <span className="text-6xl md:text-8xl font-heading font-bold text-white/90 tracking-wider inline-block band-text">
          {repeatedText}
        </span>
        <span className="text-6xl md:text-8xl font-heading font-bold text-white/90 tracking-wider inline-block band-text">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default InfiniteScrollBand;
