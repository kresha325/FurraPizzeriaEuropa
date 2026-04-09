import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-background.png';
import { useTheme } from '../theme-context.jsx';
import { useLanguage } from '../localization.jsx';
import FlameSVG from '../components/FlameSVG.jsx';

export default function Header({ cartCount = 0 }) {
  const { t, lang, setLang } = useLanguage();
  const { theme } = useTheme();
  return (
    <header style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--color-text)',
      paddingBottom: '2.5rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
    }}>
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 2rem', background: 'rgba(0,0,0,0.45)', borderBottom: '1px solid #fff2' }}>
        <div className="header-logo-title" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="Europa Logo" style={{ width: 60, height: 60, borderRadius: 8, background: 'none' }} />
          <span style={{ fontWeight: 'bold', fontSize: 22, letterSpacing: 1, color: '#fff' }}>Europa</span>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 16, gap: 6 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 24 24" style={{ verticalAlign: 'middle' }}>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c1.657 0 3.156.672 4.242 1.758A5.978 5.978 0 0 0 12 6c-1.657 0-3.156-.672-4.242-1.758A5.978 5.978 0 0 0 12 4zm-8 8c0-1.306.417-2.512 1.125-3.488C6.07 9.165 8.92 10 12 10s5.93-.835 6.875-1.488A7.963 7.963 0 0 1 20 12c0 .34-.024.674-.062 1.004C18.93 12.835 16.08 12 12 12s-6.93.835-7.938 1.004A7.963 7.963 0 0 1 4 12zm8 8c-1.657 0-3.156-.672-4.242-1.758A5.978 5.978 0 0 0 12 18c1.657 0 3.156.672 4.242 1.758A5.978 5.978 0 0 0 12 20zm6.875-2.512C17.93 14.835 15.08 14 12 14s-5.93.835-6.875 1.488A7.963 7.963 0 0 1 4 12c0-.34.024-.674.062-1.004C5.07 11.165 7.92 12 12 12s6.93-.835 7.938-1.004A7.963 7.963 0 0 1 20 12c0 1.306-.417 2.512-1.125 3.488z"/>
            </svg>
            <select style={{ borderRadius: 8, padding: '2px 8px', fontWeight: 600, fontSize: 15, border: 'none', background: '#fff2', color: '#fff', outline: 'none', cursor: 'pointer' }} value={lang} onChange={e => setLang(e.target.value)}>
              <option value="sq">Shqip</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <div className="header-topnav-links" style={{ display: 'flex', gap: 24, fontSize: 17, alignItems: 'center' }}>
          <Link to="/" style={{
            color: '#fff',
            background: 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: 18,
            boxShadow: '0 2px 8px #dc262620',
            transition: 'background 0.18s',
            border: 'none',
            fontSize: 17
          }}>{t('home')}</Link>
          <Link to="/menu" style={{
            color: '#fff',
            background: 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: 18,
            boxShadow: '0 2px 8px #dc262620',
            transition: 'background 0.18s',
            border: 'none',
            fontSize: 17
          }}>{t('menu')}</Link>
          <Link to="/cart" style={{
            color: '#fff',
            background: 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: 18,
            boxShadow: '0 2px 8px #dc262620',
            transition: 'background 0.18s',
            border: 'none',
            fontSize: 17,
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }} aria-label={t('cart')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 20c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16l.94-2h7.453l.94 2H7.334zM21 6h-2.184l-1.724-3.447A1 1 0 0 0 16.184 2H7.816a1 1 0 0 0-.908.553L5.184 6H3a1 1 0 0 0 0 2h1l3.6 7.59a1 1 0 0 0 .9.41h7a1 1 0 0 0 .9-.41L20 8h1a1 1 0 0 0 0-2zm-4.42 8H7.42l-2.72-5h13.6l-2.72 5z" />
            </svg>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -8, right: -16, background: '#b22222', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: 13, fontWeight: 600, minWidth: 22, textAlign: 'center' }}>{cartCount}</span>
            )}
          </Link>
        </div>
      </nav>
      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '3.5rem 1rem 1.5rem 1rem', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 16, textShadow: theme === 'dark' ? '0 2px 8px #000, 0 4px 16px #000a' : '0 2px 8px #fff, 0 4px 16px #fff8', color: 'var(--color-text)' }}>{t('bakery')}</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: 24, textShadow: theme === 'dark' ? '0 2px 8px #000, 0 4px 16px #000a' : '0 2px 8px #fff, 0 4px 16px #fff8', color: 'var(--color-text)' }}>{t('welcome')}</p>
        <Link to="/menu" style={{ background: '#b22222', color: '#fff', padding: '0.7rem 2.2rem', borderRadius: 24, fontWeight: 600, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #0003' }}>
          {t('viewMenu')}
        </Link>
      </div>
      {/* FlameSVG fixed bottom left */}
      <div style={{
        position: 'fixed',
        left: 24,
        bottom: 80,
        zIndex: 9999,
        pointerEvents: 'none',
      }}>
        <FlameSVG />
      </div>
    </header>
  );
}
