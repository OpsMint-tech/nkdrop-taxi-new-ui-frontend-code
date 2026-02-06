// // HeroSection.js
// import { useState } from 'react';
// import Form from './Form';
// import Reveal from './Reveal';

// import { ToastContainer } from "react-toastify/unstyled";

// const HeroSection = () => {
//     const [activeTab, setActiveTab] = useState('oneWay');
//     const [toast, setToast] = useState({});

//     return (
//         <>
//             <div className="px-0 pb-0 pt-0  lg:pb-24 lg:pt-12">
//                 <div
//                     className="w-full bg-cover bg-center bg-no-repeat rounded-br-xl"
//                     style={{ backgroundImage: "url('/images/hero.png')" }}
//                 >
//                     <ToastContainer />
//                     <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 mt-20 lg:mt-0 flex flex-col lg:flex-row items-center justify-between gap-12">
//                         {/* Left Section */}
//                         <div className="w-full lg:w-1/2 text-white">
//                             <Reveal>
//                                 <h1 className="text-4xl md:text-5xl font-light leading-tight">
//                                     <span className="font-bold text-primary-500 me-4">Cars</span>
//                                     For Rent
//                                 </h1>
//                             </Reveal>

//                             {/* Booking Form */}
//                             <Reveal delay={0.1}>
//                               <Form activeTab={activeTab} setActiveTab={setActiveTab} toast={setToast}/>
//                             </Reveal>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default HeroSection;

// HeroSection.js
import { useState } from 'react';
// import Form from './Form';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

import { ToastContainer } from "react-toastify/unstyled";

const HeroSection = () => {
    const [activeTab, setActiveTab] = useState('oneWay');
    const [toast, setToast] = useState({});

    return (
        <>
            <div className="px-0 pb-0 pt-0   ">
                <div
                    className="w-full bg-cover bg-center bg-no-repeat rounded-br-xl h-[740px]"
                    style={{ backgroundImage: "url('/images/hero.png')" }}
                >
                    {/* <ToastContainer /> */}

                    <div className="absolute inset-0 bg-gradient-to-b
        from-black/20 via-transparent to-black/40 z-0" />

                    {/* Content */}
                    <div className="relative z-10 lg:mt-18 px-4 lg:pt-28">
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-primary-500 text-center font-semibold tracking-[2px] mb-2 text-sm pt-28 lg:pt-20"
                        >
                            TRAVEL SECURELY WITH US!
                        </motion.p>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white text-center font-extrabold leading-tight
          text-4xl md:text-6xl lg:text-5xl
          tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] mb-6  w-full"
                        >
                            Book Your Taxi From Anywhere Today
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-white text-center text-base md:text-lg mb-10
          drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
                        >
                            Everything Your Taxi Business Need Is Already Here!
                            <br />
                            Nk Cars Made For Taxi Service Companies!
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-5 justify-center"
                        >
                            <button
                                className="bg-primary-500 hover:bg-primary-600 text-white
            px-8 py-3 rounded-lg font-semibold transition duration-300
            shadow-lg"
                            >
                                Book Your Ride
                            </button>

                            <button
                                className="border-2 border-primary-500 text-white lg:text-black
            px-8 py-3 rounded-lg font-semibold
            hover:bg-white hover:text-black transition duration-300"
                            >
                                Contact Us
                            </button>
                        </motion.div>

                        {/* Booking Form
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <Form activeTab={activeTab} setActiveTab={setActiveTab} toast={setToast} />
                        </motion.div> */}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default HeroSection;