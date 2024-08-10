import React from "react";

function FeaturedCategories() {
  return (
    <div className="page-width">
      <div className="mb-2 mt-3">
        <h2 className="text-center">OUR CATEGORIES</h2>
      </div>
      <div className="grid grid-cols md:grid-cols-3 gap-2">
        <div className="relative col-span-1 row-span-2 men-cat">
          <img src="https://images.pexels.com/photos/6312362/pexels-photo-6312362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
               alt="Hand Knotted" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Knotted">
            Hand Knotted
          </a>
        </div>
        <div className="relative col-span-1 row-span-1 women-cat">
          <img src="https://images.pexels.com/photos/6284236/pexels-photo-6284236.jpeg?cs=srgb&dl=pexels-heyho-6284236.jpg&fm=jpg&w=1280&h=854" alt="Hand Tufted" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Tufted">
            Hand Tufted
          </a>
        </div>
        <div className="relative col-span row-span-3 kid-cat">
          <img src="https://images.pexels.com/photos/6758252/pexels-photo-6758252.jpeg?cs=srgb&dl=pexels-heyho-6758252.jpg&fm=jpg&w=1280&h=854" alt="Handloom-Carpet" />
          <a
            className="absolute underline top-[20px] left-[20px] bg-white px-2"
            href="/Handloom-Carpet">
            Handloom Carpet
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories;

export const layout = {
  areaId: "content",
  sortOrder: 5,
};
