import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

export const footerLinks = {
  about: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'News', href: '/news' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { label: 'Facebook', href: '#', icon: Facebook },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
  ],
  contact: [
    { label: 'info@schoolierp.com', href: 'mailto:info@schoolierp.com', icon: Mail },
    { label: '+1 (555) 123-4567', href: 'tel:+15551234567', icon: Phone },
  ],
};