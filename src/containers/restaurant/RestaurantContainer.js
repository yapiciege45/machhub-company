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

  const firstRestaurant = getRestaurant(slug);

  const [search, setSearch] = useState("");
  const [restaurant, setRestaurant] = useState(getRestaurant(slug));
  const [category, setCategory] = useState(null);
  const [scrollingCategory, setScrollingCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(null);

  const topRef = useRef(null);

  const categoryListRef = useRef(null);

  const day = new Date().getDay() == 0 ? 6 : new Date().getDay() - 1;

  useEffect(() => {
    searchProduct(firstRestaurant.categories, search).then((x) => {
      setRestaurant(() => {
        const newRestaurant = {
          ...firstRestaurant,
          categories: x,
        };

        return newRestaurant;
      });
    });
  }, [search]);

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
    const element = document.getElementById(`category-${scrollingCategory}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollingCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // 'isIntersecting' özelliği, ref'in görünüp görünmediğini belirtir
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    // Observer'ı temizleme
    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, []);

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
          isVisible={isVisible}
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
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  img={product.img}
                />
              ))}
            </RestaurantCategoryComponent>
          ))}
        </RestaurantMenuCenterComponent>
        <RestaurantMenuRightComponent />
      </div>
    </div>
  );
};
