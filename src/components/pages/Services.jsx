// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';

// // Car data with complete information
// const carList = [
//   {
//     id: 1,
//     name: "Ertiga",
//     oneWay: "19 Rs/KM",
//     roundTrip: "18 Rs/KM",
//     seat: "7+1",
//     ac: true,
//     image: "/images/Ertiga_left.png",
//   },
//   {
//     id: 2,
//     name: "Etios",
//     oneWay: "15 Rs/KM",
//     roundTrip: "14 Rs/KM",
//     seat: "4+1",
//     ac: true,
//     image: "/images/etios_right2.png",

//   },
//   {
//     id: 3,
//     name: "Suv. Innova",
//     oneWay: "20 Rs/KM",
//     roundTrip: "19 Rs/KM",
//     seat: "7+1",
//     ac: true,
//     image: "/images/Innova_Right.png",
//   },
//   {
//     id: 4,
//     name: "Xylo",
//     oneWay: "19 Rs/KM",
//     roundTrip: "18 Rs/KM",
//     seat: "7+1",
//     ac: true,
//     image: "/images/xylo.jpeg",
//   },
//   {
//     id: 5,
//     name: "Swift",
//     oneWay: "14 Rs/KM",
//     roundTrip: "13 Rs/KM",
//     seat: "4+1",
//     ac: true,
//     image: "/images/swift.png",
//   },
//     {
//     id: 6,
//     name: "Innova Crysta",
//     oneWay: "20 Rs/KM",
//     roundTrip: "19 Rs/KM",
//     seat: "7+1",
//     ac: true,
//     image: "/images/crysta.jpeg",
//   },
// ];

// // Tabs and labels
// const TABS = [
//   { key: "oneWay", label: "ONE WAY TARIFF", driverBetta: 400 },
//   { key: "roundTrip", label: "ROUND TRIP TARIFF", driverBetta: 400 },
// ];

// export default function Services() {
//   const [activeTab, setActiveTab] = useState("oneWay");
//   const [selectedCar, setSelectedCar] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);

//   const currentTab = TABS.find((tab) => tab.key === activeTab);
//   const driverBetta = currentTab?.driverBetta || 400;

//     const navigate = useNavigate();

//   const handleBookNow = (car) => {
//     // setSelectedCar(car);
//     // setFormData(prev => ({
//     //   ...prev,
//     //   carType: car.name,
//     //   tripType: activeTab
//     // }));
//     // setShowBookingForm(true);
//       navigate('/#my-section');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData);
//     alert('Booking request submitted successfully! We will contact you shortly.');
//     setShowBookingForm(false);
//   };

//   return (
//     <section className="mt-24 md:mt-12 bg-gradient-to-br from-primary-50 via-white to-primary-50 py-14 md:py-18 lg:py-20 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400">
//             Our Tariff
//           </h2>
//           <p className="mt-2 text-lg text-primary-600">Transparent pricing for your journeys</p>
//           <div className="mt-4 h-1 w-20 bg-gradient-to-r from-primary-400 to-primary-200 mx-auto rounded-full"></div>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex bg-gray-50 rounded-full shadow-md p-1 border border-primary-100">
//             {TABS.map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => setActiveTab(tab.key)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeTab === tab.key
//                     ? 'bg-yellow-600 text-white shadow'
//                     : 'text-gray-600 hover:text-primary-600'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Vehicle Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {carList.map((car) => (
//             <div key={car.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100 transition-all duration-300 hover:shadow-2xl">
//               {/* Vehicle Image */}
//               <div className="h-48 bg-gray-200 overflow-hidden">
//                 <img 
//                   src={car.image} 
//                   alt={car.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Vehicle Details */}
//               <div className="p-6">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
//                   </div>
//                   <div className="bg-primary-100 text-primary-800 text-xs font-semibold px-2 py-1 rounded-full">
//                     {car.seat} seats
//                   </div>
//                 </div>

//                 {/* Pricing */}
//                 <div className="mt-4 p-4 bg-gray-50 rounded-lg">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-600 font-medium">
//                       {activeTab === "oneWay" ? "One Way" : "Round Trip"}
//                     </span>
//                     <span className="text-xl font-bold text-primary-600">
//                       {activeTab === "oneWay" ? car.oneWay : car.roundTrip}
//                     </span>
//                   </div>
//                   <div className="mt-2 text-sm text-gray-500">
//                     Driver Beta: ₹{driverBetta} 
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <button 
//                   onClick={() => handleBookNow(car)}
//                   className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Car data
// const carList = [
//   { id: 1, name: "Ertiga", oneWay: "19 Rs/KM", roundTrip: "18 Rs/KM", seat: "7+1", image: "/images/Ertiga_left.png" },
//   { id: 2, name: "Etios", oneWay: "15 Rs/KM", roundTrip: "14 Rs/KM", seat: "4+1", image: "/images/etios_right2.png" },
//   { id: 3, name: "Suv. Innova", oneWay: "20 Rs/KM", roundTrip: "19 Rs/KM", seat: "7+1", image: "/images/Innova_Right.png" },
//   { id: 4, name: "Xylo", oneWay: "19 Rs/KM", roundTrip: "18 Rs/KM", seat: "7+1", image: "/images/xylo.jpeg" },
//   { id: 5, name: "Swift", oneWay: "14 Rs/KM", roundTrip: "13 Rs/KM", seat: "4+1", image: "/images/swift.png" },
//   { id: 6, name: "Innova Crysta", oneWay: "20 Rs/KM", roundTrip: "19 Rs/KM", seat: "7+1", image: "/images/crysta.jpeg" },
// ];

// export default function Services() {
//   const [visibleCount, setVisibleCount] = useState(3);
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     navigate("/#my-section");
//   };

//   return (
//     <section className="mt-24 bg-gradient-to-br from-primary-50 via-white to-primary-50 py-14 min-h-screen" style={{ borderColor: 'rgba(255, 240, 221, 1);' }}>
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Header */}

//         <div className="text-center mb-10">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <div className="flex gap-1">
//               <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
//               <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
//               <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
//             </div>
//             <span className="text-[#E18B1C] font-bold tracking-widest text-2xl uppercase text-center">
//               Our Tariff
//             </span>
//           </div>
//           <p className="mt-2 lg:text-6xl text-2xl ">
//             Transparent pricing for your journeys
//           </p>
//         </div>

//         {/* Vehicle Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {carList.slice(0, visibleCount).map((car) => (
//             <div
//               key={car.id}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary-100 hover:shadow-2xl transition-all"
//             >
//               {/* Image */}
//               <div className="h-48 bg-gray-200">
//                 <img
//                   src={car.image}
//                   alt={car.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Details */}
//               <div className="p-6">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-xl font-bold text-gray-800">
//                     {car.name}
//                   </h3>
//                   <span className="bg-primary-100 text-xs font-semibold px-2 py-1 rounded-full">
//                     {car.seat} seats
//                   </span>
//                 </div>

//                 {/* Tariff Info */}
//                 <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
//                   <p className="text-gray-700 font-medium">
//                     One Way Tariff :
//                     <span className="font-bold text-primary-600 ml-1">
//                       {car.oneWay}
//                     </span>
//                   </p>
//                   <p className="text-gray-700 font-medium">
//                     Round Trip Tariff :
//                     <span className="font-bold text-primary-600 ml-1">
//                       {car.roundTrip}
//                     </span>
//                   </p>
//                 </div>

//                 {/* Action */}
//                 <button
//                   onClick={handleBookNow}
//                   className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-medium transition-colors"
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More */}
//         {visibleCount < carList.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={() => setVisibleCount((prev) => prev + 3)}
//               className="px-10 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-semibold"
//             >
//               View All
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reveal from '../Reveal';
// Car data
const carList = [
  { id: 1, name: "Ertiga", oneWay: "19 Rs/KM", roundTrip: "18 Rs/KM", seat: "7+1", image: "/images/Ertiga_left.png" },
  { id: 2, name: "Etios", oneWay: "15 Rs/KM", roundTrip: "14 Rs/KM", seat: "4+1", image: "/images/etios_right2.png" },
  { id: 3, name: "Suv. Innova", oneWay: "20 Rs/KM", roundTrip: "19 Rs/KM", seat: "7+1", image: "/images/Innova_Right.png" },
  { id: 4, name: "Xylo", oneWay: "19 Rs/KM", roundTrip: "18 Rs/KM", seat: "7+1", image: "/images/xylo.jpeg" },
  { id: 5, name: "Swift", oneWay: "14 Rs/KM", roundTrip: "13 Rs/KM", seat: "4+1", image: "/images/swift.png" },
  { id: 6, name: "Innova Crysta", oneWay: "20 Rs/KM", roundTrip: "19 Rs/KM", seat: "7+1", image: "/images/crysta.jpeg" },
];

export default function Services() {
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/#my-section");
  };

  const showAll = visibleCount >= carList.length;
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

    <div>



      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/services.png')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10 transition-colors"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Nunito',sans-serif] tracking-tight">
              Services
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-lg text-white font-medium max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="w-full bg-white py-6">
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

      <div className="max-w-6xl mx-auto px-4 py-6 pt-14">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
              <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
              <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
            </div>
            <span className="text-[#E18B1C] font-bold tracking-widest text-2xl uppercase text-center">
              Our Tariff
            </span>
          </div>
          <p className="mt-2 lg:text-6xl text-2xl ">
            Transparent pricing for your journeys
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carList.slice(0, visibleCount).map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-xl border border-primary-100 overflow-hidden hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="h-48 bg-gray-200">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800">
                    {car.name}
                  </h3>
                  <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {car.seat} seats
                  </span>
                </div>

                {/* Tariff */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p className="text-gray-700 font-medium">
                    One Way Tariff :
                    <span className="ml-1 font-bold text-primary-600">
                      {car.oneWay}
                    </span>
                  </p>
                  <p className="text-gray-700 font-medium">
                    Round Trip Tariff :
                    <span className="ml-1 font-bold text-primary-600">
                      {car.roundTrip}
                    </span>
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handleBookNow}
                  className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More / Show Less */}
        <div className="flex justify-center mt-14">
          {!showAll ? (
            <button
              onClick={() => setVisibleCount(carList.length)}
              className="px-12 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full font-semibold transition-all"
            >
              View All
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(3)}
              className="px-12 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full font-semibold transition-all"
            >
              Show Less
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
