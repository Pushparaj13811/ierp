import React from 'react';
import { Link } from 'react-router-dom';
import { School } from 'lucide-react';
import { footerLinks } from './FooterLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <School className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">SchoolIERP</span>
            </div>
            <p className="text-gray-500 text-sm">
              Empowering education through integrated management and seamless communication.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              About
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-sm text-center text-gray-500">
            © {currentYear} SchoolIERP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}