import {Helmet} from "react-helmet";
import React from "react";
import PropTypes from "prop-types";


function convertDateUnix2Str(x){
    // console.log(typeof x)
    if (typeof x==="string"){
        console.log(x)
        x = Number(x)
    }
    var dateObj = new Date(x);
    var utcString = dateObj.toISOString();
    // utcString = utcString.split(' ')[0]
    // utcString = utcString.split('T')[0]
    return utcString
}



function removeTime(x){
    if( x !== null){
        // return x.split(' ')[0];
        x = convertDateUnix2Str(x)
        return x;
    }
    return '';
}

function Structured_data ({p}) {
    console.log(p)
    // var price = p.regular
    // console.log(price)
    // var price = price.value

    // p['description'] = p.description.s


    p['updated_at'] = removeTime(p.updated_at)
    p['created_at'] = removeTime(p.created_at)
    return (
        <Helmet>
            <script type="application/ld+json" >{`
        {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${p.name}",
      "isAccessibleForFree": true,
      "image": [
        ""
       ],
      "datePublished": "${p.created_at}",
      "dateModified": "${p.updated_at}",
    
      "author": [{
          "@type": "https://schema.org/Organization",
          "name": "Rugharbor",
          "url": "https://medium.com/@rugharbor"
        },
        {
          "@type": "https://schema.org/Organization",
          "name": "Rug harbor",
          "url": "https://www.rugharbor.com/journal"
        }
        ]
    }

        `}
            </script>

        </Helmet>
    )
};

Structured_data.propTypes = {

}

export default Structured_data;