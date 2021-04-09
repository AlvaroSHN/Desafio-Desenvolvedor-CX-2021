export async function getCategories() {
  const getCategory = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const dataCategory = await getCategory.json();
  return dataCategory;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getProduct = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const dataProduct = await getProduct.json();
  return dataProduct;
}

export async function getProductsFromQuery(query) {
  const getQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const dataQuery = await getQuery.json();
  return dataQuery;
}

export async function getProductsFromId(id) {
  const getId = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const dataId = await getId.json();
  return dataId;
}
