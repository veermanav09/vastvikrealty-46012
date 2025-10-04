import { useState, useEffect, useRef } from "react";

const InfiniteScrollBand = () => {
  const [translateX, setTranslateX] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;
      
      // Move left to right when scrolling down (positive delta)
      // Move right to left when scrolling up (negative delta)
      setTranslateX(prev => prev + scrollDelta * 0.5);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "Welcome to Vastvik Realty";
  const repeatedText = Array(10).fill(text).join(" • ");

  return (
    <div className="relative w-full py-8 bg-primary overflow-hidden border-y border-white/10">
      {/* 3D depth effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div 
        className="whitespace-nowrap inline-block"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 0.3s ease-out',
          width: '50%'
        }}
      >
        <span className="text-4xl md:text-5xl font-heading font-bold text-white/90 tracking-wider inline-block">
          {repeatedText}
        </span>
        <span className="text-4xl md:text-5xl font-heading font-bold text-white/90 tracking-wider inline-block">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default InfiniteScrollBand;
