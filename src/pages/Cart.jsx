import './Cart.css';
import { useLanguage } from '../localization.jsx';

export default function Cart({ cart, onRemove, onIncrement, onDecrement }) {
  const { t, productName } = useLanguage();
  const businessPhone = '38349591200';
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const orderText = [
    t('orderFromWeb'),
    ...cart.map((item) => `${productName(item)} x${item.qty}`),
    '',
    `${t('total')}: ${total.toFixed(2)}€`
  ].join('\n');
  const encoded = encodeURIComponent(orderText);

  return (
    <div className="cart-container">
      <h1>{t('cartTitle')}</h1>
      {cart.length === 0 ? (
        <p>{t('cartEmpty')}</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              {item.image && (
                <img
                  src={item.image}
                  alt={productName(item)}
                  className="product-img"
                  width={60}
                  height={60}
                  style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
                />
              )}
              <span>{productName(item)}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => onDecrement(item.id)}
                  disabled={item.qty <= 1}
                  aria-label={t('decreaseQuantity')}
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button onClick={() => onIncrement(item.id)} aria-label={t('increaseQuantity')}>+</button>
              </div>
              <span>{(item.price * item.qty).toFixed(2)}€</span>
              <button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
                aria-label={`${t('removeCartItem')}: ${productName(item)}`}
              >
                {t('remove')}
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>{t('total')}: {total.toFixed(2)}€</h3>
      {cart.length > 0 && (
        <div className="order-actions">
          <a
            className="order-btn whatsapp"
            href={`https://wa.me/${businessPhone}?text=${encoded}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('sendWhatsapp')}
          </a>
          <a
            className="order-btn sms"
            href={`sms:${businessPhone}?body=${encoded}`}
          >
            {t('sendSMS')}
          </a>
        </div>
      )}
    </div>
  );
}
