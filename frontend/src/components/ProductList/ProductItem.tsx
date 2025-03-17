
import { useContext } from 'react'
import { Product, SpecialPrice } from '../../types/Product'
import { ProductManageContext } from '../../contexts/ProductManageContext'

import './styles.css'

type ProductItemProps = {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps) {
  const { setSelectedProduct, specialPrices, userSelected, setSpecialPriceSelected } = useContext(ProductManageContext)

  const selectProduct = (product: Product) => {
    setSelectedProduct(product)

    const found = specialPrices.find((specialPrice: SpecialPrice) => (
      ((specialPrice?.userID || '') === (userSelected?._id || '')) &&
      ((specialPrice?.productID || '') === (product?._id || ''))
    ))

    if (found) {
      setSpecialPriceSelected(found)
    }
  }

  const getPriceToShow = () => {
    const found = specialPrices.find((specialPrice: SpecialPrice) => (
      ((specialPrice?.userID || '') === (userSelected?._id || '')) &&
      ((specialPrice?.productID || '') === (product?._id || ''))
    ))

    if (found && found?._id) {
      return found?.value || product?.price || 0
    }

    return product?.price || 0
  }

  return (
    <tr className={`item ${(getPriceToShow() !== product?.price) && 'remark-green'}`}>
      <td className='item-cell' >{product.name}</td>
      <td className='item-cell font-xs' >{product.description}</td>
      <td
        className={`item-cell ${(getPriceToShow() !== product?.price) && 'has-special-price'}`}
      >
        {getPriceToShow()} $
      </td>
      <td className='item-cell' >{product.stock}</td>
      <td className='item-cell' >
        <span className='tag font-sm ' >{product.brand}</span>
      </td>
      <td className='item-cell' >{product.sku}</td>
      <td className='item-cell tag-container' >
        {
          (product.tags || []).map((tag: string, index: number) => (
            <span className='tag font-xs' key={`product-${product?.name}-${index}`}>
              {tag}
            </span>
          ))
        }
      </td>

      <td className='item-cell'>
        {
          userSelected?._id &&
          <div className='actions' >
            <button
              className={(getPriceToShow() !== product?.price) ? 'btn-update' : 'btn-create'}
              onClick={() => selectProduct(product)}
              type='button'
            >
              {(getPriceToShow() !== product?.price) ? 'Editar precio personalizado' : 'Crear precio personalizado'}
            </button>
          </div>
        }

      </td>
    </tr>
  )
}