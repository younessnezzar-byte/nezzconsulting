import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { STATS, SERVICES, WHO_WE_SERVE, IMAGES } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../translations/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Financial consulting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.home.heroTitle}{' '}
              <span className="text-[#2ecc8a]">{t.home.heroHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t.home.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2ecc8a] text-[#0a1628] font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.home.getStarted}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {t.home.exploreServices}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#2ecc8a] rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#2ecc8a] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">
                  {language === 'fr' ? 
                    (index === 0 ? t.stats.budgetManaged :
                     index === 1 ? t.stats.yearsExperience :
                     index === 2 ? t.stats.projectsDelivered :
                     t.stats.clientSatisfaction) : stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 font-medium mb-6">
            {t.home.trustBar}
          </p>
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-2xl font-bold">{t.home.smbs}</div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-2xl font-bold">{t.home.peCompanies}</div>
            <div className="w-px h-8 bg-gray-300" />
            <div className="text-2xl font-bold">{t.home.strategicPartners}</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              {t.home.ourServices}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.servicesSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const serviceKey = index === 0 ? 'fpa' : index === 1 ? 'bi' : index === 2 ? 'strategic' : 'excel';
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#2ecc8a]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t.services[serviceKey].title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#2ecc8a] transition-colors duration-300">
                      {t.services[serviceKey].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {t.services[serviceKey].short}
                    </p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-[#2ecc8a] font-semibold hover:gap-2 transition-all duration-300"
                    >
                      {t.home.learnMore}
                      <ArrowRight className="ml-1" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
              {t.home.whoWeServeTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.whoWeServeSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WHO_WE_SERVE.map((segment, index) => {
              const segmentKey = index === 0 ? 'smb' : 'pe';
              return (
                <div
                  key={segment.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={t.whoWeServe[segmentKey].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {t.whoWeServe[segmentKey].title}
                      </h3>
                      <p className="text-gray-300">{t.whoWeServe[segmentKey].subtitle}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {t.whoWeServe[segmentKey].description.substring(0, 200)}...
                    </p>
                    <Link
                      to="/who-we-serve"
                      className="inline-flex items-center text-[#2ecc8a] font-semibold hover:gap-2 transition-all duration-300"
                    >
                      {t.home.learnMore}
                      <ArrowRight className="ml-1" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1628] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#2ecc8a] rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2ecc8a] rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.home.ctaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t.home.ctaSubtitle}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#2ecc8a] text-[#0a1628] font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t.home.scheduleConsultation}
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
