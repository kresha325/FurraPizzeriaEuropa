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
            onKeyDown={e => { if (e.key === 'Enter') navigate(card.link); }}
          >
            <img
              src={card.image}
              alt={card.title}
              onError={e => { e.target.onerror = null; e.target.src = cardImage; }}
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>{t('menuCardBtn')}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
