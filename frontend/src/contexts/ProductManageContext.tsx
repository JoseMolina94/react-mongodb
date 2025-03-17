import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import { Product, SpecialPrice } from "../types/Product"
import { getProducts } from "../services/products"
import { getUsers } from "../services/users/getUsers"
import { User } from "../types/User"
import { getSpecialPrices } from "../services/specialPrices"

type ProductManageContextProviderProps = {
  children: ReactNode
}

type ProductManageContextProviderValue = {
  selectedProduct: Product | null
  setSelectedProduct: Dispatch<SetStateAction<Product | null>> | ((value: Product | null) => void)
  products: Product[]
  users: User[]
  userSelected: User | null
  setUserSelected: Dispatch<SetStateAction<User | null>> | ((value: User | null) => void)
  specialPrices: SpecialPrice[]
  specialPriceSelected: SpecialPrice | null
  setSpecialPriceSelected: Dispatch<SetStateAction<SpecialPrice | null>> | ((value: SpecialPrice | null) => void)
  fetchProducts: () => void
  fetchUsers: () => void
  fetchSpecialPrices: () => void
}

export const ProductManageContext = createContext<ProductManageContextProviderValue>({
  selectedProduct: null,
  setSelectedProduct: (value: Product | null) => {},
  products: [],
  users: [],
  userSelected: null,
  setUserSelected: (value: User | null) => {},
  specialPrices: [],
  specialPriceSelected: null,
  setSpecialPriceSelected: (value: SpecialPrice | null) => {},
  fetchProducts: () => {},
  fetchUsers: () => {},
  fetchSpecialPrices: () => {}
})

export default function ProductManageContextProvider ({children} : ProductManageContextProviderProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [userSelected, setUserSelected] = useState<User | null>(null)
  const [specialPriceSelected, setSpecialPriceSelected] = useState<SpecialPrice | null>(null)

  const [products, setProducts] = useState<Product[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [specialPrices, setSpecialPrices] = useState<SpecialPrice[]>([])

  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (error) {
      console.error('Error obteniendo productos:', error)
      setProducts([])
    }
  }

  const fetchUsers = async () => {
    try {
      const data = await getUsers()
      setUsers(data)
    } catch (error) {
      console.error('Error obteniendo los usuarios:', error)
      setUsers([])
    }
  }

  const fetchSpecialPrices = async () => {
    try {
      const data = await getSpecialPrices(userSelected?._id)
      setSpecialPrices(data)
    } catch (error) {
      console.error('Error obteniendo los precios especiales segun el usuario:', error)
      setSpecialPrices([])
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchProducts()
  }, [])

  useEffect(() => {
    if (userSelected?._id) {
      fetchSpecialPrices()
    }
  }, [userSelected?._id])

  return (
    <ProductManageContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products,
        users,
        userSelected,
        setUserSelected,
        specialPrices,
        specialPriceSelected,
        setSpecialPriceSelected,
        fetchProducts,
        fetchUsers,
        fetchSpecialPrices,
      }}
    >
      {children}
    </ProductManageContext.Provider>
  )
}