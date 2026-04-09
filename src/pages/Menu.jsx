

// Dinamikisht përcakto rrugën e fallbackImage sipas ambientit
const getFallbackImage = () => {
  if (window.location.pathname.startsWith('/FurraPizzeriaEuropa')) {
    return '/FurraPizzeriaEuropa/pizza.jpeg';
  }
  return '/pizza.jpeg';
};

export default function Menu({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t } = useLanguage();
  useEffect(() => {
    // Dinamikisht përcakto rrugën e menu.json
    const menuPath = window.location.pathname.startsWith('/FurraPizzeriaEuropa')
      ? '/FurraPizzeriaEuropa/menu.json'
      : '/menu.json';
    fetch(menuPath)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Merr kategoritë unike
  const categories = Array.from(new Set(products.map(p => p.category)));
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <div className="menu-container">
      <h1>{t('menuPageTitle')}</h1>
      <p className="menu-subtext">{t('menuPageSub')}</p>

      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <label htmlFor="category-filter" style={{ fontWeight: 600, marginRight: 8 }}>{t('filterByCategory')}</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          style={{ padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 16 }}
        >
          <option value="all">{t('allCategories')}</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image ? product.image : getFallbackImage()}
              alt={product.name}
              className="product-img"
              width={80}
              height={80}
              style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
              onError={e => {
                const fallback = getFallbackImage();
                if (e.target.src !== window.location.origin + fallback && e.target.src !== fallback) {
                  e.target.onerror = null;
                  e.target.src = fallback;
                }
              }}
            />
            <div className="product-info" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span className="product-name">{product.name}</span>
              <span className="product-price" style={{ margin: '0.5rem 0 0.7rem 0', display: 'block' }}>{Number(product.price).toFixed(2)}€</span>
            </div>
            <button className="add-btn" onClick={() => onAddToCart(product)}>
              {t('addToCart')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
