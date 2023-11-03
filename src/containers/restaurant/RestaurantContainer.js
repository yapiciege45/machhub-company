"use client"
import { RestaurantNavbarComponent } from '@/components/restaurant/RestaurantNavbarComponent'
import { RestaurantTopComponent } from '@/components/restaurant/RestaurantTopComponent'
import { MyContext } from '@/context/context'
import { getRestaurant } from '@/hooks/getRestaurant'
import React from 'react'
import { useContext, useState } from 'react'
import { InfoModal } from '../shared/InfoModal'
import { RestaurantMenuLeftComponent } from '@/components/home/RestaurantMenuLeftComponent'
import { RestaurantMenuCenterComponent } from '@/components/home/RestaurantMenuCenterComponent'
import { RestaurantMenuRightComponent } from '@/components/home/RestaurantMenuRightComponent'

export const RestaurantContainer = ({ slug }) => {

    const { deliveryType, setDeliveryType, infoModal, setInfoModal } = useContext(MyContext)
    
    const restaurant = getRestaurant(slug)

    const day = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1

  return (
    <div className="flex flex-col items-center">
        <RestaurantNavbarComponent deliveryType={deliveryType} setDeliveryType={setDeliveryType} restaurant={restaurant} setInfoModal={setInfoModal} />
        <RestaurantTopComponent deliveryType={deliveryType} setDeliveryType={setDeliveryType} restaurant={restaurant} day={day} />
        <InfoModal deliveryType={deliveryType} setDeliveryType={setDeliveryType} restaurant={restaurant} day={day} infoModal={infoModal} setInfoModal={setInfoModal} />
        <div className="flex justify-between w-11/12 lg:w-10/12">
          <RestaurantMenuLeftComponent restaurant={restaurant} />
          <RestaurantMenuCenterComponent restaurant={restaurant} />
          <RestaurantMenuRightComponent />
        </div>
    </div>
  )
}
