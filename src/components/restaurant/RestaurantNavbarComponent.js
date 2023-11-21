"use client";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RestaurantNavbarComponent = ({
  setInfoModal,
  restaurant,
  user,
}) => {
  console.log(user);
  return (
    <div className="flex h-20 w-full justify-center">
      <div className="h-full w-11/12 md:w-10/12 flex justify-between items-center">
        <Image
          src={`${process.env.API_URL}${restaurant.logo}`}
          width={48}
          height={48}
          className="rounded-full border drop-shadow-lg"
        />
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center cursor-pointer md:mr-5 p-1 px-2 rounded-2xl border">
              <Image
                src={`${process.env.API_URL}/${user.profile}`}
                width={32}
                height={32}
                className="rounded-full"
              />
              <p className="hidden md:block text-md ml-3">
                {user.name + " " + user.surname}
              </p>
              <IconChevronDown
                size={24}
                color="black"
                className="ml-3 md:ml-8"
              />
            </div>
          ) : (
            <Link
              href={`/r/${restaurant.slug}/auth/login`}
              className="text-md lg:text-lg font-bold ml-2 px-5 rounded-xl cursor-pointer p-2 bg-[#4c653f] text-white hover:opacity-50 transition-all"
            >
              Log In
            </Link>
          )}

          <IconMenu2
            size={36}
            color="black"
            className="ml-8 cursor-pointer"
            onClick={() => setInfoModal(true)}
          />
        </div>
      </div>
    </div>
  );
};
