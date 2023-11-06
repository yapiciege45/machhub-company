import Image from "next/image";
import React from "react";

export const RestaurantProductComponent = ({
  name,
  description,
  price,
  img,
}) => {
  return (
    <div className="w-full flex border-t py-5 cursor-pointer">
      <div className="w-2/3 flex flex-col">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-sm italic font-light">{description}</p>
        <p className="text-sm font-bold mt-3">{price}</p>
      </div>
      <div className="w-1/3 flex justify-end">
        <Image src={img} width={250} height={250} />
      </div>
    </div>
  );
};
