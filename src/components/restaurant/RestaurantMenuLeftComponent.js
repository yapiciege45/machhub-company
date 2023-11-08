import React from "react";

export const RestaurantMenuLeftComponent = ({
  categories,
  category,
  setCategory,
  setScrollingCategory,
}) => {
  return (
    <div className="p-5 w-1/4 hidden lg:block">
      <div className="sticky top-0 left-0 w-full p-3">
        {categories.map((x) => (
          <p
            className={`text-md text-gray hover:text-black transition-all mt-2 drop-shadow-2xl cursor-pointer hover:font-bold ${
              category == x.id && "font-bold"
            }`}
            onClick={() => {
              setCategory(x.id);
              setScrollingCategory(x.id);
            }}
          >
            {x.name}
          </p>
        ))}
      </div>
    </div>
  );
};
