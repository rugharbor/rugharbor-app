import React from "react";

import ReactGA from 'react-ga4';

ReactGA.initialize('G-S81CPM7S3X');



function Logo() {
    // ReactGA.pageview(window.location.pathname + window.location.search);
    return (

        <div>

            <a href="/">

                <img src="/rugharbor-logo.ico" alt="RugHarbor"
                     className="navbar4-image1"
                     width='61.6px' height='53.2px'/>


            </a>
        </div>
    );
}

export default Logo;

export const layout = {
    areaId: "header",
    sortOrder: 0,
};
