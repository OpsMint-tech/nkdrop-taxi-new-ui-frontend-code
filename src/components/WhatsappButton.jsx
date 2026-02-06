import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "918148783506";
  const defaultMessage = "Hello, I want to book a car!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-4 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative group"
        aria-label="Chat on WhatsApp"
      >
        {/* Styled WhatsApp Icon Button */}
        <div className={`
          w-14 h-14 md:w-16 md:h-16 rounded-full 
          bg-green-500 shadow-xl ring-2 ring-green-500 
          animate-bounce hover:scale-110 transition-transform duration-500 
          flex items-center justify-center
          backdrop-blur-sm
        `}>
          <FaWhatsapp className="text-white w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Tooltip for Desktop */}
        <div className="hidden md:block absolute right-full top-1/2 mr-3
          -translate-y-1/2 bg-green-600 text-white text-sm px-3 py-1 rounded-lg
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          shadow-md whitespace-nowrap
          after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
          after:border-8 after:border-transparent after:border-l-green-600
        ">
          Need help? Chat with us!
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;
