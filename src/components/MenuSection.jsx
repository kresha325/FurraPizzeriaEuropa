import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const menuCards = [
  {
    category: 'Bukë',
    title: 'Bukë të freskëta',
    description: 'Bukë tradicionale, e pjekur çdo ditë.',
    image: '/src/assets/pizza.jpeg',
    link: '/menu?cat=buke',
  },
  {
    category: 'Burek',
    title: 'Burek të ngrohtë',
    description: 'Burek me mish, djath ose spinaq.',
    image: '/src/assets/pizza.jpeg',
    link: '/menu?cat=burek',
  },
  {
    category: 'Pizza',
    title: 'Pizza italiane',
    description: 'Pizza me përbërës të freskët dhe recetë tradicionale.',
    image: '/src/assets/pizza.jpeg',
    link: '/menu?cat=pizza',
  },
];

export default function MenuSection() {
  const navigate = useNavigate();
  return (
    <section className="menuja-jone-modern">
      <h2>Menuja jonë</h2>
      <p>Zgjidh kategorinë tënde të preferuar!</p>
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
              onError={e => { e.target.onerror = null; e.target.src = '/src/assets/pizza.jpeg'; }}
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button>Shiko menunë</button>
          </div>
        ))}
      </div>
    </section>
  );
}
