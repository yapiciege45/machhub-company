import { IconCar, IconClock, IconToolsKitchen2, IconWalk } from '@tabler/icons-react'
import React from 'react'

export const RestaurantTopComponent = ({ deliveryType, setDeliveryType, restaurant, day }) => {
  return (
    <div className="flex w-full justify-center">
        <div className="h-[315px] w-full lg:w-10/12 relative lg:rounded-xl bg-[url('https://caspars.mealo.dk/media/5604/cx5u-herojpg.png')] bg-center bg-no-repeat">
            <div className="top-0 left-0 lg:rounded-xl bg-black/60 absolute w-full h-full p-8 flex flex-col justify-end">
                <h1 className="text-white text-lg lg:text-5xl font-bold">{restaurant.name}</h1>
                <div className="flex flex-col lg:flex-row lg:items-center mt-3">
                    <div className="flex items-center">
                        <IconToolsKitchen2 color="white" className="text-sm lg:text-md" />
                        <p className="text-sm lg:text-md text-white ml-2">{restaurant.address}</p>
                    </div>
                    <div className="flex items-center mt-3 lg:ml-8 lg:mt-0">
                        <IconClock color="white" className="text-sm lg:text-md" />
                        <p className="text-sm lg:text-md text-white ml-2">{restaurant.afhentning_hours[day].day + ': ' + restaurant.afhentning_hours[day].hours}</p>
                    </div>
                </div>
                <div className="flex lg:hidden items-center mt-3" onClick={() => setDeliveryType(!deliveryType)}>
                    <div className={`${deliveryType ? 'bg-white' : ''} p-1 px-3 flex rounded-xl border border-white`}>
                        <IconWalk size={20} className={`${deliveryType ? 'text-black' : 'text-white'}`} />
                        <p className={`${deliveryType ? 'text-black' : 'text-white'} ml-2 text-sm`}>Afthenting</p>
                    </div>
                    <div className={`${deliveryType ? '' : 'bg-white'} p-1 px-3 flex ml-5 rounded-xl border border-white`}>
                        <IconCar size={20} className={`${deliveryType ? 'text-white' : 'text-black'}`} />
                        <p className={`${deliveryType ? 'text-white' : 'text-black'} ml-2 text-sm`}>Afthenting</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
