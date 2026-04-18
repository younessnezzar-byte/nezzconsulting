import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/mock';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations/translations';

const Services = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t.services.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const serviceKey = index === 0 ? 'fpa' : index === 1 ? 'bi' : index === 2 ? 'strategic' : 'excel';
              return (
                <div
                  key={service.id}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={t.services[serviceKey].title}
                        className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                    </div>
                  </div>

                  <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
                      {t.services[serviceKey].title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {t.services[serviceKey].full}
                    </p>

                    <div className="space-y-3 mb-8">
                      {t.services[serviceKey].features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-[#2ecc8a]/10 rounded-full flex items-center justify-center mt-0.5">
                            <Check size={14} className="text-[#2ecc8a]" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-[#2ecc8a] text-white font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-md hover:shadow-lg hover:gap-2"
                    >
                      {t.home.getStarted}
                      <ArrowRight className="ml-1" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
            {t.services.notSure}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.services.notSureText}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#0a1628] text-white font-semibold rounded-lg hover:bg-[#0f1f38] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t.home.scheduleConsultation}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
