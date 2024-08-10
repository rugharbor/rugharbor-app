import React from "react";
import "./MainBanner.scss";

function MainBanner() {
    return (
        <div className="main-banner-home2 main-banner-home flex items-center banner-wrapper">
            <div className="page-width grid grid-cols-1 md:grid-cols-1 gap-5">
                <div className="text-center px-2 ">
                    <h2 className="h2 ">Sophistication Underfoot</h2>
                    <p></p>
                    <p></p>
                    <a className="button button-primary" href="#" >
                        SHOW NOW
                    </a>
                </div>
                <div>
                    <div className="text-center md:text-right px-2 ">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;

export const layout = {
                areaId: "content",
                sortOrder: 3,
            };
