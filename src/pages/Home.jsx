
import MenuSection from '../components/MenuSection.jsx';
import TestimonialSection from '../components/TestimonialSection.jsx';

export default function Home() {
  // const { theme } = useTheme();
  return (
    <div>
      <MenuSection />


      {/* About Section */}
      <section style={{ padding: '2rem 0', maxWidth: 800, margin: '0 auto' }}>
        <h2>Rreth Nesh</h2>
        <p>
          Jemi një furrë dhe piceri familjare me traditë, që ofrojmë produkte të freskëta çdo ditë. Përdorim përbërës cilësorë dhe recetat më të mira për të kënaqur çdo shije.
        </p>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Menu Section */}
      <section style={{ padding: '2rem 0', background: '#f0f0f0' }}>
        <h2>Menu</h2>
        <p>
          Shikoni <a href="/menu" style={{ color: '#b22222', textDecoration: 'underline' }}>menunë tonë</a> për të porositur bukë, pica dhe produkte të tjera të shijshme.
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ padding: '2rem 0', maxWidth: 800, margin: '0 auto' }}>
        <h2>Kontakt</h2>
        <p>
          Na kontaktoni në WhatsApp: <a href="https://wa.me/38349591200" style={{ color: '#25d366' }}>+383 49 591 200</a><br />
          Ose na vizitoni në lokacionin tonë për të provuar produktet tona të freskëta.
        </p>
      </section>
    </div>
  );
}
