import { MyContext } from '@/context/context'
import { IconInfoCircle, IconMotorbike, IconShoppingBag, IconX } from '@tabler/icons-react'
import React, { useContext } from 'react'

export const InfoModal = ({ deliveryType, setDeliveryType, restaurant, day, setInfoModal, infoModal }) => {

  return (
    <div className={`fixed top-0 left-0 w-full h-screen justify-center items-center bg-black/80 ${infoModal ? 'flex' : 'hidden'}`}>
        <div className="w-11/12 md:w-1/2 lg:w-1/4 flex flex-col items-center rounded-xl p-6 bg-[#F5F3ED]">
            <div className="flex justify-between items-center w-full">
                <IconInfoCircle size={24} color="black" />
                <IconX size={24} color="black" className="cursor-pointer" onClick={() => setInfoModal(false)} />
            </div>
            <div className="rounded-xl h-10 mt-4 cursor-pointer border hidden md:flex" onClick={() => setDeliveryType(!deliveryType)}>
                <div className={`${deliveryType ? 'bg-[#4C643F]' : ''} flex justify-center items-center rounded-xl px-3`}>
                    <IconShoppingBag size={16} className={`${deliveryType ? 'text-white' : 'text-black'}`} />
                    <p className={`${deliveryType ? 'text-white' : 'text-black'} text-sm ml-1`}>Afthenting</p>
                </div>
                <div className={`${deliveryType ? '' : 'bg-[#4C643F]'} flex justify-center items-center rounded-xl px-3`}>
                    <IconMotorbike size={16} className={`${deliveryType ? 'text-black' : 'text-white'}`} />
                    <p className={`${deliveryType ? 'text-black' : 'text-white'} text-sm ml-1`}>Levering</p>
                </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
                <p className="text-black font-bold text-sm">Åbningstider</p>
                {
                    deliveryType ? (
                        restaurant.levering_hours.map((x, index) => (
                            <div className="flex justify-between items-center">
                                <p className={`text-black text-sm ${index == day ? 'font-bold' : ''}`}>{x.day}:</p>
                                <p className={`text-black text-sm ${index == day ? 'font-bold' : ''}`}>{x.hours}</p>
                            </div>
                        ))
                    ) : (
                        restaurant.afhentning_hours.map((x, index) => (
                            <div className="flex justify-between items-center">
                                <p className={`text-black text-sm ${index == day ? 'font-bold' : ''}`}>{x.day}:</p>
                                <p className={`text-black text-sm ${index == day ? 'font-bold' : ''}`}>{x.hours}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    </div>
  )
}
