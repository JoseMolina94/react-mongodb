import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import Input from "../Commons/Input"
import Select from "../Commons/Select"
import { ProductManageContext } from "../../contexts/ProductManageContext"
import { createSpecialPrice, updateSpecialPrice } from "../../services/specialPrices"

import './style.css'
import { SpecialPrice } from "../../types/Product"

const DEF_VALUE = {
  userID: '',
  productID: '',
  value: 0
}

export default function ProductSpecialPriceForm() {
  const [formState, setFormState] = useState<any>(DEF_VALUE)
  const { 
    products, 
    users, 
    specialPriceSelected, 
    userSelected,
    selectedProduct, 
    setSpecialPriceSelected,
    specialPrices,
    fetchSpecialPrices,
    setSelectedProduct
  } = useContext(ProductManageContext)

  const findExistSpecialPrice = () => {
    const found = specialPrices.find((specialPrice: SpecialPrice) => (
      ((specialPrice?.userID || '') === (formState?.userID || '')) &&
      ((specialPrice?.productID || '') === (formState?.productID || ''))
    ))

    if (found) {
      setSpecialPriceSelected(found)
    } else {
      setSpecialPriceSelected(null)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: parseInt(value),
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    })

    findExistSpecialPrice()
  }

  const clearForm = () => {
    setFormState(DEF_VALUE)
    setSpecialPriceSelected(null)
    setSelectedProduct(null)
  }

  const createSpecialPriceFunc = async () => {
    try {
      const data = {
        value: parseInt(formState.value),
        userID: formState.userID,
        productID: formState.productID,
      }

      const response = await createSpecialPrice(data)
      
      if (response?._id) {
        alert('Precio especial guardado!!')
        clearForm()
        fetchSpecialPrices()
      } else {
        alert('Error al crear el precio especial')
        fetchSpecialPrices()
      }
    } catch(err: any) {
      console.error(err)
    }
  }

  const updateSpecialPriceFunc = async () => {
    try {
      const data = {
        value: parseInt(formState.value),
        userID: formState.userID,
        productID: formState.productID,
        _id: specialPriceSelected?._id
      }

      const response = await updateSpecialPrice(data)
      
      if (response?._id) {
        alert('Precio especial guardado!!')
        clearForm()
        fetchSpecialPrices()
      } else {
        alert('Error al crear el precio especial')
        fetchSpecialPrices()
      }
    } catch(err: any) {
      console.error(err)
    }
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (specialPriceSelected?._id) {
      updateSpecialPriceFunc()
    } else {
      createSpecialPriceFunc()
    }
  }

  useEffect(() => {
    if (specialPriceSelected?._id) {
      setFormState(specialPriceSelected)
    } else {
      setFormState({
        userID: userSelected?._id || '',
        productID: selectedProduct?._id || '',
        value: 0
      })
    }
  }, [
    specialPriceSelected?._id, 
    userSelected?._id, 
    selectedProduct?._id
  ])

  return (
    <form 
      onSubmit={onSubmit} 
      className="product-form"
    >
      <Select
        name="userID"
        value={formState.userID}
        options={users || []}
        label="Usuario Relacionado"
        placeholder="Seleccione un usuario"
        onChange={(e :ChangeEvent<HTMLSelectElement>) => handleSelectChange('userID', e.target.value)}
        valueProp='_id'
        labelProp="name"
        required
      />

      <Select
        name="productID"
        value={formState.productID}
        options={products || []}
        label="Producto Relacionado"
        placeholder="Seleccione un producto"
        onChange={(e :ChangeEvent<HTMLSelectElement>) => handleSelectChange('productID', e.target.value)}
        valueProp='_id'
        labelProp="name"
        required
      />

      <Input
        name='value'
        value={formState.value}
        onChange={handleInputChange}
        label='Precio Especial'
      />

      <div className="btn-container">
        <button 
          type="submit" 
          className="btn-create btn-medium"
        >
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