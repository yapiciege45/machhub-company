import {
  IconMotorbike,
  IconShoppingBag,
  IconShoppingBagX,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";

export const RestaurantMenuRightComponent = ({
  deliveryType,
  setDeliveryType,
  basket,
  totalPrice,
}) => {
  console.log(deliveryType);
  return (
    <div className="p-5 w-1/4 hidden lg:flex items-center flex-col">
      <div
        className="rounded-xl h-10 mt-4 cursor-pointer border hidden md:flex"
        onClick={() => setDeliveryType(!deliveryType)}
      >
        <div
          className={`${
            deliveryType ? "bg-[#4C643F]" : ""
          } flex justify-center items-center rounded-xl px-3`}
        >
          <IconShoppingBag
            size={16}
            className={`${deliveryType ? "text-white" : "text-black"}`}
          />
          <p
            className={`${
              deliveryType ? "text-white" : "text-black"
            } text-sm ml-1`}
          >
            Afthenting
          </p>
        </div>
        <div
          className={`${
            deliveryType ? "" : "bg-[#4C643F]"
          } flex justify-center items-center rounded-xl px-3`}
        >
          <IconMotorbike
            size={16}
            className={`${deliveryType ? "text-black" : "text-white"}`}
          />
          <p
            className={`${
              deliveryType ? "text-black" : "text-white"
            } text-sm ml-1`}
          >
            Levering
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-100 mt-8 rounded-xl">
        <div className="w-full flex justify-center items-center h-6 border-b">
          <p className="text-xs font-bold text-black">Din kurv</p>
        </div>
        {!basket ? (
          <div className={`h-24 flex flex-col items-center justify-center`}>
            <IconShoppingBagX size={36} color="gray" />
            <p className="text-xs font-light mt-3">
              Du har endnu ikke valgt noget
            </p>
          </div>
        ) : (
          basket.map((x) => (
            <div className="flex flex-col p-5 border-b">
              <div className="w-full flex justify-between items-center">
                <p className="text-xs">
                  {x.amount}x {x.product.name}
                </p>
                <p className="text-xs font-bold">
                  {x.amount * x.product.price} kr.
                </p>
              </div>
              <p className="mt-1 text-xs text-gray-700">{x.note}</p>
            </div>
          ))
        )}
        {basket && (
          <div className="flex flex-col p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs">Posegebyr</p>
              <p className="text-xs">4 kr.</p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-xs">Håndteringsgebyr</p>
              <p className="text-xs">{totalPrice} kr.</p>
            </div>
            {deliveryType == 0 && (
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs">Levering fra</p>
                <p className="text-xs">39 kr.</p>
              </div>
            )}
            <div className="flex items-center justify-between mt-3">
              <p className="text-lg font-bold">I alt</p>
              <p className="text-lg font-bold">{totalPrice + 4 + 39} kr.</p>
            </div>
          </div>
        )}
      </div>
      {basket && (
        <div className="w-full rounded-lg p-3 mt-5 flex justify-center items-center bg-[#4c653f] cursor-pointer">
          <p className="text-sm text-white font-bold">Gå til betaling</p>
        </div>
      )}
      <div className="mt-8">
        <Image width={195} height={22} src="/payment_options.png" />
      </div>
    </div>
  );
};
