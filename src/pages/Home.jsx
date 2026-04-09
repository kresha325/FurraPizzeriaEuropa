
import { Link } from 'react-router-dom';
import MenuSection from '../components/MenuSection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import { useLanguage } from '../localization.jsx';

export default function Home() {
  const { t } = useLanguage();
  const phone = '+383 49 591 200';
  return (
    <div>
      <MenuSection />

      {/* About Section */}
      <section style={{ padding: '2rem 0', maxWidth: 800, margin: '0 auto' }}>
        <h2>{t('about')}</h2>
        <p>{t('aboutText')}</p>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Menu Section */}
      <section style={{ padding: '2rem 0', background: '#f0f0f0' }}>
        <h2>{t('menu')}</h2>
        <p>
          {t('viewMenu')}: <Link to="/menu" style={{ color: '#b22222', textDecoration: 'underline' }}>{t('menu')}</Link>
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '2rem 0', maxWidth: 800, margin: '0 auto' }}>
        <h2>{t('contact')}</h2>
        <p>
          {t('contactText').replace('{phone}', phone).split('\n').map((line, i) => (
            <span key={i}>
              {line.includes(phone) ? (
                <a href="https://wa.me/38349591200" style={{ color: '#25d366' }}>{phone}</a>
              ) : line}
              <br />
            </span>
          ))}
        </p>
      </section>
    </div>
  );
}
