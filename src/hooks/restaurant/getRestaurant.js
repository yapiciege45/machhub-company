import Company from "@/mocks/Company.json";

export const getRestaurant = async (slug, domain) => {
  const res = await fetch(
    `https://nadmin.machhub.dk/api/front/restaurant/find`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        find_type: "slug",
        find_value: slug,
        domain,
      }),
    },
  );

  const data = await res.json();

  console.log(data);

  return data;
};
