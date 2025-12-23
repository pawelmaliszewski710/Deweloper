import React from 'react';
import { Icons } from '../constants';

const FOOTER_LINKS = [
  { label: 'Start', href: '#start' },
  { label: 'Nasze Inwestycje', href: '#inwestycje' },
  { label: 'O deweloperze', href: '#onas' },
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'Polityka prywatności', href: '#' }
];

export const Footer: React.FC = () => {
  return (
    <footer id="kontakt" className="bg-primary text-white pt-20 pb-10 mt-auto scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Developer */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-lg">
                <Icons.Logo />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">DS Dev</span>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed space-y-1">
              <p>DS DEVELOPMENT Sp. z o.o.</p>
              <p>ul. Inwestorska 12</p>
              <p>00-123 Warszawa</p>
            </div>
            <div className="text-gray-400 text-xs">
              <p>NIP: 123-456-78-90</p>
              <p>KRS: 0000123456</p>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white/90">Menu</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Adresy */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white/90">Inwestycje</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-white text-sm mb-1">Osiedle Dębowe</h5>
                <p className="text-gray-300 text-xs">ul. Leśna 42</p>
                <p className="text-gray-300 text-xs">05-270 Marki</p>
              </div>
              <div>
                <h5 className="font-semibold text-white text-sm mb-1">Willa Sosnowa</h5>
                <p className="text-gray-300 text-xs">ul. Spokojna 15</p>
                <p className="text-gray-300 text-xs">05-120 Legionowo</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white/90">Umów spotkanie</h4>
            <p className="text-gray-300 text-sm mb-6">
              Zapraszamy do kontaktu z naszym biurem sprzedaży.
            </p>
            <div className="space-y-4">
              <a href="tel:+48724000003" className="block text-2xl font-display font-bold hover:text-green-300 transition-colors">
                724 000 003
              </a>
              <a href="mailto:sprzedaz@dsdev.pl" className="block text-gray-300 hover:text-white transition-colors text-sm">
                sprzedaz@dsdev.pl
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 DS Dev. Wszelkie prawa zastrzeżone.</p>
          <p>Realizacja: FrontendExpert</p>
        </div>

      </div>
    </footer>
  );
};