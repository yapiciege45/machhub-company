import {
  IconCar,
  IconClock,
  IconToolsKitchen2,
  IconWalk,
} from "@tabler/icons-react";
import Image from "next/image";
import React, { forwardRef } from "react";

export const RestaurantTopComponent = forwardRef(
  ({ deliveryType, setDeliveryType, restaurant, day }, ref) => {
    console.log(restaurant);
    function getCurrentHourAndMinuteInMilliseconds() {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Convert hours and minutes to milliseconds
      const hoursInMilliseconds = currentHour * 60 * 60 * 1000;
      const minutesInMilliseconds = currentMinute * 60 * 1000;

      // Calculate the total milliseconds
      const totalMilliseconds = hoursInMilliseconds + minutesInMilliseconds;

      return totalMilliseconds;
    }

    const currentMilliseconds = getCurrentHourAndMinuteInMilliseconds();

    const [startHour, startMinute] = restaurant.afhentning_hours[day].hours
      .split("-")[0]
      .split(":");
    const [endHour, endMinute] = restaurant.afhentning_hours[day].hours
      .split("-")[1]
      .split(":");

    const startTime =
      (parseInt(startHour, 10) + parseInt(startMinute, 10)) * 60 * 60 * 1000;
    const endTime =
      (parseInt(endHour, 10) + parseInt(endMinute, 10)) * 60 * 60 * 1000;

    console.log(endTime, currentMilliseconds, startTime);

    const isActive = endTime > currentMilliseconds > startTime;

    return (
      <div ref={ref} className="flex w-full justify-center">
        <div className="h-[315px] w-full lg:w-10/12 relative lg:rounded-xl bg-[url('https://caspars.mealo.dk/media/5604/cx5u-herojpg.png')] bg-center bg-no-repeat">
          <div className="top-0 left-0 lg:rounded-xl bg-black/60 absolute w-full h-full p-8 flex flex-col justify-end">
            <div className="flex items-center">
              <Image
                src="https://admin.machhub.dk/storage/restaurant/logo/678Grwxgf1AeSXGi4BiGelx9WJfnDuCVzVLanMAv.png"
                width={48}
                height={48}
                className="rounded-full border drop-shadow-lg"
              />
              <h1 className="ml-3 text-white text-lg lg:text-5xl font-bold">
                {restaurant.name}
              </h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center mt-3">
              <div className="flex items-center">
                <IconToolsKitchen2
                  color="white"
                  className="text-sm lg:text-md"
                />
                <p className="text-sm lg:text-md text-white ml-2">
                  {restaurant.address}
                </p>
              </div>
              <div className="flex items-center mt-3 lg:ml-8 lg:mt-0">
                <IconClock color="white" className="text-sm lg:text-md" />
                <p className="text-sm lg:text-md text-white ml-2">
                  {restaurant.afhentning_hours[day].day +
                    ": " +
                    restaurant.afhentning_hours[day].hours}
                </p>
                <span class="relative flex h-3 w-3 ml-2">
                  <span
                    class={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      isActive ? "bg-green-500" : "bg-red-500"
                    } opacity-75`}
                  ></span>
                  <span
                    class={`relative inline-flex rounded-full h-3 w-3 ${
                      isActive ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </span>
              </div>
            </div>
            <div
              className="flex lg:hidden items-center mt-3"
              onClick={() => setDeliveryType(!deliveryType)}
            >
              <div
                className={`${
                  deliveryType ? "bg-white" : ""
                } p-1 px-3 flex rounded-xl border border-white`}
              >
                <IconWalk
                  size={20}
                  className={`${deliveryType ? "text-black" : "text-white"}`}
                />
                <p
                  className={`${
                    deliveryType ? "text-black" : "text-white"
                  } ml-2 text-sm`}
                >
                  Afthenting
                </p>
              </div>
              <div
                className={`${
                  deliveryType ? "" : "bg-white"
                } p-1 px-3 flex ml-5 rounded-xl border border-white`}
              >
                <IconCar
                  size={20}
                  className={`${deliveryType ? "text-white" : "text-black"}`}
                />
                <p
                  className={`${
                    deliveryType ? "text-white" : "text-black"
                  } ml-2 text-sm`}
                >
                  Afthenting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
