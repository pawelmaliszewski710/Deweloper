import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InvestmentCard } from './components/InvestmentCard';
import { Button } from './components/Button';
import { INVESTMENTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        
        {/* Intro / Hero Minimal Section */}
        <section id="start" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center scroll-mt-24">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-primary text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            Deweloper Nieruchomości Premium
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
            Znajdź swoje miejsce <br className="hidden md:block"/> w harmonii z naturą
          </h1>
          <div id="onas" className="scroll-mt-28">
            <p className="max-w-2xl mx-auto text-textMuted text-lg leading-relaxed">
              Tworzymy kameralne osiedla, które łączą nowoczesną architekturę z bliskością przyrody. 
              Poznaj nasze aktualne realizacje pod Warszawą.
            </p>
          </div>
        </section>

        {/* Investments Section - The Core Layout */}
        <section id="inwestycje" className="py-12 md:py-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary">Nasze Inwestycje</h2>
                <div className="h-1 w-20 bg-secondary mt-2 rounded-full"></div>
              </div>
              <span className="hidden md:block text-textMuted text-sm">
                Aktualnie w sprzedaży: <span className="text-primary font-semibold">2 osiedla</span>
              </span>
            </div>

            <div className="space-y-16">
              {INVESTMENTS.map((investment, index) => (
                <InvestmentCard 
                  key={investment.id} 
                  investment={investment} 
                  reverse={index % 2 !== 0} // Alternating layout
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (Optional Filler for vibe) */}
        <section id="spotkanie" className="py-20 bg-white scroll-mt-20">
           <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-display font-bold text-primary mb-6">
               Nie wiesz, co wybrać?
             </h2>
             <p className="text-textMuted mb-8">
               Skontaktuj się z naszym doradcą. Pomożemy Ci wybrać dom idealnie dopasowany do potrzeb Twojej rodziny.
             </p>
             <Button href="#kontakt" variant="primary">
               Umów bezpłatną prezentację
             </Button>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;