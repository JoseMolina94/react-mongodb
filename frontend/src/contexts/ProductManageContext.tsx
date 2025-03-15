import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { Product } from "../types/Product"
import { getProducts } from "../services/products"
import { getUsers } from "../services/users/getUsers"
import { User } from "../types/User"

type ProductManageContextProviderProps = {
  children: ReactNode
}

type ProductManageContextProviderValue = {
  selectedProduct: Product | null
  setSelectedProduct: Dispatch<SetStateAction<Product | null>> | ((value: Product) => void)
  products: Product[]
  users: User[]
}

export const ProductManageContext = createContext<ProductManageContextProviderValue>({
  selectedProduct: null,
  setSelectedProduct: (value: Product) => {},
  products: [],
  users: []
})

export default function ProductManageContextProvider ({children} : ProductManageContextProviderProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [users, setUsers] = useState<User[]>([])

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error obteniendo productos:', error);
      setProducts([])
    }
  }

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Error obteniendo los usuarios:', error);
      setUsers([])
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchProducts()
  }, []);

  return (
    <ProductManageContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products,
        users
      }}
    >
      {children}
    </ProductManageContext.Provider>
  )
}