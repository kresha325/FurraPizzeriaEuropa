import { useState, useEffect } from 'react';
import './Menu.css';

const fallbackImage = 'src/assets/pizza.jpeg';

export default function Menu({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('src/menu.json')
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
              src={product.image ? product.image : fallbackImage}
              alt={product.name}
              className="product-img"
              width={80}
              height={80}
              style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
              onError={e => { e.target.onerror = null; e.target.src = fallbackImage; }}
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
