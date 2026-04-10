import React from 'react';
import { useNavigate } from 'react-router-dom';
import menuItems from '../menu.json';
import { useLanguage } from '../localization.jsx';
import { resolveProductImage } from '../utils/resolveProductImage.js';
import './FeaturedProductsSection.css';

const featuredProductIds = [33, 5, 35];

export default function FeaturedProductsSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const featuredProducts = featuredProductIds
    .map((productId) => menuItems.find((product) => product.id === productId))
    .filter(Boolean)
    .map((product) => ({
      ...product,
      image: resolveProductImage(product.image),
    }));

  return (
    <section className="featured-products-section">
      <h2>{t('featuredProductsTitle')}</h2>
      <p>{t('featuredProductsDesc')}</p>
      <div className="featured-products-grid">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="featured-product-card"
            onClick={() => navigate('/menu')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                navigate('/menu');
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="featured-product-image-wrap">
              <img
                src={product.image}
                alt={product.name}
                className="featured-product-image"
              />
            </div>
            <div className="featured-product-bottom">
              <div className="featured-product-cta" aria-hidden="true">
                <span>{t('viewMenu')}</span>
              </div>
              <div className="featured-product-content">
                <span className="featured-product-category">{product.category}</span>
                <span className="featured-product-name">{product.name}</span>
                <span className="featured-product-price">{Number(product.price).toFixed(2)}€</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}