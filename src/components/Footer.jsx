import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <BookOpen className="text-primary" size={24} />
              </div>
              <span className="text-2xl font-bold">
                Education <span className="text-secondary">Point</span>
              </span>
            </Link>
            <p className="text-blue-100 leading-relaxed">
              Empowering students to achieve their dreams through quality education and expert guidance. Join us to start your journey to success.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-primary-dark p-2 rounded-full hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-blue-100 hover:text-secondary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Our Courses</h3>
            <ul className="space-y-4 font-light">
              <li>Class 6th - 10th</li>
              <li>Class 11th & 12th Commerce</li>
              <li>Jamia / AMU Entrance</li>
              <li>BHU / JNU Entrance</li>
              <li>Foundation Batches</li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 border-b-2 border-secondary w-fit pb-1">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-secondary flex-shrink-0" size={20} />
                <span className="text-blue-100">123 Education Hub, Knowledge Park, Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-secondary flex-shrink-0" size={20} />
                <span className="text-blue-100">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-secondary flex-shrink-0" size={20} />
                <span className="text-blue-100">info@educationpoint.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} Education Point. All rights reserved. Designed by Faisal for future leaders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
