import Image from "next/image";
import React from "react";

export const RestaurantMenuCenterComponent = ({
  children,
  search,
  setSearch,
  categories,
  setCategory,
  category,
  setScrollingCategory,
}) => {
  return (
    <div className={`p-5 flex flex-col w-full lg:w-1/2 items-start relative`}>
      <div className={`sticky p-3 top-0 left-0 bg-[#F5F3ED] w-full`}>
        <div
          className={`w-full py-3 overflow-x-scroll flex lg:hidden items-center gap-8`}
        >
          {categories.map((x, index) => (
            <p
              key={index}
              className={`text-md cursor-pointer whitespace-pre ${
                category == x.id && "font-bold"
              } hover:font-bold transition-all`}
              onClick={() => {
                setCategory(x.id);
                setScrollingCategory(x.id);
              }}
            >
              {x.name}
            </p>
          ))}
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md focus-visible:outline-none p-2"
          placeholder="Search..."
        />
      </div>
      {children}
    </div>
  );
};
