import PropTypes from 'prop-types';
import React from 'react';
import { get } from '@evershop/evershop/src/lib/util/get';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function ProductList({ products = [], countPerRow = 4 }) {
  console.log('Product List Data:', products); // Log the products array

  if (products.length === 0) {
    return (
      <div className="product-list">
        <div className="text-center">{_('There is no product to display')}</div>
      </div>
    );
  }

  const getClassName = (count) => {
    switch (count) {
      case 4:
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6';
      case 5:
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6';
      case 3:
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6';
    }
  };

  return (
    <>
      <style jsx>{`
        .product-list {
          padding: 10px;
          background: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        .product-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          max-width: 100%;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        .product-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid #e0e0e0;
        }
        .product-image img {
          width: 200%;
          height: 200%;
          object-fit: cover;
          object-position: center;
        }
        .product-info {
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .product-name {
          font-size: 18px;
          font-weight: 600;
          margin: 8px 0;
          text-align: center;
          color: #333;
        }
        .product-price {
          font-size: 16px;
          color: #d32f2f;
          margin-bottom: 8px;
          text-align: center;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .product-card {
            padding: 0;
          }
          .product-name {
            font-size: 16px;
          }
          .product-price {
            font-size: 14px;
          }
        }
        @media (max-width: 480px) {
          .product-card {
            padding: 0;
          }
          .product-name {
            font-size: 14px;
          }
          .product-price {
            font-size: 12px;
          }
        }
      `}</style>
      <div className={getClassName(countPerRow)}>
        {products.map((p) => {
          const defaultImageUrl = get(p, 'image.url');

          return (
            <a
              href={p.url}
              className="product-card"
              key={p.productId}
            >
              <div className="product-image">
                <img src={defaultImageUrl} alt={p.name} />
              </div>
              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-price">₹{p.price.regular.value}</div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sku: PropTypes.string,
      productId: PropTypes.number,
      url: PropTypes.string,
      price: PropTypes.shape({
        regular: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string
        }),
        special: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string
        })
      }),
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      })
    })
  ).isRequired,
  countPerRow: PropTypes.number.isRequired
};





