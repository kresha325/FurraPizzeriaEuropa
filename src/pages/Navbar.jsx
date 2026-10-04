import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useLanguage } from '../localization.jsx';

export default function Navbar({ cartCount = 0 }) {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="inner-page-header">
      <nav className="site-nav site-nav-inner">
        <Link className="brand" to="/" aria-label={t('brandHomeLabel')}>
          <img src={logo} alt="" />
          <span className="brand-copy">
            <strong>Europa</strong>
            <small>{t('bakeryTagline')}</small>
          </span>
        </Link>
        <div className="desktop-nav">
          <NavLink to="/">{t('home')}</NavLink>
          <NavLink to="/menu">{t('menu')}</NavLink>
          <NavLink className="nav-cart" to="/cart">
            {t('cart')}
            {cartCount > 0 && <span className="nav-cart-count">{cartCount}</span>}
          </NavLink>
        </div>
        <label className="language-picker">
          <span className="sr-only">{t('languageLabel')}</span>
          <select value={lang} onChange={(event) => setLang(event.target.value)}>
            <option value="sq">SQ</option>
            <option value="en">EN</option>
          </select>
        </label>
      </nav>
    </header>
  );
}
