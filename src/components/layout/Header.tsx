import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {isHomePage ? (
              ['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base px-2 py-1"
                >
                  {item}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base px-2 py-1"
              >
                Back to Home
              </Link>
            )}

           {isHomePage && (
                <a
                href="#contact"
                className="bg-primary-600 text-white px-6 py-2.5 rounded-md hover:bg-primary-700 transition-colors text-base font-medium"
              >
                Get Started
              </a>
            )}
          </div>

          {/* Mobile and Tablet Navigation Button */}
          <button
            className="lg:hidden text-gray-800 hover:text-primary-600 transition-colors p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile and Tablet Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } lg:hidden`}
        onClick={toggleMenu}
      />

      {/* Mobile and Tablet Navigation Menu */}
      <div
        className={`fixed right-0 top-0 h-full w-full md:w-80 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" onClick={toggleMenu}>
              <Logo />
            </Link>
            <button
              className="text-gray-800 hover:text-primary-600 transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col p-4 space-y-4">
            {isHomePage ? (
              ['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center text-gray-800 hover:text-primary-600 transition-colors py-3 px-4 text-lg font-medium rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))
            ) : (
              <Link
                to="/"
                className="flex items-center text-gray-800 hover:text-primary-600 transition-colors py-3 px-4 text-lg font-medium rounded-md hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Back to Home
              </Link>
            )}
          </nav>

          {isHomePage && <div className="mt-auto p-4 border-t">
            <a
              href="#contact"
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors text-base font-medium"
              onClick={
                toggleMenu}
            >
              Get Started
            </a>
          </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
