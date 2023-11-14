"use client";
import { HomeFooterComponent } from "@/components/home/HomeFooterComponent";
import { HomeNavbarComponent } from "@/components/home/HomeNavbarComponent";
import { HomeRestaurantsComponent } from "@/components/home/HomeRestaurantsComponent";
import React, { useContext, useEffect } from "react";

import Link from "next/link";
import { MyContext } from "@/context/context";
import { getCompany } from "@/hooks/company/getCompany";

export const HomeContainer = () => {
  const { company, setCompany } = useContext(MyContext);

  useEffect(() => {
    const domain = window.location.hostname;

    getCompany(domain).then((x) => {
      console.log(x);
      setCompany(x);
    });
  }, []);

  if (company) {
    return (
      <>
        <HomeNavbarComponent />
        <HomeRestaurantsComponent>
          {company.restaurants.map((x) => (
            <div
              key={x.id}
              className="rounded-xl p-5 bg-white hover:drop-shadow-2xl hover:-translate-y-2 transiion-all h-60 text-center flex flex-col justify-between items-center w-full sm:w-[48%] md:w-[31%] lg:w-[25%]"
            >
              <h5 className="text-xl font-bold text-black">{x.name}</h5>
              <h5 className="text-md text-black">{x.address}</h5>
              <Link
                href={`/r/${x.slug}`}
                className="w-full rounded-xl p-2 text-md bg-[#E4E4DC] text-black"
              >
                Go to Restaurant
              </Link>
            </div>
          ))}
        </HomeRestaurantsComponent>
        <HomeFooterComponent />
      </>
    );
  }
};
