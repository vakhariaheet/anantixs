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

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navigationItems = isHomePage 
    ? ['Home', 'Services', 'About Us', 'Contact'].map(item => ({
        label: item,
        path: `#${item.toLowerCase().replace(' ', '-')}`,
        isHashLink: true
      }))
    : [{ label: 'Back to Home', path: '/', isHashLink: false }];
    
  // Add Careers link to navigation
  location.pathname === '/' && navigationItems.push({
    label: 'Careers',
    path: '/careers',
    isHashLink: false
  });

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
            {navigationItems.map((item) => (
              item.isHashLink ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base px-2 py-1"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base px-2 py-1"
                >
                  {item.label}
                </Link>
              )
            ))}

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
        className={`fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-primary-600 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <ul className="space-y-4">
            {navigationItems.map((item) => (
              <li key={item.label}>
                {item.isHashLink ? (
                  <a
                    href={item.path}
                    className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base block py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-primary-600 font-medium transition-colors text-base block py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            {isHomePage && (
              <li>
                <a
                  href="#contact"
                  className="bg-primary-600 text-white px-6 py-2.5 rounded-md hover:bg-primary-700 transition-colors text-base font-medium block text-center mt-4"
                  onClick={toggleMenu}
                >
                  Get Started
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
