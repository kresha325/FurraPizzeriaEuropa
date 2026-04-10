
import React from 'react';
import logo from '../assets/logo.png';
import { useLanguage } from '../localization.jsx';

export default function Footer() {
  const { t, lang } = useLanguage();
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '2rem 0', marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', maxWidth: 1200, margin: '0 auto', flexWrap: 'wrap', gap: '2rem' }}>
        {/* Left: Business Info */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: 8 }}>
            <img src={logo} alt="Europa Logo" style={{ width: 60, height: 60, borderRadius: 8, background: 'none' }} />
            <span style={{ fontWeight: 'bold', fontSize: 20, textShadow: '0 2px 8px #000, 0 4px 16px #000a' }}>Europa</span>
          </div>
          <div style={{ fontSize: 15, marginBottom: 4 }}>
            {t('address')}: <a href="https://www.google.com/maps/search/?api=1&query=85+Ibrahim+Rugova,+Grackë+14000" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>
              85 Ibrahim Rugova, Grackë 14000
            </a>
          </div>
          <div style={{ fontSize: 15, marginBottom: 4 }}>{t('email')}: <a href="mailto:furrapizzeria.europa@icloud.com" style={{ color: '#fff' }}>furrapizzeria.europa@icloud.com</a></div>
          <div style={{ fontSize: 15 }}>
            {t('phone')}: <a href="https://wa.me/38349591200" style={{ color: '#25d366' }}>+38349591200</a>
          </div>
        </div>
        {/* Center: Socials */}
        <div style={{ flex: 1, minWidth: 180, textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold', marginBottom: 8 }}>{t('followUs')}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
            <a
              href="https://www.facebook.com/profile.php?id=61575473878653"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#222',
                color: '#fff',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                transition: 'transform 0.18s',
                border: '2px solid #fff2',
                outline: 'none',
              }}
              title="Facebook"
              aria-label="Facebook"
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="26" height="26" viewBox="0 0 320 512" fill="white" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/furrapizzeria.europa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#222',
                color: '#fff',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                transition: 'transform 0.18s',
                border: '2px solid #fff2',
                outline: 'none',
              }}
              title="Instagram"
              aria-label="Instagram"
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="26" height="26" viewBox="0 0 448 512" fill="white" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 7.7 353.3 6c-35.3-1.7-138.7-1.7-174 0-35.3 1.7-66.7 9.9-92.1 36.2S7.7 123.4 6 158.7c-1.7 35.3-1.7 138.7 0 174 1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.3 1.7 138.7 1.7 174 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.3 1.7-138.7 0-174zm-48.5 232c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.1s2.6 102.7-9 132.1z"/></svg>
            </a>
            <a
              href="https://www.tiktok.com/@europa.furra.pizzeria"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#222',
                color: '#fff',
                width: 44,
                height: 44,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                transition: 'transform 0.18s',
                border: '2px solid #fff2',
                outline: 'none',
              }}
              title="TikTok"
              aria-label="TikTok"
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.12)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M41.5 17.5c-3.6 0-6.5-2.9-6.5-6.5h-4.1v23.2c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8 2.2-4.8 4.8-4.8c.5 0 1 .1 1.5.2v-4.2c-.5-.1-1-.1-1.5-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V23.6c2 1.2 4.3 1.9 6.5 1.9v-4z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Google Map */}
        <div style={{ flex: 1, minWidth: 260, textAlign: 'right' }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=42.5090158,21.1122287"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('openMap')}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 160,
              padding: '1rem',
              borderRadius: 16,
              background: 'linear-gradient(135deg, #fff8eb 0%, #fef3c7 100%)',
              color: '#2d1b0e',
              textDecoration: 'none',
              boxShadow: '0 10px 24px #00000024',
              border: '1px solid #ffffff1f',
              textAlign: 'left',
            }}
          >
            <div>
              <div style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>{t('mapLocationTitle')}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: '#5c4032' }}>
                85 Ibrahim Rugova, Gracke 14000
              </div>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                width: 'fit-content',
                marginTop: 16,
                padding: '0.7rem 1rem',
                borderRadius: 999,
                background: '#dc2626',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              <span aria-hidden="true">📍</span>
              <span>{t('openMap')}</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
