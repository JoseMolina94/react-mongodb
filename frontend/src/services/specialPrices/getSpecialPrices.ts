
export const getSpecialPrices = async (userID: string = ''): Promise<any[]> => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/special-prices${userID && `?userID=${userID}`}`)
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || 'Algo salió mal')
  }
  return response.json()
};