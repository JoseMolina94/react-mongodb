import { SpecialPrice } from "../../types/Product";

export const updateSpecialPrice = async (
  specialPrice: SpecialPrice
): Promise<any> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/special-prices/${specialPrice._id}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(specialPrice),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Algo salió mal');
  }
  return response.json();
};