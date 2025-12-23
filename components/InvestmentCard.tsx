import React from 'react';
import { Investment } from '../types';
import { Button } from './Button';
import { Icons } from '../constants';

interface InvestmentCardProps {
  investment: Investment;
  reverse?: boolean;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({ investment, reverse = false }) => {
  return (
    <div 
      id={investment.id}
      className="group bg-surface rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-500 ease-out transform hover:-translate-y-2 flex flex-col lg:flex-row h-auto w-full border border-gray-100 scroll-mt-28"
    >
      {/* Image Section */}
      <div className={`relative w-full lg:w-[55%] h-64 lg:h-auto overflow-hidden ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <img 
          src={investment.imageUrl} 
          alt={investment.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        <div className="absolute top-6 left-6 bg-accent/95 backdrop-blur-sm border border-primary/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-primary font-semibold text-xs tracking-wide uppercase">
            {investment.status} <span className="mx-1 opacity-40">|</span> {investment.availableUnits}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className={`w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="flex flex-col gap-6">
          
          {/* Header */}
          <div>
            <h3 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-3">
              {investment.name}
            </h3>
            <div className="flex items-center text-textMuted gap-2">
              <Icons.MapPin />
              <span className="text-sm font-medium">{investment.location}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-100"></div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {investment.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="text-primary/70 mt-1">
                  {feature.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-textMuted font-medium uppercase tracking-wider">{feature.label}</span>
                  <span className="text-textMain font-semibold text-sm">{feature.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-textMuted leading-relaxed text-sm lg:text-base">
            {investment.description}
          </p>

          {/* Action */}
          <div className="pt-2">
            <Button variant="primary" icon={<Icons.ArrowRight />} className="w-full sm:w-auto" href="#kontakt">
              Zobacz Inwestycję
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};