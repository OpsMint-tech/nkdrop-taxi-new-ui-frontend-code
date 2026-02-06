import React from 'react';
import Reveal from './Reveal';

const OurServices = () => {
  const services = [
    {
      title: "DROP TAXI",
      description: "Affordable one-way rides where you pay only for the distance you travel.",
      image: "/images/droptaxi.png"
    },
    {
      title: "LOCAL RENTALS",
      description: "Convenient hourly rentals for city travel, errands, and daily needs.",
      image: "/images/localrent.png"
    },
    {
      title: "AIRPORT TRANSFERS",
      description: "Safe, reliable, and punctual airport pickup and drop services.",
      image: "/images/alltamilnadutrip.png"
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Section */}
        <Reveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              {/* Three Slanted Lines Icon */}
              <div className="flex gap-1">
                <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
              </div>
              <span className="text-[#E18B1C] font-bold tracking-[0.15em] text-sm uppercase">
                Services We Offer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 capitalize leading-tight font-['Nunito',sans-serif]">
              Book Your Taxi From Anywhere Today
            </h2>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative group mb-12">
                {/* Image Container - Overflow Hidden for Zoom Effect */}
                <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg relative z-0">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content Box - Hanging/Overlapping */}
                <div className="absolute left-4 right-4 -bottom-12 md:left-6 md:right-6 md:-bottom-16 bg-white p-6 rounded-lg shadow-xl border-b-[4px] border-[#E18B1C] z-10 transition-transform duration-300 transform group-hover:-translate-y-2 text-center">
                  <h3 className="text-lg font-bold text-[#E18B1C] uppercase mb-2 tracking-wide font-['Nunito',sans-serif]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;