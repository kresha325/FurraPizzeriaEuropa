
import { Link } from 'react-router-dom';
import FeaturedProductsSection from '../components/FeaturedProductsSection.jsx';
import MenuSection from '../components/MenuSection.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';
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

      <FeaturedProductsSection />

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

      <ScrollToTopButton />
    </div>
  );
}
