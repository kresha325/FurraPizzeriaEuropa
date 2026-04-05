import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import hero from '../assets/hero.png';
import heroBg from '../assets/hero-background.png';
import menuBg from '../assets/menu-backgraund.png';

const pizzaImages = [
  logo,
  hero,
  heroBg,
  menuBg,
];

export default function FlameSVG() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % pizzaImages.length);
    }, 1500); // 1.5 sekonda
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: 120,
      height: 120,
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 0 30px 0 #e63946',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'flame-spin 1.5s linear',
      animationIterationCount: '1',
      willChange: 'transform',
    }}
    key={index} // që të rifreskohet animacioni sa herë ndryshon foto
    >
      <style>{`
        @keyframes flame-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <img
        src={pizzaImages[index]}
        alt="Pizza"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
