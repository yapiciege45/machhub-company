import Image from 'next/image'
import React from 'react'

export const HomeNavbarComponent = () => {
  return (
    <div className="h-24 w-full flex justify-center">
      <div className="h-full w-11/12 md:w-10/12 flex items-center">
        <Image
          src="https://admin.machhub.dk/storage/restaurant/logo/678Grwxgf1AeSXGi4BiGelx9WJfnDuCVzVLanMAv.png"
          width={64}
          height={64}
          className="rounded-full border drop-shadow-lg"
        />
        <p className="text-lg font-bold ml-4">Example Company</p>
      </div>
    </div>
  )
}
