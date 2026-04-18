import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ExternalLink } from 'lucide-react';

const PartnersCarousel = ({ partners }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/10 h-full flex flex-col">
              {/* Logo */}
              <div className="h-24 flex items-center justify-center mb-6 bg-white rounded-lg p-4">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <h3 className="text-2xl font-bold text-[#0a1628] text-center">
                    {partner.name}
                  </h3>
                )}
              </div>

              {/* Partner Name */}
              <h3 className="text-xl font-bold text-white text-center mb-4">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                {partner.description}
              </p>

              {/* Website Link */}
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[#2ecc8a] hover:text-[#26b377] transition-colors duration-300 text-sm font-medium"
                >
                  Visit Website
                  <ExternalLink className="ml-1" size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
