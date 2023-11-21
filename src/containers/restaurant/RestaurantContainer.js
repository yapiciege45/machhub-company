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
import { RestaurantCategoryComponent } from "@/components/restaurant/RestaurantCategoryComponent";
import { RestaurantProductComponent } from "@/components/restaurant/RestaurantProductComponent";
import { searchProduct } from "@/hooks/product/searchProduct";
import { RestaurantBasketModalComponent } from "@/components/restaurant/RestaurantBasketModalComponent";
import { RestaurantFixedNavbarComponent } from "@/components/restaurant/RestaurantFixedNavbarComponent";

export const RestaurantContainer = ({ slug }) => {
  const {
    deliveryType,
    setDeliveryType,
    infoModal,
    setInfoModal,
    basket,
    setBasket,
    refreshBasket,
    saveBasket,
    totalPrice,
    setTotalPrice,
  } = useContext(MyContext);

  const [firstRestaurant, setFirstRestaurant] = useState({});

  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState(null);
  const [category, setCategory] = useState(null);
  const [scrollingCategory, setScrollingCategory] = useState(null);

  const [basketModalIsOpen, setBasketModalIsOpen] = useState(false);

  const [user, setUser] = useState(null);

  const topRef = useRef(null);

  const categoryListRef = useRef(null);

  const day = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1;

  useEffect(() => {
    const domain = window.location.hostname;
    getRestaurant(slug, domain).then((x) => {
      setFirstRestaurant(x);
      setRestaurant(x);
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          setUser(data.data);
          console.log(data.data);
        } else {
          setUser(null);
        }
      });
  }, []);

  useEffect(() => {
    if (firstRestaurant.menu) {
      searchProduct(firstRestaurant.menu.categories, search).then((x) => {
        setRestaurant(() => {
          const menu = {
            ...firstRestaurant.menu,
            categories: x,
          };

          const newRestaurant = {
            ...firstRestaurant,
            ...menu,
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

  useEffect(() => {
    const gettedBasket = localStorage.getItem("basket");

    if (gettedBasket) {
      setBasket(JSON.parse(gettedBasket));
    }
  }, []);

  useEffect(() => {
    const element = document.getElementById(`category-${scrollingCategory}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollingCategory]);

  if (restaurant) {
    return (
      <div className="flex flex-col items-center">
        <RestaurantNavbarComponent
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          setInfoModal={setInfoModal}
          user={user}
        />
        <RestaurantFixedNavbarComponent
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          setInfoModal={setInfoModal}
          day={day}
          setBasketModalIsOpen={setBasketModalIsOpen}
        />
        <RestaurantBasketModalComponent
          basketModalIsOpen={basketModalIsOpen}
          setBasketModalIsOpen={setBasketModalIsOpen}
          restaurant={restaurant}
        />
        <RestaurantTopComponent
          deliveryType={deliveryType}
          setDeliveryType={setDeliveryType}
          restaurant={restaurant}
          day={day}
          ref={topRef}
          setBasketModalIsOpen={setBasketModalIsOpen}
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
            categories={restaurant.menu.categories}
            category={category}
            setCategory={setCategory}
            setScrollingCategory={setScrollingCategory}
          />
          <RestaurantMenuCenterComponent
            search={search}
            setSearch={setSearch}
            setScrollingCategory={setScrollingCategory}
            categories={restaurant.menu.categories}
            category={category}
            setCategory={setCategory}
          >
            {restaurant.menu.categories.map((category, index) => (
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
        </div>
      </div>
    );
  }
};
