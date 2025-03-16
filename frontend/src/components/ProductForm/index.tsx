import { ChangeEvent, FormEvent, useContext, useState } from "react"
import Input from "../Commons/Input"
import DropDown from "../Commons/DropDown"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import { createSpecialPrice } from "../../services/specialPrices"

import './style.css'

const DEF_VALUE = {
  userID: '',
  productID: '',
  value: 0
}

export default function ProductForm() {
  const [formState, setFormState] = useState<any>(DEF_VALUE)
  const { products, users } = useContext(ProductManageContext)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: parseInt(value),
    })
  }

  const handleDropDownChange = (name: string, value: any) => {
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const clearForm = () => {
    setFormState(DEF_VALUE)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const data = {
        value: parseInt(formState.value),
        userID: formState.userID._id,
        productID: formState.productID._id,
        _id: formState._id || null
      }
      console.log('DATA', data)

      const response = await createSpecialPrice(data)
      
      if (response?._id) {
        alert('Precio especial guardado!!')
        clearForm()
      } else {
        alert('Error al crear el precio especial')
      }
    } catch(err: any) {
      console.error(err)
    }
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="product-form"
    >
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
        name='value'
        value={formState.value}
        onChange={handleInputChange}
        label='Precio Especial'
      />

      <div className="btn-container">
        <button type="submit" className="btn-create btn-medium">
          Guardar
        </button>

        <button 
          type="button" 
          className="btn-remove btn-medium"
          onClick={() => clearForm()}
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}