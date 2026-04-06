
import { useState, useEffect } from 'react';
import './Menu.css';

// Dinamikisht përcakto rrugën e fallbackImage sipas ambientit
const getFallbackImage = () => {
  if (window.location.pathname.startsWith('/FurraPizzeriaEuropa')) {
    return '/FurraPizzeriaEuropa/pizza.jpeg';
  }
  return '/pizza.jpeg';
};

export default function Menu({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Dinamikisht përcakto rrugën e menu.json
    const menuPath = window.location.pathname.startsWith('/FurraPizzeriaEuropa')
      ? '/FurraPizzeriaEuropa/menu.json'
      : '/menu.json';
    fetch(menuPath)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <p className="menu-subtext">Përzgjidh sipas shijes tuaj ose gjej ushqimin tënd të parapëlqyer!</p>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image ? product.image : getFallbackImage()}
              alt={product.name}
              className="product-img"
              width={80}
              height={80}
              style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
              onError={e => {
                const fallback = getFallbackImage();
                if (e.target.src !== window.location.origin + fallback && e.target.src !== fallback) {
                  e.target.onerror = null;
                  e.target.src = fallback;
                }
              }}
            />
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">{Number(product.price).toFixed(2)}€</span>
            </div>
            <button className="add-btn" onClick={() => onAddToCart(product)}>
              Shto në shportë
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
