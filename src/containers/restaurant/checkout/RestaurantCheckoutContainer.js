"use client";
import { RestaurantCheckoutPageComponent } from "@/components/restaurant/checkout/RestaurantCheckoutPageComponent";
import { MyContext } from "@/context/context";
import { getRestaurant } from "@/hooks/restaurant/getRestaurant";
import React, { useContext, useEffect, useState } from "react";

export const RestaurantCheckoutContainer = ({ slug }) => {
  const { totalPrice, basket, refreshBasket, deliveryType, setDeliveryType } =
    useContext(MyContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [restaurant, setRestaurant] = useState("");

  const day = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1;

  useEffect(() => {
    const domain = window.location.hostname;

    getRestaurant(slug, domain).then((x) => {
      setRestaurant(x);
    });
    refreshBasket();
  }, []);

  if (restaurant) {
    return (
      <RestaurantCheckoutPageComponent
        totalPrice={totalPrice}
        basket={basket}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        phoneCode={phoneCode}
        setPhoneCode={setPhoneCode}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
        restaurant={restaurant}
        day={day}
      />
    );
  }
};
