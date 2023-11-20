"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";

export const RestaurantProductModalVariantComponent = ({
  variant,
  setExtraGroups,
  amount,
  setPrice,
  setVariant,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(0);
  const [exVariantPrice, setExVariantPrice] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full flex justify-between p-2 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm font-bold">{variant.name}</p>
        {isOpen ? (
          <IconChevronUp size={24} color="black" />
        ) : (
          <IconChevronDown size={24} color="black" />
        )}
      </div>
      <div className={`flex-col ${isOpen ? "flex" : "hidden"}`}>
        {variant.options.map((x) => (
          <div className="w-full flex justify-between items-center p-3">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                setSelectedOption(x.id);
                setExtraGroups(x.extraGroups);
                setVariant(x);

                setPrice(
                  (prevState) =>
                    prevState + (x.price * amount - exVariantPrice * amount),
                );

                setExVariantPrice(x.price);
              }}
            >
              <div className="w-5 h-5 border rounded-full border-black p-0.5 cursor-pointer">
                {selectedOption === x.id && (
                  <div className="w-full h-full rounded-full bg-[#4c653f]"></div>
                )}
              </div>
              <p className="text-sm ml-3">{x.name}</p>
            </div>
            <p className="text-sm font-bold">
              {x.price == 0 ? <>FREE</> : <>+ {x.price} kr.</>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
