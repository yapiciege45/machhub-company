"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RestaurantProductModalComponent } from "./RestaurantProductModalComponent";

export const RestaurantProductComponent = ({ product, refreshBasket }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <RestaurantProductModalComponent
        product={product}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        refreshBasket={refreshBasket}
      />
      <div
        className="w-full flex border-t py-5 cursor-pointer"
        onClick={() => setModalIsOpen(true)}
      >
        <div className="w-2/3 flex flex-col">
          <p className="text-xl font-bold">{product.name}</p>
          <p className="text-sm italic font-light">{product.description}</p>
          <p className="text-sm font-bold mt-3">{product.price} kr.</p>
        </div>
        <div className="w-1/3 flex justify-end">
          <Image src={product.img} width={200} height={200} />
        </div>
      </div>
    </>
  );
};
