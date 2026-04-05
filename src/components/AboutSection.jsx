import React from 'react';
import '../theme.css';

const aboutImg = 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80'; // Ambient ose kuzhinë

export default function AboutSection() {
  return (
    <section style={{
      background: 'var(--color-bg)',
      padding: '4rem 0',
      minHeight: 350,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 48,
        maxWidth: 1100,
        width: '100%',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        {/* Teksti majtas */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 style={{
            fontSize: '2.1rem',
            fontWeight: 700,
            color: 'var(--color-accent)',
            marginBottom: 18,
          }}>
            Rreth Nesh
          </h2>
          <p style={{ color: 'var(--color-text)', fontSize: '1.13rem', opacity: 0.92, marginBottom: 18 }}>
            Jemi një furrë dhe piceri familjare me traditë. Furra & Piceria jonë sjell shijen autentike në qytetin tuaj. Çdo produkt përgatitet me përbërës të freskët, recetë origjinale dhe dashuri për cilësinë.
          </p>
          <ul style={{ color: 'var(--color-text)', opacity: 0.88, fontSize: '1.05rem', marginLeft: 18, marginBottom: 18 }}>
            <li>Brumë i freskët çdo ditë</li>
            <li>Pjekje në furrë tradicionale</li>
            <li>Përbërës të zgjedhur me kujdes</li>
          </ul>
        </div>
        {/* Foto djathtas */}
        <div style={{ flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center' }}>
          <img
            src={aboutImg}
            alt="Ambienti i picerisë"
            loading="lazy"
            style={{
              width: '100%',
              maxWidth: 400,
              borderRadius: 'var(--radius)',
              boxShadow: '0 8px 32px 0 rgba(230,57,70,0.13)',
              objectFit: 'cover',
              aspectRatio: '4/3',
            }}
          />
        </div>
      </div>
    </section>
  );
}
