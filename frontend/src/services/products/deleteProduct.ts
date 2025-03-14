export const deleteProduct = async (id: string): Promise<any> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Algo salió mal');
  }
  return response.json();
};