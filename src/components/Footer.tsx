import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-8">
      <div className="watch-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gold">CHRO</span>NOVA
            </h3>
            <p className="text-gray-300 mb-4">
              The ultimate destination for luxury timepieces. Discover authentic watches from prestigious brands.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/watches" className="text-gray-300 hover:text-gold transition-colors">
                  All Watches
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-gold transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/watches/men" className="text-gray-300 hover:text-gold transition-colors">
                  Men's Watches
                </Link>
              </li>
              <li>
                <Link to="/watches/women" className="text-gray-300 hover:text-gold transition-colors">
                  Women's Watches
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-gray-300 hover:text-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Info</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@chronova.in</li>
              <li>Phone: +91 88674 72331</li>
              <li>Address: 45 MG Road, Indiranagar, Bangalore, Karnataka 560038</li>
            </ul>
            <div className="mt-4">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm rounded-l text-black flex-1"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-amber-600 transition-colors px-4 py-2 rounded-r text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Chronova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
