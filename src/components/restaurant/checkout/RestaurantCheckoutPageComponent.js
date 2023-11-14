import {
  IconCar,
  IconClock,
  IconDeviceMobile,
  IconWalk,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export const RestaurantCheckoutPageComponent = ({
  totalPrice,
  restaurant,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  phoneCode,
  setPhoneCode,
  phoneNumber,
  setPhoneNumber,
  basket,
  deliveryType,
  setDeliveryType,
  day,
}) => {
  console.log(basket);
  return (
    <div className="flex flex-col items-center">
      <div className="h-20 w-full flex justify-center">
        <div className="w-11/12 lg:w-10/12 flex items-center h-full">
          <Image
            src={restaurant.logo}
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="w-11/12 lg:w-10/12 mt-5 flex justify-between items-start">
        <div className="w-full lg:w-[65%] flex flex-col p-8 bg-white rounded-xl drop-shadow-md">
          <h1 className="text-4xl font-bold">Checkout</h1>
          <div className="flex flex-col mt-4">
            <p className="text-xl font-medium">{restaurant.name}</p>
            <p className="text-md">{restaurant.address}</p>
          </div>
          <div className="flex items-center mt-5">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => setDeliveryType(!deliveryType)}
            >
              <div
                className={`${
                  deliveryType ? "bg-[#4c653f]" : "bg-white"
                } p-1 px-3 lg:p-2 lg:px-4 flex rounded-xl border border-black`}
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
                } p-1 px-3 lg:p-2 lg:px-4 flex ml-5 rounded-xl border border-black`}
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
            <div className="lg:flex hidden bg-white p-1 px-3 lg:p-2 lg:px-4 ml-5 rounded-xl border border-black">
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
                      ].hours.split("-")[0]
                    }
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8 w-full">
            <p className="text-xl font-bold">Dine detaljer</p>
            <div className="flex flex-col mt-5 w-full">
              <p className="text-md font-light">Fornavn</p>
              <input
                className="w-full p-2 mt-1 border border-gray-500 drop-shadow-md"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter fornavn"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <p className="text-md font-light">Efternavn</p>
              <input
                className="w-full p-2 mt-1 border border-gray-500 drop-shadow-md"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter efternavn"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <p className="text-md font-light">E-mailadresse</p>
              <input
                className="w-full p-2 mt-1 border border-gray-500 drop-shadow-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter efternavn"
              />
            </div>
            <div className="flex flex-col mt-5 w-full">
              <p className="text-md font-light">Telefon</p>
              <input
                className="w-full p-2 mt-1 border border-gray-500 drop-shadow-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter mobilnummer"
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <p className="text-xl font-bold">Produkter</p>
            <div className="flex flex-col">
              {basket.map((x, index) => (
                <div className="flex flex-col border border-gray-500 rounded-xl drop-shadow-lg p-3 mt-5">
                  <p className="font-bold text-md">
                    {x.amount} x {x.product.name}
                  </p>
                  <p className="text-gray-500 font-xs mt-1">{x.note}</p>
                  <p className="font-bold text-md mt-3">
                    {x.amount * x.product.price} kr.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex w-[30%] bg-white sticky top-10 flex-col items-center p-5 rounded-xl drop-shadow-2xl">
          <p className="text-2xl font-medium">Total (DKK inkl. moms)</p>
          <div className="w-full flex justify-between mt-3">
            <p>Produkter total</p>
            <p>120,00 kr.</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-semibold">Tilbage at betale</p>
            <p className="font-semibold">120,00 kr.</p>
          </div>
          <div className="mt-8 w-full p-3 rounded-xl bg-black cursor-pointer flex justify-center items-center">
            <p className="font-bold text-white">Kredit kart</p>
          </div>
          <p className="text-sm text-gray-500 my-3">
            Eller betal med mobile pay
          </p>
          <div className="w-full p-3 rounded-xl bg-[#4c653f] cursor-pointer flex justify-center items-center">
            <IconDeviceMobile size={24} color="white" />
            <p className="font-bold text-white ml-3">Mobilepay</p>
          </div>
          <p className="mt-3 mb-6 text-xs text-gray-500">Sikker betailing</p>
          <Image src="/payment_options.png" width={195} height={22} />
        </div>
      </div>
    </div>
  );
};
