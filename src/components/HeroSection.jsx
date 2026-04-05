import React from 'react';
import FlameSVG from './FlameSVG.jsx';
import '../theme.css';

const pizzaImg = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';


export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url(${pizzaImg}) center/cover no-repeat`,
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, rgba(15,15,15,0.82) 60%, rgba(230,57,70,0.18) 100%)',
          zIndex: 1,
        }}
      />
      {/* Pizza anim (SVG) */}
      <div
        style={{
          position: 'absolute',
          left: '8%',
          bottom: '10%',
          zIndex: 3,
          width: 120,
          height: 120,
          animation: 'spin 7s linear infinite',
        }}
      >
        <svg viewBox="0 0 120 120" width="120" height="120">
          <circle cx="60" cy="60" r="58" fill="#f9d390" stroke="#e63946" strokeWidth="4" />
          <path d="M60 10 L110 60 A50 50 0 1 1 60 10" fill="#e63946" />
          <circle cx="80" cy="40" r="8" fill="#fff" />
          <circle cx="45" cy="70" r="7" fill="#fff" />
          <circle cx="70" cy="90" r="6" fill="#fff" />
        </svg>
      </div>
      {/* Flame effect */}
      <FlameSVG />
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          color: 'var(--color-text)',
          width: '100%',
          maxWidth: 600,
          margin: '0 auto',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.1em',
        }}
      >
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: 700,
            letterSpacing: 1,
            marginBottom: 0,
            textShadow: '0 4px 32px #000a',
            opacity: 0,
            animation: 'fadeIn 1.2s 0.2s forwards',
          }}
        >
          Furra & Piceria Europa
        </h1>
        <button
          className="btn-primary"
          style={{
            marginTop: 0,
            fontSize: '1.25rem',
            opacity: 0,
            animation: 'fadeIn 1.2s 0.7s forwards',
            order: 2,
          }}
        >
          Shiko Menunë
        </button>
        <div
          className="hero-subtitle"
          style={{
            color: '#fff',
            fontSize: '1.15rem',
            fontWeight: 500,
            textShadow: '0 3px 16px #000c, 0 1px 2px #000a',
            background: 'rgba(0,0,0,0.32)',
            borderRadius: 10,
            padding: '0.5em 1.2em',
            margin: 0,
            order: 3,
            opacity: 0,
            animation: 'fadeIn 1.2s 1.1s forwards',
            display: 'inline-block',
          }}
        >
          Mirë se vini në faqen tonë zyrtare! Shijoni bukën dhe picat më të mira në qytet.
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
