import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo.png';
import heroBg from '../assets/hero-background.png';
import { useLanguage } from '../localization.jsx';

export default function Header({ cartCount = 0 }) {
  const { t, lang, setLang } = useLanguage();

  return (
    <header
      className="hero-header"
      style={{ '--hero-image': `url(${heroBg})` }}
    >
      <nav className="site-nav">
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

      <div className="hero-content">
        <span className="eyebrow"><span aria-hidden="true">✳</span> {t('freshTradition')}</span>
        <h1>{t('heroTitle').split('\n').map((line, index) => (
          <React.Fragment key={line}>
            {index > 0 && <br />}
            {line}
          </React.Fragment>
        ))}</h1>
        <p>{t('welcome')}</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/menu">
            {t('viewMenu')} <span aria-hidden="true">↗</span>
          </Link>
          <a className="button button-quiet" href="https://wa.me/38349591200">
            {t('orderWhatsApp')}
          </a>
        </div>
        <div className="hero-note">
          <span className="hero-note-mark" aria-hidden="true">✦</span>
          <span>{t('heroNote')}</span>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true" />
    </header>
  );
}
