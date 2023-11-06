import React from "react";

export const RestaurantCategoryComponent = ({
  children,
  name,
  description,
  id,
}) => {
  return (
    <div id={id} className="category flex flex-col w-full py-5 border-b">
      <p className="text-2xl text-[#4c653f] font-bold">{name}</p>
      <p className="text-md italic font-light text-black mb-5">{description}</p>
      {children}
    </div>
  );
};
