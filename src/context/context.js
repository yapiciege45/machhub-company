"use client"
import { createContext } from 'react';
import { useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [deliveryType, setDeliveryType] = useState(0);

    const [infoModal, setInfoModal] = useState(false);
  
    return (
      <MyContext.Provider value={{ deliveryType, setDeliveryType, infoModal, setInfoModal }}>
        {children}
      </MyContext.Provider>
    );
};