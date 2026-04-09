import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Mail } from 'lucide-react';
import { BLOG_POSTS } from '../data/mock';
import { toast } from 'sonner';

const Insights = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Mock submission
    setTimeout(() => {
      toast.success('Successfully subscribed to our newsletter!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1628] to-[#0f1f38] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Practical perspectives on FP&A, business intelligence, and strategic finance.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#0a1628] to-[#0f1f38] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-[#2ecc8a] rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2ecc8a] rounded-full filter blur-3xl" />
                  </div>
                  <div className="relative z-10 p-6">
                    <div className="text-6xl font-bold text-[#2ecc8a]/20 text-center">
                      {post.id}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0a1628] mb-3 group-hover:text-[#2ecc8a] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center text-[#2ecc8a] font-semibold group-hover:gap-2 transition-all duration-300">
                    Read More
                    <ArrowRight className="ml-1" size={18} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a1628] to-[#0f1f38]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2ecc8a]/10 rounded-full mb-6">
              <Mail className="text-[#2ecc8a]" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get practical insights on FP&A, BI, and strategic finance delivered to your inbox.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ecc8a] transition-all duration-300"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#2ecc8a] text-[#0a1628] font-semibold rounded-lg hover:bg-[#26b377] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#0a1628] mb-6">
            Want to discuss your specific challenge?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's explore how we can help you build better financial processes.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#0a1628] text-white font-semibold rounded-lg hover:bg-[#0f1f38] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Insights;
