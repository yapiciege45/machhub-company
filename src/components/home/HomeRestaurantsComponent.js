import React from 'react'

export const HomeRestaurantsComponent = ({ children }) => {
  return (
    <div className="relative w-full min-h-[85vh] bg-[url('https://wallpapers.com/images/hd/restaurant-background-2ez77umko2vj5w02.jpg')] bg-center bg-no-repeat">
      <div className="absolute top-0 left-0 bg-black/70 w-full min-h-[85vh] flex flex-wrap justify-around items-center">
        {children}
      </div>
    </div>
  )
}
