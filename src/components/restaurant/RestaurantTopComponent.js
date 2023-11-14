"use client";
import { MyContext } from "@/context/context";
import {
  IconCar,
  IconClock,
  IconShoppingBag,
  IconWalk,
} from "@tabler/icons-react";
import React, { forwardRef, useContext } from "react";

export const RestaurantTopComponent = forwardRef(
  (
    { deliveryType, setDeliveryType, restaurant, day, setBasketModalIsOpen },
    ref,
  ) => {
    const { totalPrice, basket } = useContext(MyContext);
    return (
      <div ref={ref} className="flex w-full justify-center">
        <div className="h-[315px] w-full lg:w-10/12 relative lg:rounded-xl bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-crayfish-food-food-condiment-black-horizontal-banner-goodsseasoningblackhorizontal-bannerdelicious-image_50376.jpg')] bg-center bg-no-repeat">
          <div className="top-0 left-0 lg:rounded-xl bg-black/60 absolute w-full h-full p-8 flex flex-col justify-end">
            <div className="flex items-center">
              <h1 className="text-white text-lg lg:text-3xl">
                {restaurant.name}
              </h1>
            </div>

            <div className="flex flex-col mt-3">
              <div className="flex items-center">
                <p className="text-sm font-light lg:text-lg text-white">
                  {restaurant.address}
                </p>
              </div>
              <div className="flex items-center mt-3 ">
                <span class="relative flex h-3 w-3 ml-2">
                  <span
                    class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      restaurant.is_active ? "bg-green-500" : "bg-red-500"
                    } opacity-75`}
                  ></span>
                  <span
                    class={`relative inline-flex rounded-full h-3 w-3 ${
                      restaurant.is_active ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </span>
                <p className="text-sm lg:text-lg text-white ml-2">
                  {restaurant.is_active ? (
                    <>
                      Åben | Lukker kl.{" "}
                      {
                        restaurant.settings.working_hours.delivery[
                          day
                        ].hour.split("-")[1]
                      }
                    </>
                  ) : (
                    <>
                      Lukket | Åbner kl.{" "}
                      {
                        restaurant.settings.working_hours.delivery[
                          day
                        ].hour.split("-")[0]
                      }
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="w-full flex mt-3 items-center justify-between">
              <div className="flex items-center">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setDeliveryType(!deliveryType)}
                >
                  <div
                    className={`${
                      deliveryType ? "bg-[#4c653f]" : "bg-white"
                    } p-1 px-3 lg:p-2 lg:px-4 flex rounded-xl `}
                  >
                    <IconWalk
                      className={`${
                        deliveryType ? "text-white" : "text-black"
                      }`}
                    />
                    <p
                      className={`${
                        deliveryType ? "text-white" : "text-black"
                      } ml-2 text-sm lg:text-lg`}
                    >
                      Afthenting
                    </p>
                  </div>
                  <div
                    className={`${
                      deliveryType ? "bg-white" : "bg-[#4c653f]"
                    } p-1 px-3 lg:p-2 lg:px-4 flex ml-5 rounded-xl `}
                  >
                    <IconCar
                      className={`${
                        deliveryType ? "text-black" : "text-white"
                      }`}
                    />
                    <p
                      className={`${
                        deliveryType ? "text-black" : "text-white"
                      } ml-2 text-sm lg:text-lg`}
                    >
                      Levering
                    </p>
                  </div>
                </div>
                <div className="lg:flex hidden bg-white p-1 px-3 lg:p-2 lg:px-4 ml-5 rounded-xl border border-white">
                  <IconClock className="text-black" />
                  <p className={`text-black ml-2 text-sm lg:text-lg`}>
                    {restaurant.is_active ? (
                      <>ca. 20 min</>
                    ) : (
                      <>
                        {" "}
                        kl.{" "}
                        {
                          restaurant.settings.working_hours.delivery[
                            day
                          ].hour.split("-")[0]
                        }
                      </>
                    )}
                  </p>
                </div>
              </div>
              {basket != "null" && basket && basket.length != 0 && (
                <div
                  onClick={() => setBasketModalIsOpen(true)}
                  className="cursor-pointer lg:flex hidden bg-[#4c653f] p-1 px-3 lg:p-2 lg:px-6 ml-5 rounded-xl border border-white"
                >
                  <div className="relative">
                    <IconShoppingBag className="text-white" />
                    <div className="absolute flex justify-center items-center rounded-full -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs font-bold">
                      {basket.length}
                    </div>
                  </div>
                  <p className={`text-white ml-2 text-sm lg:text-lg`}>
                    Vis ordre {totalPrice} kr.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);
