import { Product } from "../../types/Product";

export const updateProduct = async (
  product: Product
): Promise<any> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${product._id}`, {
      method: 'PUT',
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