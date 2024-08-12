import PropTypes from 'prop-types';
import React from 'react';
import Area from '@components/common/Area';
import './GeneralInfo.scss';
import { Name } from '@components/frontStore/catalog/product/single/Name';
import { Price } from '@components/frontStore/catalog/product/single/Price';
import { Sku } from '@components/frontStore/catalog/product/single/Sku';
import Structured_data from "@components/frontStore/structuredData/StructuredDataProduct";


export default function GeneralInfo({ product }) {
  product['image']['url'] = product.image.single;
  return (
      <>
        <Structured_data p={product}/>

    <Area
      id="productViewGeneralInfo"
      className="flex flex-col gap-1"
      coreComponents={[
        {
          component: { default: Name },
          props: {
            name: product.name
          },
          sortOrder: 10,
          id: 'productSingleName'
        },
        {
          component: { default: Price },
          props: {
            regular: product.price.regular,
            special: product.price.special
          },
          sortOrder: 10,
          id: 'productSinglePrice'
        },
        {
          component: { default: Sku },
          props: {
            sku: product.sku
          },
          sortOrder: 20,
          id: 'productSingleSku'
        }
      ]}
    >


    </Area>

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
  areaId: 'productPageMiddleRight',
  sortOrder: 10
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
