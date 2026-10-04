import { NavLink } from 'react-router-dom';
import { useLanguage } from '../localization.jsx';

export default function BottomNavbar({ cartCount = 0 }) {
  const { t } = useLanguage();

  return (
    <nav className="bottom-navbar">
      <NavLink to="/">
        <span aria-hidden="true">⌂</span>
        {t('home')}
      </NavLink>
      <NavLink to="/menu">
        <span aria-hidden="true">☷</span>
        {t('menu')}
      </NavLink>
      <NavLink to="/cart" className="cart-link">
        <span aria-hidden="true">＋</span>
        {t('cart')}
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </NavLink>
    </nav>
  );
}
