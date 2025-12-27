import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export interface Investment {
  id: string;
  name: string;
  location: string;
  status: string;
  availableUnits: string;
  description: string;
  features: Feature[];
  imageUrl: string;
  priceStart?: string;
}