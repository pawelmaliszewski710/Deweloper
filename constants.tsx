import React from 'react';
import { Investment } from './types';

// Simple SVG Icons
export const Icons = {
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  Home: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ),
  Maximize: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
  ),
  Tree: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 5.3-2.1"/><path d="M7 16v6"/><path d="M13 16v-6.6"/><path d="M17 20h0a4 4 0 0 1-4-5.6V12a4 4 0 0 1 6.8-2.6 4 4 0 0 1 1.2 6.6V20Z"/></svg>
  ),
  Car: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  ),
  Menu: () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
  ),
  Logo: () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="10" fill="#0E2A25"/>
      <path d="M10 28V12L20 20L10 28Z" fill="white"/>
      <path d="M20 12V28L30 20L20 12Z" fill="#1B4D3E"/>
    </svg>
  )
};

export const INVESTMENTS: Investment[] = [
  {
    id: 'inv-001',
    name: 'Osiedle Dębowe',
    location: 'ul. Leśna 42, 05-270 Marki',
    status: 'W sprzedaży',
    availableUnits: 'Pozostało: 4/8',
    description: 'Kameralne osiedle domów jednorodzinnych w otoczeniu starodrzewu. Idealne miejsce dla rodzin szukających ciszy z szybkim dojazdem do centrum stolicy. Nowoczesna architektura łączy się tu z naturą.',
    // I replaced the local file with a high-quality placeholder that matches your description (Modern White Barn House)
    imageUrl: 'https://i.postimg.cc/7ZnySxBF/2-HD.jpg',
    features: [
      { icon: <Icons.Maximize />, label: 'Metraż', value: '145 m² - 180 m²' },
      { icon: <Icons.Tree />, label: 'Ogród', value: 'do 400 m²' },
      { icon: <Icons.Car />, label: 'Parking', value: 'Garaż + podjazd' },
      { icon: <Icons.Home />, label: 'Pokoje', value: '5 pokoi' }
    ]
  },
  {
    id: 'inv-002',
    name: 'Willa Sosnowa',
    location: 'ul. Spokojna 15, 05-120 Legionowo',
    status: 'Ostatnie domy',
    availableUnits: 'Pozostało: 2/12',
    description: 'Ekskluzywny kompleks willi miejskich o podwyższonym standardzie. Duże przeszklenia, system Smart Home w standardzie oraz prywatny park dla mieszkańców. Prestiż i komfort w każdym detalu.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2906&auto=format&fit=crop',
    features: [
      { icon: <Icons.Maximize />, label: 'Metraż', value: '160 m² - 220 m²' },
      { icon: <Icons.Tree />, label: 'Ogród', value: 'do 600 m²' },
      { icon: <Icons.Car />, label: 'Parking', value: 'Garaż dwustanowiskowy' },
      { icon: <Icons.Home />, label: 'Standard', value: 'Premium' }
    ]
  }
];

export const NAV_LINKS = [
  { label: 'Szmaragdowa', href: '#inv-001' },
  { label: 'Brylantowa', href: '#inv-002' },
  { label: 'Kontakt', href: '#' },
];