"use client"
import { IconInfoCircle, IconMotorbike, IconShoppingBag, IconUserCircle } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

export const RestaurantNavbarComponent = ({ deliveryType, setDeliveryType, setInfoModal }) => {
  return (
    <div className="flex h-20 w-full justify-center">
        <div className="h-full w-11/12 md:w-10/12 flex justify-between items-center">
            <div className="rounded-xl h-10 cursor-pointer border hidden md:flex" onClick={() => setDeliveryType(!deliveryType)}>
                <div className={`${deliveryType ? 'bg-[#4C643F]' : ''} flex justify-center items-center rounded-xl px-3`}>
                    <IconShoppingBag size={16} className={`${deliveryType ? 'text-white' : 'text-black'}`} />
                    <p className={`${deliveryType ? 'text-white' : 'text-black'} text-sm ml-1`}>Afthenting</p>
                </div>
                <div className={`${deliveryType ? '' : 'bg-[#4C643F]'} flex justify-center items-center rounded-xl px-3`}>
                    <IconMotorbike size={16} className={`${deliveryType ? 'text-black' : 'text-white'}`} />
                    <p className={`${deliveryType ? 'text-black' : 'text-white'} text-sm ml-1`}>Levering</p>
                </div>
            </div>
            <Image
                src="https://admin.machhub.dk/storage/restaurant/logo/678Grwxgf1AeSXGi4BiGelx9WJfnDuCVzVLanMAv.png"
                width={48}
                height={48}
                className="rounded-full border drop-shadow-lg"
            />
            <div className="flex items-center">
                <div className="bg-[#E4E4DC] p-1 rounded-lg cursor-pointer mr-3">
                    <IconInfoCircle size={24} color="black" onClick={() => setInfoModal(true)} />
                </div>
                <div className="bg-[#E4E4DC] p-1 px-2 rounded-lg cursor-pointer flex items-center">
                    <IconUserCircle size={24} color="black" />
                    <p className="text-sm text-black font-bold ml-2">Log In</p>
                </div>
            </div>
        </div>
    </div>
  )
}
