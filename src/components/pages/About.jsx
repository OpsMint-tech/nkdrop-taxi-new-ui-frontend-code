import React from 'react';
import { FaCheckCircle, FaTaxi, FaCalendarAlt, FaCheck, FaRoad } from "react-icons/fa";
import WhatsAppButton from '../WhatsappButton';
import Reveal from '../Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUs = () => {
  const steps = [
    {
      number: "01",
      title: "Choose A Car",
      description: "Select from our premium fleet of well-maintained vehicles",
      icon: <FaTaxi className="text-[#E18B1C] text-2xl" />
    },
    {
      number: "02",
      title: "Pick Up Date",
      description: "Schedule your pickup at your preferred date and time",
      icon: <FaCalendarAlt className="text-[#E18B1C] text-2xl" />
    },
    {
      number: "03",
      title: "Confirm Booking",
      description: "Verify your trip details and payment information",
      icon: <FaCheck className="text-[#E18B1C] text-2xl" />
    },
    {
      number: "04",
      title: "Enjoy Driving",
      description: "Experience a comfortable and safe journey with us",
      icon: <FaRoad className="text-[#E18B1C] text-2xl" />
    },
  ];

  return (
    <div className="font-sans">
      {/* Redesigned Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-105 "
          style={{ backgroundImage: "url('/images/services.png')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-12">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Nunito',sans-serif] tracking-tight">
              About Us
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-xl text-white font-medium max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-lg">
              Your Trusted Partner For Safe, Reliable, And Comfortable Transportation
            </p>
          </Reveal>
        </div>

        {/* Floating Car Image */}
        <div className="absolute bottom-0  lg:top-[89px] right-0 z-30 w-[70%] md:w-[55%] lg:w-[50%] max-w-[800px] pointer-events-none ">
          <Reveal delay={0.4} direction="up">
            <img
              src="/images/aboutcar.png"
              alt="Luxury Car"
              className="w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)]"
            />
          </Reveal>
        </div>
      </section>

      {/* nk drop taxi */}
      <section className="w-full py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Content */}
            <div className="w-full lg:w-1/2">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                  {/* Slanted Lines Icon */}
                  <div className="flex gap-1">
                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                  </div>
                  <span className="text-[#E18B1C] font-bold tracking-widest text-sm uppercase">
                    ABOUT US
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Nunito',sans-serif]">
                  NK Drop Taxi
                </h2>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <ul className="space-y-4 mb-8">
                  {[
                    "Local Market Expertise",
                    "Personalized Rental and Renovation Plan",
                    "End-to-End Property Solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                      <span className="text-gray-700 font-bold text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Join us in redefining luxury travel in Dubai with Staycia. Discover a new level of comfort,
                  convenience, and sophistication.
                </p>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <Reveal delay={0.2}>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/caroctavia.png"
                    alt="NK Drop Taxi Octavia"
                    className="w-full h-[70vh] object-cover"
                  />
                </div>

                {/* Decorative Circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[3px] border-[#E18B1C] border-dashed rounded-full z-0 opacity-80 hidden md:block"></div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>



      {/* Stats Banner */}
      <section className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center " style={{ backgroundImage: "url('/images/cars.png')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute -bottom-16 left-0 right-0 z-20 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-full md:w-80 border-b-4 border-[#E18B1C]">
              <h3 className="text-xl md:text-2xl font-bold text-[#E18B1C] mb-2">24/7 Service</h3>
              <p className="text-gray-600 font-medium">Always available when you need us</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-full md:w-80 border-b-4 border-[#E18B1C]">
              <h3 className="text-xl md:text-2xl font-bold text-[#E18B1C] mb-2">500+ Trips</h3>
              <p className="text-gray-600 font-medium">Completed successfully every month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Image (Octavia) */}
            <div className="w-full lg:w-1/2 relative">
              <Reveal>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img src="/images/caroctavia.png" alt="Octavia" className="w-full h-auto object-cover" />
                </div>
                {/* Dashed Circle Decoration */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border-[3px] border-[#E18B1C] border-dashed rounded-full z-0 opacity-80 hidden md:block"></div>
              </Reveal>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <Reveal delay={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-['Nunito',sans-serif]">Who We Are</h2>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  NK Drop Taxi is a premier taxi service revolutionizing urban mobility since 2015. What began as a modest fleet has blossomed into one of the most trusted transportation networks in the region.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "200+ professional drivers serving 24/7",
                    "5,000+ satisfied customers monthly",
                    "99.7% on-time arrival guarantee",
                    "Coverage across Tamil Nadu and neighboring states"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2"></span>
                      <span className="text-gray-700 font-bold text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="bg-[#B27E36] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-[#8f642b] transition-colors shadow-md">
                  Learn More About Us
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full bg-[#FFF0DD] py-24 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex gap-1 text-[#E18B1C]">
                  <div className="w-[4px] h-4 bg-current -skew-x-[20deg]"></div>
                  <div className="w-[4px] h-4 bg-current -skew-x-[20deg]"></div>
                  <div className="w-[4px] h-4 bg-current -skew-x-[20deg]"></div>
                </div>
                <span className="text-[#E18B1C] font-bold tracking-widest text-sm uppercase">
                  OUR PROCESS
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-['Nunito',sans-serif]">
                Easy Steps To Book Your Ride
              </h2>
            </Reveal>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-12 rounded-lg flex flex-col bg-white items-center text-center relative group ${index !== steps.length - 1 ? 'lg:border-r border-gray-100' : ''
                  } ${index < 2 ? 'md:border-b lg:border-b-0' : 'border-b lg:border-b-0'} last:border-b-0`}
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full border-2 border-[#E18B1C] bg-white flex items-center justify-center mb-8 shadow-sm transform group-hover:scale-105 transition-all duration-300">
                  <div className="text-3xl">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 font-['Nunito',sans-serif]">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="bg-gray-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="lg:w-1/2 w-full">
            <span className="text-sm uppercase tracking-wide text-primary-600 font-semibold mb-2 inline-block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug mb-6">
              We Provide Exceptional Service With Our Experience
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our commitment to excellence has made us a preferred choice for thousands of customers who value reliability, comfort, and professional service.
            </p>

           
            <ul className="space-y-5 mb-8">
              {[
                "All Type Vehicles Available",
                "24/7 Roadside Assistance",
                "Experienced and Verified Drivers",
                "Competitive Pricing",
                "Real-time Trip Tracking"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <button className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition duration-300 shadow-md">
              Contact Us Today
            </button>
          </div>

         
          <div className="relative lg:w-1/2 w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/Innova_Right.png"
              alt="About Car"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
           
            <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
              <div className="text-4xl font-bold text-primary-600">8+</div>
              <div className="text-sm text-gray-600">
                <div className="font-semibold">Years of</div>
                <div>Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;