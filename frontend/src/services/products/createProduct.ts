import { Product } from "../../types/Product";

export const createProduct = async (product: Product): Promise<any> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Algo salió mal');
  }
  return response.json();
};