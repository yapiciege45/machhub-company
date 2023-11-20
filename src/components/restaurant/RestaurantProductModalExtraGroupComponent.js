"use client";

import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import { RestaurantProductModalExtraComponent } from "./RestaurantProductModalExtraComponent";

export const RestaurantProductModalExtraGroupComponent = ({
  extraGroup,
  setPrice,
  amount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const [extraGroupAmount, setExtraGroupAmount] = useState(0);

  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full flex justify-between p-2 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-sm">
          {extraGroup.name}{" "}
          <span className="text-xs italic font-light">
            (Max {extraGroup.limit})
          </span>
        </p>
        <div className="flex items-center">
          <p className="text-xs font-light text-[#4c653f] mr-2">
            {extraGroupAmount}
          </p>
          {isOpen ? (
            <IconChevronUp size={24} color="black" />
          ) : (
            <IconChevronDown size={24} color="black" />
          )}
        </div>
      </div>
      <div className={`flex-col ${isOpen ? "flex" : "hidden"}`}>
        {extraGroup.extras.map((x) => (
          <RestaurantProductModalExtraComponent
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            extra={x}
            extraGroupLimit={extraGroup.limit}
            extraGroupAmount={extraGroupAmount}
            setExtraGroupAmount={setExtraGroupAmount}
          />
        ))}
      </div>
    </div>
  );
};
