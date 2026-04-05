import './Cart.css';

export default function Cart({ cart, onRemove, onIncrement, onDecrement }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const orderText = [
    'Porosi nga Web',
    ...cart.map((item) => `${item.name} x${item.qty}`),
    '',
    `Totali: ${total.toFixed(2)}€`
  ].join('\n');
  const encoded = encodeURIComponent(orderText);

  return (
    <div className="cart-container">
      <h1>Shporta</h1>
      {cart.length === 0 ? (
        <p>Shporta është bosh.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="product-img"
                width={60}
                height={60}
                style={{ objectFit: 'cover', borderRadius: '8px', marginRight: '1rem' }}
              />
              <span>{item.name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <button onClick={() => onDecrement(item.id)} disabled={item.qty <= 1}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => onIncrement(item.id)}>+</button>
              </div>
              <span>{(item.price * item.qty).toFixed(2)}€</span>
              <button className="remove-btn" onClick={() => onRemove(item.id)}>Hiq</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Totali: {total.toFixed(2)}€</h3>
      <div className="order-actions">
        <a
          className="order-btn whatsapp"
          href={`https://wa.me/38349591200?text=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          disabled={cart.length === 0}
        >
          Dërgo në WhatsApp
        </a>
        <a
          className="order-btn sms"
          href={`sms:38349591200?body=${encoded}`}
          disabled={cart.length === 0}
        >
          Dërgo me SMS
        </a>
        <a
          className="order-btn viber"
          href={`viber://forward?text=${encoded}`}
          disabled={cart.length === 0}
        >
          Dërgo në Viber
        </a>
      </div>
    </div>
  );
}
