import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/mock';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      toast.success('Thank you! We\'ll get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to bring clarity to your financial operations? Get in touch and let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0a1628] mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2ecc8a]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-[#2ecc8a]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628] mb-1">Location</h3>
                    <p className="text-gray-600">{CONTACT_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2ecc8a]/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-[#2ecc8a]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628] mb-1">Email</h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-gray-600 hover:text-[#2ecc8a] transition-colors duration-300"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#2ecc8a]/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-[#2ecc8a]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0a1628] mb-1">Phone</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-gray-600 hover:text-[#2ecc8a] transition-colors duration-300"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Nezz Consulting?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#2ecc8a] mr-2">✓</span>
                    <span>$1B+ in revenue managed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ecc8a] mr-2">✓</span>
                    <span>Swift Finance certified partner</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ecc8a] mr-2">✓</span>
                    <span>Tailored solutions for SMBs & PE-backed companies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2ecc8a] mr-2">✓</span>
                    <span>Proven expertise in FP&A and BI</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <h2 className="text-3xl font-bold text-[#0a1628] mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] focus:border-transparent transition-all duration-300"
                        placeholder="Your company"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your needs..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-[#2ecc8a] text-white font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
