import { Request, Response } from 'express'
import Product from '../models/Product'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        console.error('Error obteniendo productos:', error)
        res.status(500).json({ message: 'Error obteniendo productos' })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        console.error('Error creando producto:', error)
        res.status(500).json({ message: 'Error creando producto' })
    }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
      const product = await Product.findById(req.params.id)
      if (!product) {
          return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json(product)
  } catch (error) {
      console.error('Error obteniendo producto:', error)
      res.status(500).json({ message: 'Error obteniendo producto' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
      const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
      )
      if (!updatedProduct) {
          return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json(updatedProduct)
  } catch (error) {
      console.error('Error actualizando producto:', error)
      res.status(500).json({ message: 'Error actualizando producto' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id)
      if (!deletedProduct) {
          return res.status(404).json({ message: 'Producto no encontrado' })
      }
      res.json({ message: 'Producto eliminado' })
  } catch (error) {
      console.error('Error eliminando producto:', error)
      res.status(500).json({ message: 'Error eliminando producto' })
  }
}