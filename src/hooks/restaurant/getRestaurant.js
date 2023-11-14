import Company from "@/mocks/Company.json";

export const getRestaurant = async (slug, domain) => {
  const res = await fetch(`${process.env.API_URL}/api/front/restaurant/find`, {
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
  });

  const data = await res.json();

  console.log(data);

  return data;
};
