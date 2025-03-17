import { useContext } from "react"
import ProductList from "../../components/ProductList"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import ProductSpecialPriceForm from "../../components/ProductSpecialPriceForm"
import UserPricesFilter from "../../components/UserPricesFilter"

import './style.css'

export default function MainPage () {
  const { selectedProduct } = useContext(ProductManageContext)

  return (
    <div className="layout">
      <div className="page-header">
        <h1>Lista de Productos</h1>
        <UserPricesFilter />
      </div>
      
      <div className={`product-list-container ${selectedProduct?._id ? 'form-active' : ''} `} >
        <ProductList />

        {
          selectedProduct?._id &&
            <ProductSpecialPriceForm />
        }
      </div>
    </div>
  )
}