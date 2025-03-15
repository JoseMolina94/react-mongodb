import { ChangeEvent, useContext, useState } from "react"
import { SpecialPrice } from "../../types/Product"
import Input from "../Commons/Input"
import DropDown from "../Commons/DropDown"
import { ProductManageContext } from "../../contexts/ProductManageContext"

import './style.css'

const DEF_VALUE = {
  userID: '',
  productID: '',
  value: 0
}

export default function ProductForm() {
  const [formState, setFormState] = useState<SpecialPrice>(DEF_VALUE)
  const { products, users } = useContext(ProductManageContext)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDropDownChange = (name: string, value: any) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="product-form" >
      <DropDown
        name="userID"
        value={formState.userID}
        options={users || []}
        label="Usuario Relacionado"
        onChange={handleDropDownChange}
        valueProp='_id'
        labelProp="name"
        getCompleteObject
        required
      />

      <DropDown
        name="productID"
        value={formState.productID}
        options={products || []}
        label="Producto Relacionado"
        onChange={handleDropDownChange}
        valueProp='_id'
        labelProp="name"
        getCompleteObject
        required
      />

      <Input
        name='price'
        value={formState.value}
        onChange={handleInputChange}
        label='Precio Especial'
      />
    </div>
  )
}