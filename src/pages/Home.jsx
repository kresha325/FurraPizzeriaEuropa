
import FeaturedProductsSection from '../components/FeaturedProductsSection.jsx';
import MenuSection from '../components/MenuSection.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';
import { useLanguage } from '../localization.jsx';
import logo from '../assets/logo.png';

export default function Home() {
  const { t } = useLanguage();
  const phone = '+383 49 591 200';
  return (
    <main className="home-page">
      <MenuSection />

      <section className="about-section">
        <div className="about-mark">
          <img src={logo} alt={t('bakery')} />
        </div>
        <div className="about-copy">
          <span className="section-kicker">{t('bakery')}</span>
          <h2>{t('about')}</h2>
          <p>{t('aboutText')}</p>
          <div className="about-points">
            <span><i aria-hidden="true">✓</i> {t('freshDaily')}</span>
            <span><i aria-hidden="true">✓</i> {t('traditionalTaste')}</span>
            <span><i aria-hidden="true">✓</i> {t('madeWithCare')}</span>
          </div>
        </div>
      </section>

      <TestimonialSection />
      <FeaturedProductsSection />

      <section className="contact-section">
        <div className="contact-copy">
          <span className="section-kicker">{t('contact')}</span>
          <h2>{t('contactTitle').split('\n').map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}</h2>
          <p>
          {t('contactText').replace('{phone}', phone).split('\n').map((line, i) => (
            <span key={i}>
              {line.includes(phone) ? (
                <a href="https://wa.me/38349591200">{phone}</a>
              ) : line}
              <br />
            </span>
          ))}
          </p>
        </div>
        <a className="button button-primary contact-button" href="https://wa.me/38349591200">
          {t('sendWhatsapp')} <span aria-hidden="true">↗</span>
        </a>
      </section>

      <ScrollToTopButton />
    </main>
  );
}
