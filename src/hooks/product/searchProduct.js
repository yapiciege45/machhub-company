export async function searchProduct(categories = [], search = "") {
  let products = [];

  categories.forEach((category) => {
    category.products.forEach((product) => {
      products.push(product);
    });
  });

  console.log(search, products);

  const searchedProducts = products.filter((x) => {
    const searchLabel = x.name + " " + x.description;

    return searchLabel.toLowerCase().search(search.toLowerCase()) > -1;
  });

  if (search != "") {
    return [
      {
        id: 1,
        name: "Searched Products",
        description: "Just searcheds",
        products: searchedProducts,
      },
    ];
  } else {
    return categories;
  }
}
