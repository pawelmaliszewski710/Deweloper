import React, { useState } from 'react';
import { NAV_LINKS, Icons } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const startSection = document.getElementById('start');
    if (startSection) {
      startSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If the link is just "#", do nothing (specifically for Contact)
    if (href === '#') return;

    // Remove the '#' character to get the element ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu if it was open
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a 
            href="#start" 
            onClick={handleLogoClick}
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
          >
            <Icons.Logo />
            <span className="font-display font-bold text-xl text-primary tracking-tight">
              DS Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-textMain hover:text-primary transition-colors duration-200 relative group py-2 cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA / Phone */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" className="!px-5 !py-2.5 !text-xs !gap-2" href="tel:+48724000003">
              <Icons.Phone />
              <span>+48 724 000 003</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary p-2 focus:outline-none"
            >
              <Icons.Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-textMain hover:bg-background rounded-lg hover:text-primary cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <Button variant="primary" className="w-full justify-center" href="tel:+48724000003">
                +48 724 000 003
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};