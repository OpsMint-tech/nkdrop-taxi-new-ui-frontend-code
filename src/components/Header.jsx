// import React, { useState, useEffect, useRef } from 'react';
// import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
// import { useLocation, Link } from 'react-router-dom';
// import SubHeader from './SubHeader';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isTop, setIsTop] = useState(true);
//   const drawerRef = useRef(null);
//   const location = useLocation();

//   const toggleMenu = () => setIsMenuOpen(prev => !prev);
//   const closeMenu = () => setIsMenuOpen(false);

//   const handleNavClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     closeMenu();
//   };

//   const isActive = (path) => {
//     return location.pathname === path ||
//       (path !== '/' && location.pathname.startsWith(path));
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       setIsTop(scrollTop < 10);

//       if (scrollTop > 100) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (drawerRef.current && !drawerRef.current.contains(e.target)) {
//         closeMenu();
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       // Prevent body scroll when drawer is open
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   return (
//     <>
//       {/* SubHeader positioned above main header */}
//       <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
//         ? 'translate-y-0'
//         : isTop
//           ? 'translate-y-0'
//           : '-translate-y-full'
//         }`}>
//         <SubHeader />
//       </div>

//       {/* Main Header positioned below SubHeader */}
//       <header
//         className={`fixed top-8 md:top-10 left-0 w-full py-3 px-4 md:px-12 lg:px-20 flex items-center justify-between z-40 bg-white transition-all duration-300 ease-in-out ${isScrolled
//           ? 'shadow-md translate-y-0'
//           : isTop
//             ? 'shadow-none translate-y-0'
//             : 'shadow-sm -translate-y-full'
//           }`}
//       >
//         {/* Logo */}
//         <Link to="/" onClick={handleNavClick}>
//           <div className="flex items-center">
//             <img
//               src="/images/NK_TAXI.png"
//               alt="CARNTEL Logo"
//               className="h-14 w-auto object-contain transition-all duration-300"
//             />
//           </div>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center text-gray-900 text-sm lg:text-base font-medium">
//           <Link
//             to="/"
//             onClick={handleNavClick}
//             className={`hover:text-primary-500 ${isActive('/') ? 'text-primary-500' : ''}`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleNavClick}
//             className={`hover:text-primary-500 ${isActive('/about') ? 'text-primary-500' : ''}`}
//           >
//             About
//           </Link>
//           <Link
//             to="/services"
//             onClick={handleNavClick}
//             className={`hover:text-primary-500 ${isActive('/services') ? 'text-primary-500' : ''}`}
//           >
//             Our Services
//           </Link>
//           <Link
//             to="/terms"
//             onClick={handleNavClick}
//             className={`hover:text-primary-500 ${isActive('/terms') ? 'text-primary-500' : ''}`}
//           >
//             Terms & Conditions
//           </Link>
//           <Link
//             to="/contact"
//             onClick={handleNavClick}
//             className={`hover:text-primary-500 ${isActive('/contact') ? 'text-primary-500' : ''}`}
//           >
//             Contact
//           </Link>
//         </nav>

//         {/* Contact Info - Desktop */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <div className="flex items-center space-x-2">
//             <span className="bg-primary-500 p-2 rounded-md text-white">
//               <FiMail />
//             </span>
//             <span className="text-base font-medium text-gray-900">+ 91 8489751086</span>
//           </div>
//         </div>

//         {/* Hamburger Button - Mobile */}
//         <button className="md:hidden text-gray-800 focus:outline-none" onClick={toggleMenu}>
//           {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
//         </button>
//       </header>

//       {/* Mobile Drawer with proper z-index and backdrop */}
//       {isMenuOpen && (
//         <>
//           {/* Backdrop */}
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 ease-in-out"
//             onClick={closeMenu}
//           />

//           {/* Drawer */}
//           <div
//             ref={drawerRef}
//             className={`fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
//           >
//             {/* Drawer Header */}
//             <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-white">
//               <span className="text-xl font-bold text-primary-500">Menu</span>
//               <button
//                 onClick={closeMenu}
//                 className="text-gray-700 hover:text-primary-500 focus:outline-none transition-colors duration-200 p-2 rounded-full hover:bg-primary-50"
//               >
//                 <FiX className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Drawer Navigation */}
//             <div className="flex flex-col py-6">
//               <div className="px-6 space-y-2">
//                 <Link
//                   to="/"
//                   onClick={handleNavClick}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/')
//                       ? 'text-primary-500 bg-primary-50 border-l-4 border-primary-500'
//                       : 'text-gray-800 hover:text-primary-500 hover:bg-primary-50'
//                     }`}
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/about"
//                   onClick={handleNavClick}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/about')
//                       ? 'text-primary-500 bg-primary-50 border-l-4 border-primary-500'
//                       : 'text-gray-800 hover:text-primary-500 hover:bg-primary-50'
//                     }`}
//                 >
//                   About
//                 </Link>
//                 <Link
//                   to="/services"
//                   onClick={handleNavClick}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/services')
//                       ? 'text-primary-500 bg-primary-50 border-l-4 border-primary-500'
//                       : 'text-gray-800 hover:text-primary-500 hover:bg-primary-50'
//                     }`}
//                 >
//                   Our Services
//                 </Link>
//                 <Link
//                   to="/terms"
//                   onClick={handleNavClick}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/terms')
//                       ? 'text-primary-500 bg-primary-50 border-l-4 border-primary-500'
//                       : 'text-gray-800 hover:text-primary-500 hover:bg-primary-50'
//                     }`}
//                 >
//                   Terms & Conditions
//                 </Link>
//                 <Link
//                   to="/contact"
//                   onClick={handleNavClick}
//                   className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 font-medium ${isActive('/contact')
//                       ? 'text-primary-500 bg-primary-50 border-l-4 border-primary-500'
//                       : 'text-gray-800 hover:text-primary-500 hover:bg-primary-50'
//                     }`}
//                 >
//                   Contact
//                 </Link>
//               </div>

//               {/* Drawer Contact Info */}
//               <div className="mt-8 px-6">
//                 <div className="bg-gradient-to-r from-primary-50 to-white rounded-lg p-6 space-y-4">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>

//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
//                       <span className="bg-primary-500 p-2 rounded-lg text-white flex-shrink-0">
//                         <FiMail className="h-4 w-4" />
//                       </span>
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-600">Phone</p>
//                         <p className="text-base font-medium text-gray-900">
//                           8489751086</p>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
//                       <span className="bg-primary-500 p-2 rounded-lg text-white flex-shrink-0">
//                         <FiPhone className="h-4 w-4" />
//                       </span>
//                       <div className="flex-1">
//                         <p className="text-sm text-gray-600">Email</p>
//                         <p className="text-base font-medium text-gray-900">enquiry@nkdroptaxi.com</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import { useLocation, Link } from 'react-router-dom';
import SubHeader from './SubHeader';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const drawerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const isActive = (path) =>
    location.pathname === path ||
    (path !== '/' && location.pathname.startsWith(path));

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsTop(scrollTop < 10);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* SubHeader */}
      {/* <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        bg-nk-gradient
        ${isScrolled ? 'translate-y-0' : isTop ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <SubHeader />
      </div> */}

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 w-full py-4 px-4 md:px-12 lg:px-20
        flex items-center justify-between z-40
        transition-all duration-500
        ${isScrolled
            ? 'bg-nk-gradient shadow-lg py-3'
            : 'bg-transparent shadow-none py-6'
          } text-white`}
      >
        {/* Logo */}
        <Link to="/" onClick={handleNavClick}>
          <img
            src="/images/NK_TAXI.png"
            alt="NK Taxi Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center text-sm lg:text-base font-semibold">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About Us' },
              { path: '/services', label: 'Services' },
              { path: '/terms', label: 'Terms & Conditions' },
              { path: '/testimonials', label: 'Testimonials' },
              { path: '/contact', label: 'Contact Us' },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={handleNavClick}
                className={`transition-colors whitespace-nowrap
              ${isActive(path)
                    ? 'text-[#E18B1C]'
                    : 'hover:text-[#E18B1C]'
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Book a Taxi Button */}
          <Link
            to="/#my-section"
            className="hidden lg:block bg-[#B27E36] hover:bg-[#E18B1C] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md transform hover:scale-105"
          >
            Book a Taxi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div
            ref={drawerRef}
            className="fixed top-0 right-0 w-80 h-full bg-white z-[70]
            shadow-2xl transform transition-transform duration-300"
          >
            {/* Drawer Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <span className="text-xl font-bold text-primary-600">Menu</span>
              <button onClick={closeMenu}>
                <FiX size={22} />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="p-6 space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/terms', label: 'Terms & Conditions' },
                { path: '/testimonials', label: 'Testimonials' },
                { path: '/contact', label: 'Contact Us' },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 rounded-lg font-medium transition
                  ${isActive(path)
                      ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                      : 'hover:bg-gray-100'
                    }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t space-y-4">
              <div className="flex items-center gap-3">
                <FiPhone />
                <span>+91 8489751086</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail />
                <span>enquiry@nkdroptaxi.com</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
