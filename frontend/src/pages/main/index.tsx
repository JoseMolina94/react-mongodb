import { useContext } from "react"
import ProductList from "../../components/ProductList"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import ProductForm from "../../components/ProductForm"
import UserPricesFilter from "../../components/UserPricesFilter"

export default function MainPage () {
  const { selectedProduct } = useContext(ProductManageContext)

  return (
    <div>
      <div className="page-header">
        <h1>Lista de Productos</h1>
        <UserPricesFilter />
      </div>
      
      <div className={`layout ${selectedProduct?._id ? 'form-active' : ''} `} >
        <ProductList />

        {
          selectedProduct?._id &&
            <ProductForm />
        }
      </div>
    </div>
  )
}