import { Request, Response } from 'express'
import User from '../models/User'

export const getUsers = async (req: Request, res: Response) => {
  try {
      const products = await User.find()
      res.json(products)
  } catch (error) {
      console.error('Error obteniendo los usuarios:', error)
      res.status(500).json({ message: 'Error obteniendo los usuarios' })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
      const product = await User.findById(req.params.id)
      if (!product) {
          return res.status(404).json({ message: 'Usuario no encontrado' })
      }
      res.json(product)
  } catch (error) {
      console.error('Error obteniendo el usuario:', error)
      res.status(500).json({ message: 'Error obteniendo el usuario' })
  }
}