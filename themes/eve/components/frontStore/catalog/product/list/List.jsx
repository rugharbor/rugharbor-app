import PropTypes from 'prop-types';
import React from 'react';
import { get } from '@evershop/evershop/src/lib/util/get';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import Structured_data from "@components/frontStore/structuredData/StructuredDataProduct";
// import Structured_data from "../../../structuredData/StructuredData";
import './List.scss'

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

      <div className={getClassName(countPerRow)}>
        {products.map((p) => {
          const defaultImageUrl = get(p, 'image.url');

          return (
            <a
              href={p.url}
              className="product-card"
              key={p.productId}
            >
                <Structured_data p={p}></Structured_data>

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
        })
        // ,special: PropTypes.shape({
        //   value: PropTypes.number,
        //   text: PropTypes.string
        // })
      }),
      image: PropTypes.shape({
        alt: PropTypes.string,
        url: PropTypes.string,
      })
    })
  ).isRequired,
  countPerRow: PropTypes.number.isRequired
};





