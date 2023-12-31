import Company from "@/mocks/Company.json";

export const getCompany = async (domain) => {
  const res = await fetch(`https://nadmin.machhub.dk/api/front/company/find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      find_type: "domain",
      find_value: domain,
    }),
  });

  const data = await res.json();

  return data;
};
