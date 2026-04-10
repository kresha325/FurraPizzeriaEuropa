import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../localization.jsx';
import { getPublicAssetPath } from '../utils/publicAssetPath.js';
import '../App.css';

export default function MenuSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const cardImage = getPublicAssetPath('images/pizza.jpeg');

  const menuCards = [
    {
      category: 'Bukë',
      title: t('menuCardBread'),
      description: t('menuCardBreadDesc'),
      image: cardImage,
      link: '/menu?cat=buke',
    },
    {
      category: 'Burek',
      title: t('menuCardBurek'),
      description: t('menuCardBurekDesc'),
      image: cardImage,
      link: '/menu?cat=burek',
    },
    {
      category: 'Pizza',
      title: t('menuCardPizza'),
      description: t('menuCardPizzaDesc'),
      image: cardImage,
      link: '/menu?cat=pizza',
    },
  ];
  return (
    <section className="menuja-jone-modern">
      <h2>{t('menuSectionTitle')}</h2>
      <p>{t('menuSectionDesc')}</p>
      <div className="menuja-grid">
        {menuCards.map((card, i) => (
          <div
            key={i}
            className="menuja-card"
            onClick={() => navigate(card.link)}
            tabIndex={0}
            role="button"
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(card.link);
              }
            }}
          >
            <div className="menuja-card-image-wrap">
              <img
                src={card.image}
                alt={card.title}
                onError={e => { e.target.onerror = null; e.target.src = cardImage; }}
              />
            </div>
            <div className="menuja-card-bottom">
              <div className="menuja-card-cta" aria-hidden="true">
                <span>{t('menuCardBtn')}</span>
              </div>
              <div className="menuja-card-content">
                <span className="menuja-card-category">{card.category}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
