import { HomeFooterComponent } from '@/components/home/HomeFooterComponent'
import { HomeNavbarComponent } from '@/components/home/HomeNavbarComponent'
import { HomeRestaurantsComponent } from '@/components/home/HomeRestaurantsComponent'
import React from 'react'

import Restaurants from '@/mocks/Restaurants.json'
import Link from 'next/link'

export const HomeContainer = () => {
  return (
    <>
      <HomeNavbarComponent />
      <HomeRestaurantsComponent>
        {
          Restaurants.map(x => (
            <div key={x.id} className="rounded-xl p-5 bg-white hover:drop-shadow-2xl hover:-translate-y-2 transiion-all h-60 text-center flex flex-col justify-between items-center w-full sm:w-[48%] md:w-[31%] lg:w-[25%]">
              <h5 className="text-xl font-bold text-black">{x.name}</h5>
              <h5 className="text-md text-black">{x.description}</h5>
              <Link href={`/r/${x.slug}`} className="w-full rounded-xl p-2 text-md bg-[#E4E4DC] text-black">Go to Restaurant</Link>
            </div>
          ))
        }
      </HomeRestaurantsComponent>
      <HomeFooterComponent />
    </>
  )
}
