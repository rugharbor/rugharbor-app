// import ProductList from '@components/frontStore/catalog/product/list/List';
import ProductList from '@components/frontStore/catalog/product/list/Listscroll';
import PropTypes from 'prop-types';
import React from 'react';

export default function Productlist({
                                        products: {
                                            products: {items}
                                        }
                                    }) {
    return (
        <div className="pt-3">
            <div className="page-width">
                <h3 className="mt-3 mb-3 text-center uppercase h5 tracking-widest">
                    Hand Tufted
                </h3>
                <ProductList products={items} countPerRow={4}/>
            </div>
        </div>
    );
}

Productlist.propTypes = {
    collection: PropTypes.shape({
        collectionId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        products: PropTypes.shape({
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    productId: PropTypes.number.isRequired,
                    sku: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.shape({
                        regular: PropTypes.shape({
                            value: PropTypes.number.isRequired,
                            text: PropTypes.string.isRequired
                        }).isRequired,
                        special: PropTypes.shape({
                            value: PropTypes.number.isRequired,
                            text: PropTypes.string.isRequired
                        }).isRequired
                    }).isRequired,
                    image: PropTypes.shape({
                        alt: PropTypes.string.isRequired,
                        url: PropTypes.string.isRequired
                    }).isRequired,
                    url: PropTypes.string.isRequired
                })
            ).isRequired
        }).isRequired
    }).isRequired
};

export const layout = {
    areaId: 'content',
    sortOrder: 17
};

export const query = `
  query query {
    collection (code: "homepage") {
      collectionId
      name
      products (filters: [{key: "limit", operation: eq, value: "4"}]) {
        items {
          productId
          name
          sku
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
          image {
            alt
            url: listing
          }
          url
        }
      }
    }
  }
`;
