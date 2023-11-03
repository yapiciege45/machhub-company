import React from 'react'

export const RestaurantMenuLeftComponent = ({ restaurant }) => {
  return (
    <div className="p-5 w-2/12 hidden lg:block">
        {
            restaurant.categories.map(x => (
                <p className="text-md text-gray hover:text-black transition-all mt-2 drop-shadow-2xl cursor-pointer">{x.name}</p>
            ))
        }
    </div>
  )
}
