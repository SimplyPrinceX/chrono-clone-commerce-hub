
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="watch-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-navy">
              <span className="text-gold">CHRO</span>NOVA
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="font-medium text-gray-700 hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/watches" className="font-medium text-gray-700 hover:text-gold transition-colors">
              Watches
            </Link>
            <Link to="/brands" className="font-medium text-gray-700 hover:text-gold transition-colors">
              Brands
            </Link>
            <Link to="/about" className="font-medium text-gray-700 hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-gray-700 hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/account">
              <Button variant="ghost" className="rounded-full p-2">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" className="rounded-full p-2">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="md:hidden rounded-full p-2"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-3 py-2 font-medium text-gray-700 hover:text-gold transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/watches"
                className="px-3 py-2 font-medium text-gray-700 hover:text-gold transition-colors"
                onClick={toggleMobileMenu}
              >
                Watches
              </Link>
              <Link
                to="/brands"
                className="px-3 py-2 font-medium text-gray-700 hover:text-gold transition-colors"
                onClick={toggleMobileMenu}
              >
                Brands
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 font-medium text-gray-700 hover:text-gold transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 font-medium text-gray-700 hover:text-gold transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
