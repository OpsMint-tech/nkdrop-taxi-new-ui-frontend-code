import React from 'react';
import Reveal from '../Reveal';
import WhatsAppButton from '../WhatsappButton';
import { FaCheckCircle } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Using a darker tinted sunset look */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: "url('/images/services.png')" }}
        ></div>

        {/* Dark Sunset Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Nunito',sans-serif] tracking-tight">
              Terms & Conditions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm md:text-xl text-white font-medium max-w-2xl mx-auto opacity-90 leading-relaxed drop-shadow-lg">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Document Layout Content */}
      <div className="max-w-8xl mx-auto py-4 px-6 sm:px-10 lg:px-12">
        <Reveal>
          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p className="mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            {/* Checklist Section */}
            <section className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
              {[
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et",
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et",
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              ].map((term, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 shrink-0">
                      <FaCheckCircle className="text-[#B27E36] text-xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-600 font-medium">{term}</p>
                  </div>
                </Reveal>
              ))}
            </section>

            <section className="pt-8">
              <p className="mb-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </div>
        </Reveal>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default TermsAndConditions;
