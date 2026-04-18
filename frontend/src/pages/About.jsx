import React from 'react';
import { Target, Lightbulb, Users, ExternalLink } from 'lucide-react';
import { FOUNDER, COMPANY_VALUES, SWIFT_FINANCE, PARTNERS, IMAGES } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Nezz Consulting
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We exist to make enterprise-level financial rigor accessible to growing businesses and PE-backed companies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Financial complexity shouldn't stand in the way of good decisions. We bring clarity, structure, and actionable insights to organizations that need sophisticated financial planning without the overhead of building it in-house. Whether you're scaling fast or optimizing for value creation, we deliver the tools and expertise that turn data into direction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide how we work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COMPANY_VALUES.map((value, index) => {
              const icons = [Target, Lightbulb, Users];
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-[#2ecc8a]/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-[#2ecc8a]" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0a1628] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Founder Image */}
            <div className="lg:w-2/5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {FOUNDER.name}
                  </h3>
                  <p className="text-gray-200">{FOUNDER.title}</p>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:w-3/5">
              <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
                Meet the Founder
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {FOUNDER.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#0f1f38]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ecc8a]/10 rounded-full mb-6">
              <ExternalLink className="text-[#2ecc8a]" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {SWIFT_FINANCE.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {SWIFT_FINANCE.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <h3 className="text-2xl font-bold text-white text-center">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {partner.description}
                </p>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#2ecc8a] hover:text-[#26b377] transition-colors duration-300 text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink className="ml-1" size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to bring clarity and structure to your financial operations? Let's talk.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#2ecc8a] text-white font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
