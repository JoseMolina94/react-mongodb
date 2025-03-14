import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { Product } from "../types/Product"

type ProductManageContextProviderProps = {
  children: ReactNode
}

type ProductManageContextProviderValue = {
  selectedProduct: Product | null
  setSelectedProduct: Dispatch<SetStateAction<Product | null>> | ((value: Product) => void)
}

export const ProductManageContext = createContext<ProductManageContextProviderValue>({
  selectedProduct: null,
  setSelectedProduct: (value: Product) => {}
})

export default function ProductManageContextProvider ({children} : ProductManageContextProviderProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <ProductManageContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductManageContext.Provider>
  )
}