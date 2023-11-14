"use client";
import { getCookie } from "cookies-next";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [deliveryType, setDeliveryType] = useState(0);

  const [infoModal, setInfoModal] = useState(false);

  const [company, setCompany] = useState();

  const [basket, setBasket] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  function refreshBasket() {
    const gettedBasket = localStorage.getItem("basket");

    if (gettedBasket) {
      setBasket(JSON.parse(gettedBasket));
    }
  }

  function saveBasket() {
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  function increaseAmount(id) {
    const parsedBasket = JSON.parse(localStorage.getItem("basket"));

    let selectedProduct = parsedBasket.find((x) => x.product.id == id);

    let newBasket = parsedBasket.filter((x) => x.product.id != id);

    selectedProduct = {
      ...selectedProduct,
      amount: selectedProduct.amount + 1,
    };

    newBasket.push(selectedProduct);

    setBasket(newBasket);

    localStorage.setItem("basket", JSON.stringify(newBasket));
  }

  function decreaseAmount(id) {
    let parsedBasket = JSON.parse(localStorage.getItem("basket"));
    let selectedProduct = parsedBasket.find((x) => x.product.id == id);

    let newBasket = parsedBasket.filter((x) => x.product.id != id);

    selectedProduct = {
      ...selectedProduct,
      amount:
        selectedProduct.amount > 1
          ? selectedProduct.amount - 1
          : selectedProduct.amount,
    };

    newBasket.push(selectedProduct);

    setBasket(newBasket);

    localStorage.setItem("basket", JSON.stringify(newBasket));
  }

  function deleteProduct(id) {
    let parsedBasket = JSON.parse(localStorage.getItem("basket"));
    const newBasket = parsedBasket.filter((x) => x.product.id != id);

    setBasket(newBasket);

    saveBasket();
  }

  return (
    <MyContext.Provider
      value={{
        deliveryType,
        setDeliveryType,
        infoModal,
        setInfoModal,
        company,
        setCompany,
        basket,
        setBasket,
        refreshBasket,
        saveBasket,
        totalPrice,
        setTotalPrice,
        increaseAmount,
        decreaseAmount,
        deleteProduct,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
