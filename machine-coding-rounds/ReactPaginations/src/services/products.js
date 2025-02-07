export const getAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=500");
  const jsonData = await response.json();
  return jsonData;
};
