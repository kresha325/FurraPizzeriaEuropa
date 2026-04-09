



import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-background.png';
import { useTheme } from '../theme-context.jsx';
import { useLanguage } from '../localization.jsx';

export default function Navbar({ cartCount = 0 }) {
  const { t, lang, setLang } = useLanguage();
  const { theme } = useTheme();
  return (
    <nav style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2rem',
      background: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderBottom: '1px solid #fff2',
      color: 'var(--color-text)'
    }}>
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.65)',
        zIndex: 0,
        borderRadius: 0
      }} />
      <div className="navbar-logo-title" style={{ display: 'flex', alignItems: 'center', gap: 12, zIndex: 1 }}>
        <img src={logo} alt="Europa Logo" style={{ width: 60, height: 60, borderRadius: 8, background: 'none' }} />
        <span style={{ fontWeight: 'bold', fontSize: 22, letterSpacing: 1, color: '#fff', textShadow: '0 2px 8px #000, 0 4px 16px #000a' }}>Europa</span>
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
      <div className="navbar-topnav-links" style={{ display: 'flex', gap: 24, fontSize: 17, alignItems: 'center', zIndex: 2 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: '#fff',
            background: isActive ? 'var(--secondary)' : 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: 18,
            boxShadow: '0 2px 8px #dc262620',
            transition: 'background 0.18s',
            border: 'none',
            fontSize: 17
          })}
        >{t('home')}</NavLink>
        <NavLink
          to="/menu"
          style={({ isActive }) => ({
            color: '#fff',
            background: isActive ? 'var(--secondary)' : 'var(--primary)',
            textDecoration: 'none',
            fontWeight: 600,
            padding: '8px 18px',
            borderRadius: 18,
            boxShadow: '0 2px 8px #dc262620',
            transition: 'background 0.18s',
            border: 'none',
            fontSize: 17
          })}
        >{t('menu')}</NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: '#fff',
            background: isActive ? 'var(--secondary)' : 'var(--primary)',
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
          })}
          aria-label={t('cart')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 16l-.94-2H19a1 1 0 0 0 .96-.73l2-7A1 1 0 0 0 21 5H6.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A1.992 1.992 0 0 0 5 19c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 0-.9-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A1.992 1.992 0 0 0 5 19c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63z" />
          </svg>
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: -8, right: -16, background: 'var(--color-primary)', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: 13, fontWeight: 600, minWidth: 22, textAlign: 'center' }}>{cartCount}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
