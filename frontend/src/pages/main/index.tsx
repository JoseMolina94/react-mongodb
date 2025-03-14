import { useContext } from "react"
import ProductList from "../../components/ProductList"
import { ProductManageContext } from "../../contexts/ProductManageContext"

export default function MainPage () {
  const { selectedProduct } = useContext(ProductManageContext)

  return (
    <div>
      <h1>Lista de Productos</h1>
      <div className={`layout ${selectedProduct?._id ? 'form-active' : ''} `} >
        <ProductList />
      </div>
    </div>
  )
}