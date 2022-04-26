export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  console.log(response);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL);
  return response.json();
}
