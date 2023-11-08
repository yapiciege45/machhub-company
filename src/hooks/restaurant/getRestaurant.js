import Restaurants from "@/mocks/Restaurants.json";

export const getRestaurant = async (slug) => {
  const restaurant = Restaurants.find((x) => x.slug == slug);

  return restaurant;
};
