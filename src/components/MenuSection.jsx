import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../localization.jsx';
import '../App.css';

export default function MenuSection() {
  const navigate = useNavigate();
  const { t, categoryName } = useLanguage();

  const menuCards = [
    {
      category: 'Bukë',
      title: t('menuCardBread'),
      description: t('menuCardBreadDesc'),
      mark: '01',
      symbol: '✳',
      link: '/menu?cat=buke',
    },
    {
      category: 'Burek',
      title: t('menuCardBurek'),
      description: t('menuCardBurekDesc'),
      mark: '02',
      symbol: '✦',
      link: '/menu?cat=burek',
    },
    {
      category: 'Pizza',
      title: t('menuCardPizza'),
      description: t('menuCardPizzaDesc'),
      mark: '03',
      symbol: '◉',
      link: '/menu?cat=pizza',
    },
  ];
  return (
    <section className="menuja-jone-modern">
      <h2>{t('menuSectionTitle')}</h2>
      <p>{t('menuSectionDesc')}</p>
      <div className="menuja-grid">
        {menuCards.map((card) => (
          <div
            key={card.category}
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
            <span className="menuja-card-mark">{card.mark}</span>
            <span className="menuja-card-symbol" aria-hidden="true">{card.symbol}</span>
            <div className="menuja-card-content">
              <span className="menuja-card-category">{categoryName(card.category)}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="menuja-card-link">{t('menuCardBtn')} <span aria-hidden="true">↗</span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
