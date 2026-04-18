import React, { useState } from 'react';
import { Check, Sparkles, TrendingUp, Building2, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const packages = [
    {
      tag: 'Starter',
      name: 'Finance Foundations',
      price: 'C$2,500',
      period: '/month',
      duration: '3-month engagement · 1 focus area',
      target: 'SMBs getting their financial house in order',
      icon: Sparkles,
      featured: false,
      deliverables: [
        'Financial diagnostic & current-state assessment',
        '1 custom financial model (budget or forecast)',
        'Excel reporting cleanup & automation',
        'KPI dashboard (up to 10 indicators)',
        '2 training sessions (team of up to 3)',
        'Monthly check-in calls',
        'Intro to AI tools for finance teams',
      ],
      cta: 'Book a free call',
      ctaLink: '/contact',
    },
    {
      tag: 'Growth',
      name: 'Finance Transformation',
      tagline: 'Most Popular',
      price: 'C$5,500',
      period: '/month',
      duration: '3-month engagement · Full transformation',
      target: 'SMBs ready to operate like enterprise',
      icon: TrendingUp,
      featured: true,
      deliverables: [
        'Everything in Finance Foundations',
        'Full FP&A process redesign',
        '3-statement financial model',
        'BI dashboard suite (Swift Finance)',
        'Scenario planning & sensitivity models',
        'AI tools integration training (full team)',
        'Weekly working sessions',
        '60-day post-engagement support',
      ],
      cta: 'Book a free call',
      ctaLink: '/contact',
    },
    {
      tag: 'PE / Enterprise',
      name: 'Strategic Finance Partner',
      price: 'Custom',
      period: 'pricing',
      duration: '3–6 month engagement · Multi-entity',
      target: 'PE-backed companies & complex organizations',
      icon: Building2,
      featured: false,
      deliverables: [
        'Everything in Finance Transformation',
        'Multi-entity consolidation build',
        'EBITDA bridge & variance reporting',
        'Investor-ready reporting pack',
        'Working capital & cash flow model',
        'Value creation plan support',
        'CFO-level advisory access',
        'Ongoing fractional finance support',
      ],
      cta: 'Request a proposal',
      ctaLink: '/contact',
    },
  ];

  const addons = [
    {
      name: 'AI for Finance Teams Workshop',
      description: 'Half-day training on ChatGPT, Copilot & AI tools for FP&A, reporting and analysis',
      price: 'C$1,200 / session',
    },
    {
      name: 'Monthly Fractional CFO',
      description: 'Ongoing monthly advisory, board deck prep, and executive financial reporting',
      price: 'C$1,800 / month',
    },
    {
      name: 'Financial Model Audit',
      description: 'Review of an existing model — logic, assumptions, structure, and output quality',
      price: 'C$900 flat fee',
    },
    {
      name: 'Swift Finance Implementation',
      description: 'Full platform setup, data connection, dashboard buildout and team onboarding',
      price: 'C$2,500 flat fee',
    },
  ];

  const faqs = [
    {
      question: 'How does an engagement typically start?',
      answer: 'It starts with a free 30-minute consultation where we assess your current financial setup, identify the biggest gaps, and recommend the right pack. No pitch — just an honest conversation.',
    },
    {
      question: 'Can I extend beyond 3 months?',
      answer: 'Absolutely. Many clients continue with a monthly fractional CFO retainer or move into a follow-on project after the initial engagement.',
    },
    {
      question: 'Do you work with companies outside Quebec?',
      answer: 'Yes. We work with clients across Canada and internationally. All engagements can be delivered remotely, with on-site options available for Montreal-area clients.',
    },
    {
      question: 'What does AI integration training actually cover?',
      answer: 'We train your finance team on practical AI tools — how to use ChatGPT for analysis, Microsoft Copilot in Excel, AI-assisted forecasting, and automating repetitive reporting tasks. It\'s hands-on and specific to your workflows.',
    },
    {
      question: 'Is the pricing fixed or negotiable?',
      answer: 'The Starter and Growth packs are fixed-scope for predictable delivery. The PE/Enterprise pack is always custom-scoped based on complexity and entity count.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Finance Transformation Packages
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Three structured engagement tracks designed to take your finance function from where it is to where it needs to be — with training, AI integration, and measurable outcomes built in.
            </p>

            {/* Pricing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#2ecc8a] text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly view
              </button>
              <span className="px-4 text-sm text-gray-400">3-month commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                    pkg.featured ? 'border-4 border-[#2ecc8a] lg:-translate-y-4' : 'border border-gray-200'
                  }`}
                >
                  {/* Featured Badge */}
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 bg-[#2ecc8a] text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                      {pkg.tagline}
                    </div>
                  )}

                  <div className="p-8">
                    {/* Tag */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon className="text-[#2ecc8a]" size={24} />
                      <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                        {pkg.tag}
                      </span>
                    </div>

                    {/* Package Name */}
                    <h3 className="text-2xl font-bold text-[#0a1628] mb-2">
                      {pkg.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#0a1628]">{pkg.price}</span>
                      <span className="text-gray-600">{pkg.period}</span>
                    </div>

                    {/* Duration & Target */}
                    <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                    <p className="text-sm text-gray-700 font-medium mb-6">{pkg.target}</p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mb-6"></div>

                    {/* Deliverables */}
                    <div className="space-y-3 mb-8">
                      {pkg.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="text-[#2ecc8a] flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={pkg.ctaLink}
                      className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        pkg.featured
                          ? 'bg-[#2ecc8a] text-white hover:bg-[#26b377] shadow-md hover:shadow-lg'
                          : 'bg-[#0a1628] text-white hover:bg-[#0f1f38]'
                      }`}
                    >
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              Add-on modules
            </h2>
            <p className="text-xl text-gray-600">
              Complement any pack with targeted expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#2ecc8a] hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-[#0a1628] mb-3">
                  {addon.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {addon.description}
                </p>
                <div className="text-lg font-semibold text-[#2ecc8a]">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0a1628] mb-4">
              Common questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-[#2ecc8a] flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-[#0a1628] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0a1628]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not sure which pack is right for you?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free 30-minute call and we'll tell you exactly where to start.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#2ecc8a] text-white font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a free consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
