import { useState, useEffect } from "react";

const InfiniteScrollBand = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const text = "Welcome to Vastvik Realty";
  const repeatedText = Array(10).fill(text).join(" • ");
  
  // Calculate scroll direction and translation (right when scrolling down, left when scrolling up)
  const isScrollingDown = scrollY > lastScrollY;
  const translateX = isScrollingDown ? scrollY * 0.1 : -scrollY * 0.1;

  return (
    <div className="relative w-full py-8 bg-primary overflow-hidden border-y border-white/10">
      {/* 3D depth effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      
      <div 
        className="whitespace-nowrap inline-block"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: 'transform 1.2s ease-out',
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
