import React from 'react';
import { Check, Quote } from 'lucide-react';
import { WHO_WE_SERVE, TESTIMONIALS } from '../data/mock';

const WhoWeServe = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Who We Serve
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We work with organizations at different stages of growth—from ambitious SMBs to PE-backed companies driving operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Client Segments */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {WHO_WE_SERVE.map((segment, index) => (
              <div key={segment.id}>
                {/* Segment Header */}
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
                    {segment.title}
                  </h2>
                  <p className="text-2xl text-[#2ecc8a] font-medium">
                    {segment.subtitle}
                  </p>
                </div>

                {/* Segment Content */}
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={segment.image}
                        alt={segment.title}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {segment.description}
                    </p>

                    <div className="bg-gray-50 rounded-xl p-8">
                      <h3 className="text-xl font-bold text-[#0a1628] mb-6">
                        How We Help
                      </h3>
                      <div className="space-y-4">
                        {segment.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-6 h-6 bg-[#2ecc8a] rounded-full flex items-center justify-center mt-1">
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Quote className="text-[#2ecc8a] mb-4" size={32} />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-[#0a1628]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to elevate your financial operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're an SMB looking to scale or a PE-backed company optimizing for value creation, we're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#2ecc8a] text-[#0a1628] font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhoWeServe;
