import { FaPhone } from 'react-icons/fa';

const PhoneButton = () => {
    const phoneNumber = "8489751086";
    const telUrl = `tel:${phoneNumber}`;

    return (
        <div className="fixed bottom-6 left-4 z-50 md:hidden">
            <a
                href={telUrl}
                className="block relative group"
                aria-label="Call us"
            >
                {/* Styled Phone Icon Button */}
                <div className={`
          w-14 h-14 rounded-full 
          bg-blue-500 shadow-xl ring-2 ring-blue-500 
          animate-bounce hover:scale-110 transition-transform duration-500 
          flex items-center justify-center
          backdrop-blur-sm
        `}>
                    <FaPhone className="text-white w-6 h-6" />
                </div>

                <div className="absolute right-full top-1/2 mr-3
          -translate-y-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-lg
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          shadow-md whitespace-nowrap
          after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
          after:border-8 after:border-transparent after:border-l-blue-600
        ">
                    Call us directly!
                </div>
            </a>
        </div>
    );
};

export default PhoneButton;