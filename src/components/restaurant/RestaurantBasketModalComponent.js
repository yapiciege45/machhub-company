"use client";

import { MyContext } from "@/context/context";
import {
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconTrash,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export const RestaurantBasketModalComponent = ({
  basketModalIsOpen,
  setBasketModalIsOpen,
  restaurant,
}) => {
  const { basket, totalPrice, increaseAmount, decreaseAmount, deleteProduct } =
    useContext(MyContext);
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-screen overflow-y-auto justify-end items-center bg-black/80 ${
        basketModalIsOpen ? "flex" : "hidden"
      }`}
    >
      <div className="h-screen w-11/12 md:w-1/2 lg:w-1/3 flex flex-col items-center p-6 bg-[#F5F3ED]">
        <div className="flex justify-between items-center w-full">
          <IconShoppingBag size={24} color="black" />
          <IconX
            size={24}
            color="black"
            className="cursor-pointer"
            onClick={() => setBasketModalIsOpen(false)}
          />
        </div>
        <div className="flex flex-col w-full mt-8">
          <p className="text-xl font-bold">Your order</p>
        </div>
        {basket != "null" && basket && basket.length != 0 && (
          <div className="flex flex-col mt-3 w-full">
            {basket.map((x, index) => (
              <div key={index} className="flex justify-between w-full mt-3">
                <Image
                  src={`${process.env.API_URL}/${x.product.image}`}
                  width={100}
                  height={100}
                  className="rounded-xl"
                />
                <div className="flex justify-between w-full ml-3">
                  <div className="flex flex-col">
                    <p className="text-md font-bold">{x.product.name}</p>
                    <p className="text-xs text-gray-500">{x.note}</p>
                    <p className="mt-5 text-[#4c653f] font-medium text-md">
                      DKK {x.amount * x.product.price}
                    </p>
                  </div>
                  <div className="items-center gap-2 hidden lg:flex">
                    <IconPlus
                      size={24}
                      color="black"
                      className="cursor-pointer"
                      onClick={() => increaseAmount(x.product.id)}
                    />
                    <div className="w-8 h-8 flex justify-center items-center border border-black rounded-lg">
                      {x.amount}
                    </div>
                    <IconMinus
                      size={24}
                      color="black"
                      className="cursor-pointer"
                      onClick={() => decreaseAmount(x.product.id)}
                    />
                    <IconTrash
                      size={24}
                      color="red"
                      className="cursor-pointer"
                      onClick={() => deleteProduct(x.product.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {basket != "null" && basket && basket.length != 0 && (
          <Link
            href={`/r/${restaurant.slug}/checkout`}
            className="w-full flex items-center justify-between rounded-xl mt-10 bg-[#4c653f] p-3 px-5"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white text-[#4c653f] font-bold text-md flex justify-center items-center rounded-full">
                {basket.length}
              </div>
              <p className="text-md font-bold text-white ml-4">
                Go to checkout
              </p>
            </div>
            <p className="text-white text-md font-light">DKK {totalPrice}</p>
          </Link>
        )}
      </div>
    </div>
  );
};
