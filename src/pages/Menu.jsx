
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import menuItems from '../menu.json';
import ScrollToTopButton from '../components/ScrollToTopButton.jsx';
import { useLanguage } from '../localization.jsx';
import { resolveProductImage } from '../utils/resolveProductImage.js';
import './Menu.css';

const slugifyCategory = (category) =>
  category.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export default function Menu({ onAddToCart, onDecrement, cart = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [toast, setToast] = useState(null);
  const [centeredMobileProductId, setCenteredMobileProductId] = useState(null);
  const productCardRefs = useRef(new Map());
  const { t, productName, categoryName } = useLanguage();

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToast(null);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const products = menuItems.map((product) => ({
    ...product,
    image: resolveProductImage(product.image),
  }));

  // Merr kategoritë unike
  const categories = Array.from(new Set(products.map(p => p.category)));
  const requestedCategory = searchParams.get('cat');
  const selectedCategory = categories.find(
    (category) => slugifyCategory(category) === requestedCategory
  ) ?? 'all';
  const filteredProducts = selectedCategory === 'all' ? products : products.filter(p => p.category === selectedCategory);
  const cartQuantityByProductId = new Map(cart.map((item) => [item.id, item.qty]));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    let animationFrameId = 0;

    const updateCenteredMobileCard = () => {
      if (window.innerWidth > 900) {
        setCenteredMobileProductId(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let nearestProductId = null;
      let nearestDistance = Number.POSITIVE_INFINITY;

      productCardRefs.current.forEach((node, productId) => {
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const cardCenter = rect.top + (rect.height / 2);
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestProductId = productId;
        }
      });

      setCenteredMobileProductId((currentId) => (
        currentId === nearestProductId ? currentId : nearestProductId
      ));
    };

    const scheduleCenteredMobileCardUpdate = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(updateCenteredMobileCard);
    };

    scheduleCenteredMobileCardUpdate();
    window.addEventListener('scroll', scheduleCenteredMobileCardUpdate, { passive: true });
    window.addEventListener('resize', scheduleCenteredMobileCardUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', scheduleCenteredMobileCardUpdate);
      window.removeEventListener('resize', scheduleCenteredMobileCardUpdate);
    };
  }, [filteredProducts]);

  const showToast = (message, tone) => {
    setToast({ message, tone });
  };

  const handleAddFromMenu = (product) => {
    onAddToCart(product);
    showToast(t('addedToCartToast', { product: productName(product) }), 'success');
  };

  const handleRemoveFromMenu = (product) => {
    onDecrement(product.id);
    showToast(t('removedFromCartToast', { product: productName(product) }), 'warning');
  };

  const handleProductCardClick = (event, product, isSelected) => {
    if (isSelected) {
      return;
    }

    event.preventDefault();
    handleAddFromMenu(product);
  };

  return (
    <div className="menu-container">
      {toast && (
        <div className={`menu-toast menu-toast-${toast.tone}`} role="status" aria-live="polite">
          {toast.message}
        </div>
      )}

      <h1>{t('menuPageTitle')}</h1>
      <p className="menu-subtext">{t('menuPageSub')}</p>

      <div style={{ marginBottom: 24, textAlign: 'center' }}>
        <label htmlFor="category-filter" style={{ fontWeight: 600, marginRight: 8 }}>{t('filterByCategory')}</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => {
            const nextSearchParams = new URLSearchParams(searchParams);
            if (event.target.value === 'all') {
              nextSearchParams.delete('cat');
            } else {
              nextSearchParams.set('cat', slugifyCategory(event.target.value));
            }
            setSearchParams(nextSearchParams);
          }}
          style={{ padding: '6px 18px', borderRadius: 8, fontWeight: 600, fontSize: 16 }}
        >
          <option value="all">{t('allCategories')}</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{categoryName(cat)}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => {
          const quantityInCart = cartQuantityByProductId.get(product.id) ?? 0;
          const isSelected = quantityInCart > 0;
          const shouldShowMobileAddLabel = !isSelected && centeredMobileProductId === product.id;

          return (
          <div
            className={`product-card modern${isSelected ? ' product-card-selected' : ''}`}
            key={product.id}
            ref={(node) => {
              if (node) {
                productCardRefs.current.set(product.id, node);
              } else {
                productCardRefs.current.delete(product.id);
              }
            }}
          >
            {product.image && (
              <div className="product-img-top">
                <img
                  src={product.image}
                  alt={productName(product)}
                  className="product-img-modern"
                />
              </div>
            )}
            <div
              className={`product-card-bottom${!isSelected ? ' is-clickable' : ''}`}
              onClick={(event) => handleProductCardClick(event, product, isSelected)}
              onKeyDown={(event) => {
                if (isSelected) {
                  return;
                }

                if (event.key === 'Enter' || event.key === ' ') {
                  handleProductCardClick(event, product, isSelected);
                }
              }}
              role={!isSelected ? 'button' : undefined}
              tabIndex={!isSelected ? 0 : -1}
              aria-label={!isSelected ? t('addProductAria', { product: productName(product) }) : undefined}
            >
              <div className="product-btn-circle">
                {isSelected && (
                  <button
                    className="cart-adjust-btn remove"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleRemoveFromMenu(product);
                    }}
                    aria-label={t('removeProductAria', { product: productName(product) })}
                    type="button"
                  >
                    -
                  </button>
                )}
                <button
                  className={`add-btn-circle${isSelected ? ' is-selected' : ''}${shouldShowMobileAddLabel ? ' has-text' : ''}`}
                  onClick={(event) => {
                    event.stopPropagation();

                    if (!isSelected) {
                      handleAddFromMenu(product);
                    }
                  }}
                  aria-label={isSelected
                    ? t('productInCartAria', { product: productName(product), quantity: quantityInCart })
                    : t('addProductAria', { product: productName(product) })}
                  type="button"
                  disabled={isSelected}
                >
                  <span className={`cart-icon${shouldShowMobileAddLabel ? ' is-hidden-on-mobile' : ''}`} aria-hidden="true">🛒</span>
                  {shouldShowMobileAddLabel && <span className="cart-label-mobile">{t('addShort')}</span>}
                  {quantityInCart > 0 && <span className="cart-qty-badge">{quantityInCart}</span>}
                </button>
                {isSelected && (
                  <button
                    className="cart-adjust-btn add"
                    onClick={(event) => {
                      event.stopPropagation();
                      handleAddFromMenu(product);
                    }}
                    aria-label={t('addAnotherProductAria', { product: productName(product) })}
                    type="button"
                  >
                    +
                  </button>
                )}
              </div>
              <div className="product-info-modern">
                <span className="product-name-modern">{productName(product)}</span>
                <span className="product-price-modern">{Number(product.price).toFixed(2)}€</span>
                <span className={`product-cart-status${isSelected ? ' is-visible' : ''}`}>
                  {isSelected
                    ? t('productAddedStatus', { quantity: quantityInCart })
                    : t('addToCartStatus')}
                </span>
              </div>
            </div>
          </div>
        )})}
      </div>

      <ScrollToTopButton />
    </div>
  );
}
