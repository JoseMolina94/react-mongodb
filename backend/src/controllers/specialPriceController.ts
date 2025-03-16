import { Request, Response } from 'express'
import SpecialPrice from '../models/SpecialPrice'

export const getSpecialPrices = async (req: Request, res: Response) => {
    try {
        const { userID } = req.query
        const filter = userID ? { userID } : {}
        const specialPrices = await SpecialPrice.find(filter)

        res.json(specialPrices)
    } catch (error) {
        console.error('Error obteniendo los precios especiales:', error)
        res.status(500).json({ message: 'Error obteniendo los precios especiales' })
    }
}

export const createSpecialPrice = async (req: Request, res: Response) => {
    try {
        const newSpecialPrice = new SpecialPrice(req.body)
        await newSpecialPrice.save()
        res.status(201).json(newSpecialPrice)
    } catch (error) {
        console.error('Error creando el precio especial:', error)
        res.status(500).json({ message: 'Error creando el precio especial' })
    }
}

export const getSpecialPriceById = async (req: Request, res: Response) => {
  try {
      const specialPrice = await SpecialPrice.findById(req.params.id)
      if (!specialPrice) {
          return res.status(404).json({ message: 'Precio especial no encontrado' })
      }
      res.json(specialPrice)
  } catch (error) {
      console.error('Error obteniendo el precio especial:', error)
      res.status(500).json({ message: 'Error obteniendo el precio especial' })
  }
}

export const updateSpecialPrice = async (req: Request, res: Response) => {
  try {
      const updatedSpecialPrice = await SpecialPrice.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
      )
      if (!updatedSpecialPrice) {
          return res.status(404).json({ message: 'Precio especial no encontrado' })
      }
      res.json(updatedSpecialPrice)
  } catch (error) {
      console.error('Error actualizando el precio especial:', error)
      res.status(500).json({ message: 'Error actualizando el precio especial' })
  }
}

export const deleteSpecialPrice = async (req: Request, res: Response) => {
  try {
      const deletedSpecialPrice = await SpecialPrice.findByIdAndDelete(req.params.id)
      if (!deletedSpecialPrice) {
          return res.status(404).json({ message: 'Precio especial no encontrado' })
      }
      res.json({ message: 'Precio especial eliminado' })
  } catch (error) {
      console.error('Error eliminando el precio especial:', error)
      res.status(500).json({ message: 'Error eliminando el precio especial' })
  }
}