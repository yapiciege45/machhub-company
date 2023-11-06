import React from "react";

export const RestaurantMenuLeftComponent = ({
  categories,
  category,
  setCategory,
  setScrollingCategory,
}) => {
  return (
    <div className="p-5 w-2/12 hidden lg:block">
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
  );
};
