import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import { Home, Menu, Cart, NotFound } from './pages';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import BottomNavbar from '../src/components/BottomNavbar.jsx';
import { useState } from 'react';


function HeaderOrNavbar({ cartCount }) {
  const location = useLocation();
  if (location.pathname === '/') return <Header cartCount={cartCount} />;
  return <Navbar cartCount={cartCount} />;
}

export default function AppRouter() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };


  return (
    <Router basename="/FurraPizzeriaEuropa">
      <>
        <HeaderOrNavbar cartCount={cart.length} />
        <div style={{ minHeight: '60vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu onAddToCart={handleAddToCart} />} />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onRemove={handleRemove}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <BottomNavbar cartCount={cart.length} />
      </>
    </Router>
  );
}
