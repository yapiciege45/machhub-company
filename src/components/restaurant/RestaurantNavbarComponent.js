"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export const RestaurantNavbarComponent = ({ setInfoModal, restaurant }) => {
  return (
    <div className="flex h-20 w-full justify-center">
      <div className="h-full w-11/12 md:w-10/12 flex justify-between items-center">
        <Image
          src={restaurant.logo}
          width={48}
          height={48}
          className="rounded-full border drop-shadow-lg"
        />
        <div className="flex items-center">
          <p className="text-md lg:text-lg text-black font-bold ml-2">Log In</p>

          <IconMenu2
            size={36}
            color="black"
            className="ml-8"
            onClick={() => setInfoModal(true)}
          />
        </div>
      </div>
    </div>
  );
};
