import {
  IconInfoCircle,
  IconMail,
  IconPhone,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

export const InfoModal = ({ restaurant, day, setInfoModal, infoModal }) => {
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-screen justify-end items-center bg-black/80 ${
        infoModal ? "flex" : "hidden"
      }`}
    >
      <div className="h-screen w-11/12 md:w-1/2 lg:w-1/4 flex flex-col items-center p-6 bg-[#F5F3ED]">
        <div className="flex justify-between items-center w-full">
          <IconInfoCircle size={24} color="black" />
          <IconX
            size={24}
            color="black"
            className="cursor-pointer"
            onClick={() => setInfoModal(false)}
          />
        </div>

        <div className="flex flex-col mt-8 w-full">
          <p className="text-black font-bold text-sm">Åbningstider</p>
          {restaurant.settings.working_hours.delivery.map((x, index) => (
            <div className="flex justify-between items-center">
              <p
                className={`text-black text-sm ${
                  index == day ? "font-bold" : ""
                }`}
              >
                {x.name}:
              </p>
              <p
                className={`text-black text-sm ${
                  index == day ? "font-bold" : ""
                }`}
              >
                {x.hour}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full h-0.5 mt-8 bg-gray-200"></div>
        <div className="w-full flex flex-col mt-8">
          <p className="font-bold text-sm text-black">Kontaktoplysninger</p>
          <a
            href={`mailto:${restaurant.company.contact.email}`}
            className="flex items-center mt-1"
          >
            <IconMail size={24} color="#4c653f" />
            <p className="font-bold ml-3 text-sm text-[#4c653f]">
              {restaurant.company.contact.email}
            </p>
          </a>
          <a
            href={`tel:${restaurant.company.contact.phone}`}
            className="flex items-center mt-1"
          >
            <IconPhone size={24} color="#4c653f" />
            <p className="font-bold ml-3 text-sm text-[#4c653f]">
              {restaurant.company.contact.phone}
            </p>
          </a>
        </div>
        <div className="w-full h-0.5 mt-8 bg-gray-200"></div>
        <div className="w-full flex flex-col mt-8">
          <p className="text-sm text-black">Privatlivspolitik</p>
          <p className="text-sm text-black">Handelsbetingelser</p>
        </div>
        <div className="w-full h-0.5 mt-8 bg-gray-200"></div>
        <div className="w-full mt-8">
          <Image src="/sekontrolrapport.jpeg" width={100} height={50} />
        </div>
      </div>
    </div>
  );
};
