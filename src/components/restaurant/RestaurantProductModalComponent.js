"use client";
import { IconCircleXFilled } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RestaurantProductModalVariantComponent } from "./RestaurantProductModalVariantComponent";
import { RestaurantProductModalExtraGroupComponent } from "./RestaurantProductModalExtraGroupComponent";

export const RestaurantProductModalComponent = ({
  product,
  modalIsOpen,
  setModalIsOpen,
  refreshBasket,
}) => {
  const [price, setPrice] = useState(product.price);
  const [amount, setAmount] = useState(1);
  const [note, setNote] = useState("");

  const [extraGroups, setExtraGroups] = useState([]);
  const [variant, setVariant] = useState(null);

  console.log(product);

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")),
  );

  function decreaseAmount() {
    if (amount > 1) {
      setPrice((prevState) => prevState - prevState / amount);
      setAmount((prevState) => prevState - 1);
    }
  }

  function increaseAmount() {
    setPrice((prevState) => (amount + 1) * (prevState / amount));
    setAmount((prevState) => prevState + 1);
  }

  function addToBasket() {
    if (basket != "null" && basket) {
      const newBasket = basket.filter((x) => x.product.id != product.id);
      setBasket(() => {
        let newArr = [
          ...newBasket,
          {
            product,
            amount,
            note,
          },
        ];

        return newArr;
      });
    } else {
      setBasket([
        {
          product,
          amount,
          note,
        },
      ]);
    }
  }

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
    refreshBasket();
    setModalIsOpen(false);
  }, [basket]);

  return (
    <div
      onClick={() => setModalIsOpen(false)}
      className={`w-full h-screen bg-black/50 z-50 fixed top-0 left-0 flex justify-center items-center ${
        !modalIsOpen && "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col relative w-11/12 md:w-2/3 lg:w-1/3 xl:w-1/4 bg-white rounded-xl max-h-[90vh] overflow-y-auto"
      >
        <IconCircleXFilled
          size={36}
          className="absolute right-5 top-5 z-50 text-[#4c653f] cursor-pointer"
          onClick={() => setModalIsOpen(false)}
        />
        <div className="h-auto w-full relative">
          <Image
            src={`${process.env.API_URL}/${product.image}`}
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
        <div className="px-5 flex flex-col">
          {product.variants.map((x) => (
            <RestaurantProductModalVariantComponent
              variant={x}
              setExtraGroups={setExtraGroups}
              amount={amount}
              setPrice={setPrice}
              setVariant={setVariant}
            />
          ))}
          {extraGroups.map((x) => (
            <RestaurantProductModalExtraGroupComponent
              extraGroup={x}
              amount={amount}
              setPrice={setPrice}
            />
          ))}
          <textarea
            cols={1}
            rows={1}
            className="w-full border p-3 mt-5"
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
