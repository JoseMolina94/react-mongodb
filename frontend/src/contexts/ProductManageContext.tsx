import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { Product } from "../types/Product"
import { getProducts } from "../services/products"

type ProductManageContextProviderProps = {
  children: ReactNode
}

type ProductManageContextProviderValue = {
  selectedProduct: Product | null
  setSelectedProduct: Dispatch<SetStateAction<Product | null>> | ((value: Product) => void)
  products: Product[]
}

export const ProductManageContext = createContext<ProductManageContextProviderValue>({
  selectedProduct: null,
  setSelectedProduct: (value: Product) => {},
  products: []
})

export default function ProductManageContextProvider ({children} : ProductManageContextProviderProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error obteniendo productos:', error);
      setProducts([])
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductManageContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products
      }}
    >
      {children}
    </ProductManageContext.Provider>
  )
}