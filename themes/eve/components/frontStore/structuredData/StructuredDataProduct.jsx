import {Helmet} from "react-helmet";
import React from "react";
import PropTypes from "prop-types";

function Structured_data({p}) {
    console.log(p)
    // var price = p.regular
    // console.log(price)
    // var price = price.value
    return (
        <Helmet>
            <script type="application/ld+json">{`
        {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${p.name}",
            "pattern": "${p.name}",
            "countryOfOrigin": {
            "@type": "Country",
            "name": "India"
        },
            "brand": {
            "@type": "Brand",
            "name": "Rugharbor"
        },
            "image": [
            "${p.image.url}"
            ],
            "description": "${p.description}",
            "sku": "${p.sku}",
            "offers": {
            "@type": "Offer",
            "url": "${p.url}",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "price": ${p.price.regular.value},
            "priceCurrency": "INR",
            "priceValidUnit": "2024-11-20",
            "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "IN",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnByMail",
            "returnFees": "https://schema.org/FreeReturn"
        },
            "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
            "@type": "MonetaryAmount",
            "value": 0,
            "currency": "INR"
        },
            "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "IN"
            
        },
            "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 5,
            "maxValue": 7,
            "unitCode": "DAY"
        },
            "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
        }
        }
        }
        }
        }
        `}
            </script>

        </Helmet>
    )
};

Structured_data.propTypes = {}

export default Structured_data;