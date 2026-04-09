
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../localization.jsx';
import { getPublicAssetPath } from '../utils/publicAssetPath.js';
import './Menu.css';

const getFallbackImage = () => getPublicAssetPath('images/pizza.jpeg');

export default function Menu({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useLanguage();

  useEffect(() => {
    const menuPath = getPublicAssetPath('menu.json');

    fetch(menuPath)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Merr kategoritë unike
  const categories = Array.from(new Set(products.map(p => p.category)));
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="menu-container">
      <h1>{t('menuPageTitle')}</h1>
      <p className="menu-subtext">{t('menuPageSub')}</p>

      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <label htmlFor="category-filter" style={{ fontWeight: 600, marginRight: 8 }}>{t('filterByCategory')}</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          style={{ padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 16 }}
        >
          <option value="all">{t('allCategories')}</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card modern" key={product.id}>
            <div className="product-img-top">
              <img
                src={product.image ? product.image : getFallbackImage()}
                alt={product.name}
                className="product-img-modern"
                onError={e => {
                  const fallback = getFallbackImage();
                  if (e.target.src !== window.location.origin + fallback && e.target.src !== fallback) {
                    e.target.onerror = null;
                    e.target.src = fallback;
                  }
                }}
              />
            </div>
            <div className="product-card-bottom">
              <div className="product-btn-circle">
                <button className="add-btn-circle" onClick={() => onAddToCart(product)}>
                  <span className="cart-icon" aria-hidden="true">🛒</span>
                </button>
              </div>
              <div className="product-info-modern">
                <span className="product-name-modern">{product.name}</span>
                <span className="product-price-modern">{Number(product.price).toFixed(2)}€</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
