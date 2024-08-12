import PropTypes from 'prop-types';
import React from 'react';
import {_} from '@evershop/evershop/src/lib/locale/translate';
// import {Structured_data} from @components/frontStore/catalog/product/list/StructuredData


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import {FreeMode, Pagination, EffectFade, EffectCoverflow} from "swiper/modules";

import {RxArrowTopRight} from "react-icons/rx";
import {Swiper, SwiperSlide} from "swiper/react";
import Structured_data from "@components/frontStore/structuredData/StructuredDataProduct";
import './List.scss'
// import {Helmet} from "react-helmet";




export default function ProductList({products = [], countPerRow = 6}) {
    console.log('Product List Data:', products); // Log the products array

    if (products.length === 0) {
        return (
            <div className="product-list">
                <div className="text-center">{_('There is no product to display')}</div>
            </div>
        );
    }
    return (
        <>

            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination, EffectFade, EffectCoverflow]}
                className="max-w-[100%] lg:max-w-[100%]"
                effect="free"

            >
                {products.map((p) => (


                    <SwiperSlide key={p.name}>
                        <Structured_data p={p}>

                        </Structured_data>
                        <a
                            href={p.url}
                            className="product-card"
                            key={p.productId}
                        >
                            <div className="product-image">
                                <img src={p.image.url} alt={p.name}/>
                            </div>

                        </a>
                        <RxArrowTopRight
                            className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"/>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div>
                <p><br/></p>
            </div>
            <div>
                <p><br/></p>
            </div>
        </>
    )
        ;
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            sku: PropTypes.string,
            productId: PropTypes.number,
            url: PropTypes.string,
            description: PropTypes.string,
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


