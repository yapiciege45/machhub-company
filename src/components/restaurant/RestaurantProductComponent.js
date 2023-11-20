"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RestaurantProductModalComponent } from "./RestaurantProductModalComponent";

export const RestaurantProductComponent = ({ product, refreshBasket }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(product);

  return (
    <>
      <RestaurantProductModalComponent
        product={product}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        refreshBasket={refreshBasket}
      />
      <div
        className="w-full flex border-t py-5 cursor-pointer p-2 rounded-2xl hover:drop-shadow-2xl hover:bg-black/10 transition-all"
        onClick={() => setModalIsOpen(true)}
      >
        <div className="w-2/3 flex flex-col pr-1">
          <p className="text-md md:text-xl font-bold">{product.name}</p>
          <p className="text-xs md:text-sm italic font-light">
            {product.description.slice(0, 160)}... <br />
            <span className="text-[#4c653f] font-bold">See More...</span>
          </p>
          <p className="text-xs md:text-sm font-bold mt-3">
            {product.price} kr.
          </p>
        </div>
        <div className="w-1/3 flex justify-end">
          <Image
            src={`${process.env.API_URL}/${product.image}`}
            quality={100}
            className="w-28 h-28 rounded-xl"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};
