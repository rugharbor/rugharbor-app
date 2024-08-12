import PropTypes from 'prop-types';
import React from 'react';
import Structured_data from "@components/frontStore/structuredData/StructuredDataProduct";


export default function GeneralInfo({ product }) {
  product['image']['url'] = product.image.single;
  return (
      <>
        <Structured_data p={product}/>


        </>
  );
}

GeneralInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.shape({
      alt: PropTypes.string,
      single: PropTypes.string.isRequired
    }),
    price: PropTypes.shape({
      regular: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      }),
      special: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
    })
  }).isRequired
};

export const layout = {
  areaId: 'content',
  sortOrder: 5
};

export const query = `
  query Query {
    product (id: getContextValue('productId')) {
      name
      sku
      description
      url
      image {
        alt
        thumb
        single
      }
      price {
        regular {
          value
          text
        }
        special {
          value
          text
        }
      }
    }
  }`;
