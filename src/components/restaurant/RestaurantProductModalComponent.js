"use client";
import { IconCircleXFilled } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const RestaurantProductModalComponent = ({
  product,
  modalIsOpen,
  setModalIsOpen,
  refreshBasket,
}) => {
  const [price, setPrice] = useState(product.price);
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState("");

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")),
  );

  function decreaseAmount() {
    if (amount > 1) {
      setAmount((prevState) => prevState - 1);
      setPrice((prevState) => price - product.price);
    }
  }

  function increaseAmount() {
    setAmount((prevState) => prevState + 1);
    setPrice((prevState) => price + product.price);
  }

  function addToBasket() {
    const newBasket = basket.filter((x) => x.product.id != product.id);
    if (basket != "null" && basket) {
      setBasket(() => {
        let newArr = [
          ...newBasket,
          {
            product,
            amount,
          },
        ];

        return newArr;
      });
    } else {
      setBasket([
        {
          product,
          amount,
        },
      ]);
    }
  }

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    refreshBasket();
  }, [basket]);

  return (
    <div
      onClick={() => setModalIsOpen(false)}
      className={`w-full h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center ${
        !modalIsOpen && "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative w-11/12 md:w-1/3 lg:w-1/4 bg-white rounded-xl max-h-[90vh] overflow-y-auto"
      >
        <IconCircleXFilled
          size={36}
          className="absolute right-5 top-5 z-50 text-[#4c653f] cursor-pointer"
          onClick={() => setModalIsOpen(false)}
        />
        <div className="h-auto w-full relative">
          <Image
            src={product.img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex flex-col p-5">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-sm">{product.description}</p>
        </div>
        <div className="p-5">
          <textarea
            cols={1}
            rows={1}
            className="w-full border p-3"
            placeholder="Note"
            onChange={(e) => setNote(e.target.value)}
          >
            {note}
          </textarea>
        </div>
        <div className="w-full flex justify-between items-center p-5">
          <div className="flex items-center justify-around w-24 h-8 rounded-xl bg-[#4c653f]">
            <p
              className="text-lg text-white cursor-pointer"
              onClick={decreaseAmount}
            >
              -
            </p>
            <p className="text-md text-white">{amount}</p>
            <p
              className="text-lg text-white cursor-pointer"
              onClick={increaseAmount}
            >
              +
            </p>
          </div>
          <div
            onClick={() => addToBasket()}
            className="h-8 w-36 flex items-center justify-center bg-[#4c653f] rounded-xl cursor-pointer"
          >
            <p className="text-md font-bold text-white">
              {price} kr. <span className="text-xs font-normal">| Tilfoj</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
