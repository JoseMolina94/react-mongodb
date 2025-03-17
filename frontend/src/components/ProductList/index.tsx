import { useContext } from 'react';
import { ProductManageContext } from '../../contexts/ProductManageContext';
import { Product } from '../../types/Product';

import './styles.css'
import ProductItem from './ProductItem';


export default function ProductList() {
  const { products } = useContext(ProductManageContext)

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
            <ProductItem 
              product={product} 
              key={`product-item-${index}`} 
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}