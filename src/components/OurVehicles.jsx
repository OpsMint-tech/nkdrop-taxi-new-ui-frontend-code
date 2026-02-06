import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import VehicleCard from './VehicleCard';
import Reveal from './Reveal';
import Booknow from '../../public/images/booknow.png'

const cars = [
  {
    name: 'Innova',
    image: '/images/Innova_Right.png',
    seat: '7+1',
    type: 'INNOVA',
    oneWayPrice: 20,
    roundTripPrice: 19,
    ac: true,
  },
  {
    name: ' Only Etios',
    image: '/images/etios_right2.png',
    seat: '4+1',
    type: 'ETIOS',
    oneWayPrice: 15,
    roundTripPrice: 13,
    ac: true,
  },
  {
    name: 'Innova',
    image: '/images/Innova_Right.png',
    seat: '7+1',
    type: 'SUV',
    oneWayPrice: 20,
    roundTripPrice: 19,
    ac: true,
  },
  {
    name: 'Ertiga',
    image: '/images/Ertiga_left.png',
    seat: '7+1',
    type: 'SUV',
    oneWayPrice: 19,
    roundTripPrice: 18,
    ac: true,
  },
  {
    name: 'Swift',
    image: '/images/swift.png',
    seat: '4+1',
    type: 'Sedan',
    oneWayPrice: 14,
    roundTripPrice: 13,
    ac: true,
  },
  {
    name: 'XYLO',
    image: '/images/xylo.jpeg',
    seat: '7+1',
    type: 'SUV',
    oneWayPrice: 19,
    roundTripPrice: 18,
    ac: true,
  },
];

const breakpoints = [
  { width: 1024, cards: 3 },
  { width: 640, cards: 2 },
  { width: 0, cards: 1 },
];

const gap = 32;
const infiniteCars = [...cars, ...cars];

function getCardsPerView(width) {
  for (const bp of breakpoints) {
    if (width >= bp.width) return bp.cards;
  }
  return 1;
}

export default function OurVehicles() {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  const totalCards = infiniteCars.length;
  const maxIndex = cars.length;
  const autoScrollDelay = 2200;

  let cardsPerView = getCardsPerView(windowWidth);
  let cardWidth = 340;
  if (windowWidth < 1024 && windowWidth >= 640) cardWidth = 300;
  if (windowWidth < 640) cardWidth = (90 * windowWidth) / 100;
  const slideWidth = cardWidth + gap;

  const containerStyle = {
    width: `${cardsPerView * cardWidth + (cardsPerView - 1) * gap}px`,
    overflow: 'hidden',
    margin: '0 auto',
    maxWidth: '100vw',
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % maxIndex);
  };

  useEffect(() => {
    controls.start({
      x: -index * slideWidth,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    });
  }, [index, controls, slideWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % maxIndex);
    }, autoScrollDelay);
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div>

      <section className="w-full py-12 px-2 md:px-8 border-transparent
  bg-[linear-gradient(233.1deg,#CC9A5B_5.34%,#E18B1C_94.66%)]
  bg-origin-border bg-clip-padding">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-700">
              Our <span className="text-primary-600 font-bold">Vehicles</span>
            </h2>
          </Reveal>
          <div className="relative flex flex-col items-center">
            <div style={containerStyle}>
              <motion.div
                className="flex gap-8"
                animate={controls}
                style={{ width: `${slideWidth * totalCards}px` }}
              >
                {infiniteCars.map((car, i) => (
                  <div key={i} style={{ minWidth: cardWidth, maxWidth: cardWidth }}>
                    <Reveal delay={(i % cardsPerView) * 0.05}>
                      <VehicleCard {...car} />
                    </Reveal>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="border-2 border-primary-500 text-primary-500 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-primary-50 transition"
                aria-label="Previous"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="border-2 border-primary-500 text-primary-500 rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-primary-50 transition"
                aria-label="Next"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${Booknow})` }}
        />

        {/* Dark Overlay for minimal contrast if needed, though image seems dark enough */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 drop-shadow-lg">
            Special Deals Book Now
          </h2>

          <button className="bg-[#B27E36] text-white px-8 py-3 rounded text-sm md:text-base font-bold hover:bg-[#976a2d] transition-colors shadow-lg uppercase tracking-wider">
            GET UP TO 80% OFF
          </button>
        </div>
      </div>
    </div>
  );
}