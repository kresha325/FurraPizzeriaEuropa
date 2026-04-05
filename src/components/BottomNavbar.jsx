import { Link } from 'react-router-dom';

export default function BottomNavbar({ cartCount = 0 }) {
  return (
    <nav className="bottom-navbar">
      <Link to="/">Kryefaqja</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart" className="cart-link">
        Shporta
        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
      </Link>
    </nav>
  );
}
