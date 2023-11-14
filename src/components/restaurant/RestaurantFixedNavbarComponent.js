"use client";

import { MyContext } from "@/context/context";
import {
  IconCar,
  IconClock,
  IconShoppingBag,
  IconWalk,
} from "@tabler/icons-react";
import React, { useState, useEffect, useContext } from "react";

export const RestaurantFixedNavbarComponent = ({
  deliveryType,
  setDeliveryType,
  restaurant,
  day,
  setBasketModalIsOpen,
}) => {
  const { basket, totalPrice } = useContext(MyContext);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sayfa scroll edildiğinde bu fonksiyon çağrılır
      const scrollPosition = window.scrollY;

      console.log(scrollPosition);

      // Yukarıdan 80 pikselden fazla kaydırıldıysa 'scrolled' durumunu true yap
      if (scrollPosition > 317) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Sayfa yüklendiğinde ve scroll edildiğinde handleScroll fonksiyonunu çağır
    window.addEventListener("scroll", handleScroll);

    // Component unmount edildiğinde event listener'ı temizle
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // useEffect sadece bir kere çağrılsın diye boş bağımlılık dizisi kullanıldı

  return (
    <div
      className={`hidden ${
        scrolled && "md:flex"
      } h-20 w-full bg-[#F5F3ED] flex justify-center fixed top-0 left-0 z-30`}
    >
      <div className="h-full w-10/12 flex justify-between items-center">
        <div className="w-full flex mt-3 items-center justify-between">
          <div className="flex items-center">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDeliveryType(!deliveryType)}
            >
              <div
                className={`${
                  deliveryType ? "bg-[#4c653f]" : "bg-white"
                } p-1 px-3 lg:p-2 lg:px-4 flex rounded-xl border border-white`}
              >
                <IconWalk
                  className={`${deliveryType ? "text-white" : "text-black"}`}
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
                } p-1 px-3 lg:p-2 lg:px-4 flex ml-5 rounded-xl border border-white`}
              >
                <IconCar
                  className={`${deliveryType ? "text-black" : "text-white"}`}
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
                    kl. {restaurant.hours.restaurant[day].hours.split("-")[0]}
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
                Vis ordre {totalPrice}, -
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
