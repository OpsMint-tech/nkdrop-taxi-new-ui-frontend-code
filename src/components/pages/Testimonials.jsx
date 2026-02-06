import React from 'react';
import Reveal from '../Reveal';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "Augusta Silva",
        role: "Customer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 2,
        name: "John Doe",
        role: "Customer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages."
    },
    {
        id: 3,
        name: "Robert Smith",
        role: "Traveler",
        image: "https://randomuser.me/api/portraits/men/86.jpg",
        text: "Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 4,
        name: "Maria Garcia",
        role: "Tourist",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available."
    },
    {
        id: 5,
        name: "Sylvia Brown",
        role: "Regular User",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Excellent service and very professional drivers. I always choose NK Drop Taxi for my long-distance trips. Highly recommended!"
    },
    {
        id: 6,
        name: "Michael Chen",
        role: "Business Traveler",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Punctual and reliable. The vehicle was clean and comfortable. A great experience overall for my airport transfers."
    }
];

const Testimonials = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: "url('/images/services.png')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Nunito',sans-serif] tracking-tight">
                            Testimonials
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-sm md:text-lg text-white font-medium max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
                            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Testimonials Grid Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <Reveal>
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="flex gap-1">
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                    <div className="w-[4px] h-4 bg-[#E18B1C] -skew-x-[20deg]"></div>
                                </div>
                                <span className="text-[#E18B1C] font-bold tracking-widest text-sm uppercase">
                                    Customer Feedback
                                </span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-['Nunito',sans-serif]">
                                What Our Happy Clients Say
                            </h2>
                        </Reveal>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Reveal key={testimonial.id} delay={index * 0.1}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                                    <div className="flex gap-1 mb-6 text-[#E18B1C]">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow italic">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-100 p-0.5">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-lg group-hover:text-[#E18B1C] transition-colors">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
