



import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-background.png';
import { useTheme } from '../theme-context.jsx';

export default function Navbar({ cartCount = 0 }) {
  const { theme, toggleTheme } = useTheme();
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
      </div>
      <div className="navbar-topnav-links" style={{ display: 'flex', gap: 24, fontSize: 17, alignItems: 'center' }}>
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
        }}>Kryefaqja</Link>
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
        }}>Menu</Link>
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
        }} aria-label="Shporta">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.16 16l-.94-2H19a1 1 0 0 0 .96-.73l2-7A1 1 0 0 0 21 5H6.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A1.992 1.992 0 0 0 5 19c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 0-.9-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A1.992 1.992 0 0 0 5 19c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63z" />
          </svg>
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: -8, right: -16, background: 'var(--color-primary)', color: '#fff', borderRadius: '50%', padding: '2px 8px', fontSize: 13, fontWeight: 600, minWidth: 22, textAlign: 'center' }}>{cartCount}</span>
          )}
        </Link>
        <button onClick={toggleTheme} style={{
          background: 'none',
          border: 'none',
          color: 'var(--color-text)',
          fontSize: 22,
          cursor: 'pointer',
          marginLeft: 10
        }} title={theme === 'dark' ? 'Ndrysho në dritë' : 'Ndrysho në errësirë'}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
