import React from 'react';

const Banner = ({
  title,
  description,
  imageSrc,
  banner = false,
  subheading,
  heading,
  bannerDescription,
  color = 'transparent',
  isStyled = false,
  isInvert = false,
}) => {

  const sectionBackgroundColor = isStyled ? color : 'white';
  const paddingClass = isStyled ? 'md:px-24 px-6' : '';

  if (banner) {
    return (
      <section className={`flex items-center justify-center ${sectionBackgroundColor} py-8 md:py-16`}>
        <div className="text-center space-y-4">
          {subheading && <p className="text-lg text-primary font-semibold">{subheading}</p>}
          {heading && <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-primary">{heading}</h1>}
          {bannerDescription && <p className="text-gray-600 text-sm md:text-lg" style={{ marginTop: '30px' }}>{bannerDescription}</p>}
        </div>
      </section>
    );
  }
  return (
    <section className={`flex flex-col lg:flex-row ${isInvert ? 'lg:flex-row-reverse' : ''} items-center justify-between ${sectionBackgroundColor}  ${paddingClass} py-12 gap-8`}>
      {/* Left Side - Text Content */}
      <div className="lg:w-1/2 space-y-6 text-center md:text-left">
        {isStyled ? (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">{title}</h1>
            {subheading && <p className="text-2xl text-primary font-semibold">{subheading}</p>}
            <p className="text-gray-600 text-md md:text-xl lg:text-base">{description}</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">{title}</h1>
            <p className="text-gray-600 text-md md:text-xl lg:text-base">{description}</p>
          </>
        )}

        {/* If not styled, show the button */}
        {!isStyled && (
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="/contact" className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition">
              Get a Free Consultation
            </a>
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={imageSrc || '/images/etios_right3.png'}
          alt="Hero"
          loading="lazy"
          className={`w-full h-auto object-contain ${isStyled ? '' : 'max-w-[500px]'}`}
        />
      </div>
    </section>
  );
};

export default Banner;