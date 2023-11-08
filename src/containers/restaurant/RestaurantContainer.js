"use client";
import { RestaurantNavbarComponent } from "@/components/restaurant/RestaurantNavbarComponent";
import { RestaurantTopComponent } from "@/components/restaurant/RestaurantTopComponent";
import { MyContext } from "@/context/context";
import { getRestaurant } from "@/hooks/restaurant/getRestaurant";
import React, { useEffect, useRef } from "react";
import { useContext, useState } from "react";
import { InfoModal } from "../shared/InfoModal";
import { RestaurantMenuLeftComponent } from "@/components/restaurant/RestaurantMenuLeftComponent";
import { RestaurantMenuCenterComponent } from "@/components/restaurant/RestaurantMenuCenterComponent";
import { RestaurantMenuRightComponent } from "@/components/restaurant/RestaurantMenuRightComponent";
import { RestaurantCategoryComponent } from "@/components/restaurant/RestaurantCategoryComponent";
import { RestaurantProductComponent } from "@/components/restaurant/RestaurantProductComponent";
import { searchProduct } from "@/hooks/product/searchProduct";

export const RestaurantContainer = ({ slug }) => {
  const { deliveryType, setDeliveryType, infoModal, setInfoModal } =
    useContext(MyContext);

  const [firstRestaurant, setFirstRestaurant] = useState({});

  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState();
  const [category, setCategory] = useState(null);
  const [scrollingCategory, setScrollingCategory] = useState(null);

  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const topRef = useRef(null);

  const categoryListRef = useRef(null);

  const day = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1;

  useEffect(() => {
    getRestaurant(slug).then((x) => {
      setFirstRestaurant(x);
      setRestaurant(x);
    });
  }, []);

  useEffect(() => {
    if (firstRestaurant.categories) {
      searchProduct(firstRestaurant.categories, search).then((x) => {
        setRestaurant(() => {
          const newRestaurant = {
            ...firstRestaurant,
            categories: x,
          };

          return newRestaurant;
        });
      });
    }
  }, [search]);

  useEffect(() => {
    let newPrice = 0;

    if (basket) {
      basket.forEach((x) => {
        newPrice += x.amount * x.product.price;
      });
    }

    setTotalPrice(newPrice);
  }, [basket]);

  useEffect(() => {
    const handleScroll = () => {
      if (categoryListRef.current) {
        const categories =
          categoryListRef.current.querySelectorAll(".category"); // .category sınıfı olan elemanları seçin veya uygun bir seçici kullanın
        let currentCategory = null;

        categories.forEach((category) => {
          const rect = category.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const categoryId = category.id;
            currentCategory = categoryId.split("-")[1]; // Kategoriyi bulun
          }
        });

        setCategory(currentCategory);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function refreshBasket() {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  }

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")));
  }, []);

  useEffect(() => {
    const element = document.getElementById(`category-${scrollingCategory}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollingCategory]);

  if (restaurant) {
    {
      console.log(restaurant);
    }
    return (
      <div className="flex flex-col items-center">
        <RestaurantNavbarComponent
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          setInfoModal={setInfoModal}
        />
        <RestaurantTopComponent
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          day={day}
          ref={topRef}
        />
        <InfoModal
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          day={day}
          infoModal={infoModal}
          setInfoModal={setInfoModal}
        />
        <div
          className="flex justify-between w-11/12 lg:w-10/12"
          ref={categoryListRef}
        >
          <RestaurantMenuLeftComponent
            categories={restaurant.categories}
            category={category}
            setCategory={setCategory}
            setScrollingCategory={setScrollingCategory}
          />
          <RestaurantMenuCenterComponent
            search={search}
            setSearch={setSearch}
            setScrollingCategory={setScrollingCategory}
            categories={restaurant.categories}
            category={category}
            setCategory={setCategory}
          >
            {restaurant.categories.map((category, index) => (
              <RestaurantCategoryComponent
                key={index}
                id={`category-${category.id}`}
                name={category.name}
                description={category.description}
              >
                {category.products.map((product) => (
                  <RestaurantProductComponent
                    key={index}
                    product={product}
                    refreshBasket={refreshBasket}
                  />
                ))}
              </RestaurantCategoryComponent>
            ))}
          </RestaurantMenuCenterComponent>
          <RestaurantMenuRightComponent
            deliveryType={deliveryType}
            setDeliveryType={setDeliveryType}
            basket={basket}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    );
  }
};
