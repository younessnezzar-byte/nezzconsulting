import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO, LOGO_URL } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="Nezz Consulting" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Unleashing the power of your data through strategic financial consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#2ecc8a] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">FP&A Services</li>
              <li className="text-gray-400">Business Intelligence</li>
              <li className="text-gray-400">Strategic Planning</li>
              <li className="text-gray-400">Excel Automation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#2ecc8a]" />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={16} className="flex-shrink-0 text-[#2ecc8a]" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-[#2ecc8a] transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={16} className="flex-shrink-0 text-[#2ecc8a]" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-[#2ecc8a] transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2025 Nezz Consulting. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[#2ecc8a] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
