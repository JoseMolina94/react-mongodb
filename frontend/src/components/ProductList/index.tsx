import { useState, useContext } from 'react';
import { ProductManageContext } from '../../contexts/ProductManageContext';
import { Product } from '../../types/Product';

import './styles.css'


export default function ProductList() {
  const { products, setSelectedProduct } = useContext(ProductManageContext)

  const selectProduct = (product: Product) => {
    setSelectedProduct(product)
  }

  return (
    <div className='product-list' >
      <table>
        <thead className='header'>
          <tr>
            <th className='header-cell' >Nombre</th>
            <th className='header-cell' >Descripción</th>
            <th className='header-cell' >Precio</th>
            <th className='header-cell' >Stock</th>
            <th className='header-cell' >Marca</th>
            <th className='header-cell' >SKU</th>
            <th className='header-cell' >Etiquetas</th>
            <th className='header-cell' >Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product, index: number) => (
            <tr className='item' key={`product-item-${index}`}>
              <td className='item-cell' >{product.name}</td>
              <td className='item-cell font-xs' >{product.description}</td>
              <td className='item-cell' >{product.price} $</td>
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
                <div className='actions' >
                  <button 
                    className='btn-update' 
                    onClick={() => selectProduct(product)}
                    type='button'
                  >
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}