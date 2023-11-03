import Image from 'next/image'
import React from 'react'

export const RestaurantMenuCenterComponent = ({ restaurant }) => {
  return (
    <div className="p-5 flex flex-col w-full lg:w-8/12 items-start">
      {
        restaurant.categories.map(category => (
          <div className="flex flex-col w-full py-5 border-b">
            <p className="text-2xl text-[#4c653f] font-bold">{category.name}</p>
            <p className="text-md italic font-light text-black mb-5">{category.description}</p>
            {
              category.products.map(product => (
                <div className="w-full flex border-t py-5 cursor-pointer">
                  <div className="w-2/3 flex flex-col">
                    <p className="text-xl font-bold">{product.name}</p>
                    <p className="text-sm italic font-light">{product.description}</p>
                    <p className="text-sm font-bold mt-3">{product.price}</p>
                  </div>
                  <div className="w-1/3 flex flex-col">
                    <Image 
                      src={product.img}
                      width={250}
                      height={250}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}
