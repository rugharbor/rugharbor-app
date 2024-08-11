import React from "react";
import "./TextWithIcons.css";

const TextWithIcons = () => {
  return (
    <div className="text-with-icons">
      <div className="text-with-icons__inner">
        <div className="icon-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYPUbRR4AZUELymCJv84sdWiw9Unkp5Y4Jf4o-1KmT0I5jHlH"
            alt="Icon 1"
            className="icon"
          />
          <h3>100% Hand Made</h3>
          <p>With Love and Care</p>
        </div>
        <div className="icon-item">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyOFTXOJbhjQufLbbuRsrEIIrsPntBI3L9BeYzwcupp2yAUkuy"
            alt="Icon 2"
            className="icon"
          />
          <h3>Reusable</h3>
          <p>No Pollution</p>
        </div>
        <div className="icon-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGbyFpxRxd280YSAqAKpGJp8-OBRX7A3mvoOEpVT4npYMSz64"
            alt="Icon 3"
            className="icon"
          />
          <h3>Organic Threads</h3>
          <p>Extra Luxury Comfort</p>
        </div>
        <div className="icon-item">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRdiiToDd15qwojDBfYw-Hygz5xleQFmBgepnG681Nj1HHI5IJr"
            alt="Icon 4"
            className="icon"
          />
          <h3>Pet Friendly</h3>
          <p>Your Pet Will Thank You</p>
        </div>
      </div>
    </div>
  );
};

export default TextWithIcons;

export const layout = {
  areaId: "content",
  sortOrder: 4,
};

