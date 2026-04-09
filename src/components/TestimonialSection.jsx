import React from "react";
import { useLanguage } from '../localization.jsx';
import "./TestimonialSection.css";

const testimonials = [
  {
    name: "Arben D.",
    textKey: "testimonial1",
    location: "Prishtinë",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      url: "https://www.facebook.com/profile.php?id=61575473878653",
      icon: "facebook"
    }
  },
  {
    name: "Elira K.",
    textKey: "testimonial2",
    location: "Pejë",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      url: "https://www.instagram.com/furrapizzeria.europa/",
      icon: "instagram"
    }
  },
  {
    name: "Blerim T.",
    textKey: "testimonial3",
    location: "Gjilan",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    social: {
      url: "https://www.tiktok.com/@europa.furra.pizzeria",
      icon: "tiktok"
    }
  }
];

const SocialIcon = ({ type }) => {
  if (type === "facebook")
    return (
      <svg width="22" height="22" viewBox="0 0 320 512" fill="#1877f3">
        <path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288h81.47v224h100.2V288z"/>
      </svg>
    );
  if (type === "instagram")
    return (
      <svg width="22" height="22" viewBox="0 0 448 512" fill="#e1306c">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 7.7 353.3 6c-35.3-1.7-138.7-1.7-174 0-35.3 1.7-66.7 9.9-92.1 36.2S7.7 123.4 6 158.7c-1.7 35.3-1.7 138.7 0 174 1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2c35.3 1.7 138.7 1.7 174 0 35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.3 1.7-138.7 0-174zm-48.5 232c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.1s2.6 102.7-9 132.1z"/>
      </svg>
    );
  if (type === "tiktok")
    return (
      <svg width="22" height="22" viewBox="0 0 48 48">
        <path d="M41.5 17.5c-3.6 0-6.5-2.9-6.5-6.5h-4.1v23.2c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.2-4.8-4.8 2.2-4.8 4.8-4.8c.5 0 1 .1 1.5.2v-4.2c-.5-.1-1-.1-1.5-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V23.6c2 1.2 4.3 1.9 6.5 1.9v-4z" fill="#000"/>
      </svg>
    );
  return null;
};


const TestimonialSection = () => {
  const { t } = useLanguage();
  return (
    <section className="testimonial-section">
      <h2>{t('testimonialSection')}</h2>
      <div className="testimonials-list">
        {testimonials.map((test, i) => (
          <div className="testimonial" key={i}>
            <a href={test.social.url} target="_blank" rel="noopener noreferrer" className="testimonial-avatar-link">
              <img className="testimonial-avatar" src={test.avatar} alt={test.name} />
            </a>
            <p className="testimonial-text">“{t(test.textKey)}”</p>
            <div className="testimonial-author">
              <strong>{test.name}</strong> — <span>{test.location}</span>
              <a href={test.social.url} target="_blank" rel="noopener noreferrer" className="testimonial-social" title={test.social.icon}>
                <SocialIcon type={test.social.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
