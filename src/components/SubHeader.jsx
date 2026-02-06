import { motion } from 'framer-motion';

const SubHeader = () => {
    const text = "All Over Tamilnadu, pondicherry,Bangalore,Kerala,Andhra Pradhesh service provideder.Any where any time.";

    return (
        <div className="w-full bg-black overflow-hidden h-8 sm:h-10 flex items-center">
            <motion.div
                className="whitespace-nowrap text-white text-sm sm:text-base font-medium flex"
                animate={{ x: ['100%', '-100%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: 'linear',
                }}
            >
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
            </motion.div>
        </div>
    );
};

export default SubHeader;
