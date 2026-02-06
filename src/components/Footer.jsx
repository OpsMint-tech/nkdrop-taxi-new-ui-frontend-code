import React from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Reveal from './Reveal';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleFooterNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="w-full text-white bg-cover bg-center" style={{ backgroundImage: "url('/images/footerbg.png')" }}>
      <div className="w-full py-16 px-6 md:px-16 bg-black/80"> {/* Added overlay for better readability if needed, or just rely on image */}
        <Reveal>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Column 1: Logo */}
            <div className="flex flex-col justify-center">
              <a href="/">
                <img
                  src="/images/NK_TAXI.png"
                  alt="NK Drop Taxi"
                  className="h-20 w-auto object-contain"
                />
              </a>
            </div>

            {/* Column 2: About Site */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">About Site</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-4">
                <li><Link to="/about" onClick={handleFooterNavClick} className="hover:text-[#E18B1C] transition-colors">About Us</Link></li>
                <li><Link to="/blog" onClick={handleFooterNavClick} className="hover:text-[#E18B1C] transition-colors">Blog</Link></li>
                <li><Link to="/services" onClick={handleFooterNavClick} className="hover:text-[#E18B1C] transition-colors">Services</Link></li>
                <li><Link to="/faq" onClick={handleFooterNavClick} className="hover:text-[#E18B1C] transition-colors">Faq's</Link></li>
                <li><Link to="/contact" onClick={handleFooterNavClick} className="hover:text-[#E18B1C] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Contact Us</h3>
              <ul className="text-gray-400 text-sm space-y-4">
                <li>
                  <a href="mailto:info@nkdroptaxi.com" className="hover:text-[#E18B1C] transition-colors">
                    info@nkdroptaxi.com
                  </a>
                </li>
                <li>
                  <span>Tamil Nadu</span>
                </li>
                <li>
                  <a href="tel:+911234567890" className="hover:text-[#E18B1C] transition-colors">
                    +91 123 456 7890
                  </a>
                </li>
                <li>
                  <a href="tel:+911234567890" className="hover:text-[#E18B1C] transition-colors">
                    +91 123 456 7890
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5: Follow us & Subscribe */}
            <div>
              <h3 className="font-bold mb-6 text-white text-lg">Follow us</h3>
              <div className="flex space-x-4 mb-8">
                <a href="#" className="text-blue-600 hover:text-white transition-colors"><FiFacebook size={20} /></a>
                <a href="#" className="text-sky-500 hover:text-white transition-colors"><FiTwitter size={20} /></a>
                <a href="#" className="text-blue-700 hover:text-white transition-colors"><div className="w-5 h-5 flex items-center justify-center font-bold">in</div></a> {/* Placeholder for LinkedIn if not available, usually separate icon */}
                <a href="#" className="text-red-600 hover:text-white transition-colors"><div className="w-5 h-5 flex items-center justify-center font-bold">Y</div></a> {/* Placeholder for Youtube */}
                <a href="#" className="text-pink-600 hover:text-white transition-colors"><FiInstagram size={20} /></a>
              </div>

              <h3 className="font-bold mb-4 text-white text-lg">Subscribe</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white text-gray-800 py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[#E18B1C]"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-[#E18B1C] hover:bg-[#c97b17] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Bottom Bar - Preserving existing structure */}
      <div className="bg-[#1A1A1A] text-gray-400 text-sm py-4 px-4 md:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
          <span>
            © 2024 <span className="text-[#E18B1C]">NKdroptaxi</span> All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
