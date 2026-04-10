import React, { useState, useEffect } from 'react';
import menuItems from '../menu.json';
import { getFallbackProductImage, resolveProductImage } from '../utils/resolveProductImage.js';

const fallbackImage = getFallbackProductImage();

const productImages = Array.from(
  new Set(
    menuItems
      .map((item) => item.image)
      .filter(Boolean)
      .map((image) => resolveProductImage(image))
  )
);

const rotatingImages = productImages.length > 0 ? productImages : [fallbackImage];

export default function FlameSVG() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 4000);

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
      animation: 'flame-spin 12s linear infinite',
      willChange: 'transform',
    }}
    >
      <style>{`
        @keyframes flame-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <img
        src={rotatingImages[index]}
        alt="Pizza"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onError={(event) => {
          if (event.currentTarget.src !== fallbackImage) {
            event.currentTarget.src = fallbackImage;
          }
        }}
      />
    </div>
  );
}
