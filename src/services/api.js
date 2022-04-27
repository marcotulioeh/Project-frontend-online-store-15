export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL);
  return response.json();
}

export async function getProductsFromQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(URL);
  return response.json();
}

export async function getProductsFromCategory(categoryId) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const response = await fetch(URL);
  return response.json();
}
