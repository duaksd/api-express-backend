import { Router } from 'express'

const router = Router()

let cars = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla' },
  { id: 2, marca: 'Honda', modelo: 'Civic' },
  { id: 3, marca: 'Ford', modelo: 'Focus' },
  { id: 4, marca: 'Chevrolet', modelo: 'Onix' },
  { id: 5, marca: 'Mitsubishi', modelo: 'TR4' }
]

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const car = cars.find(c => c.id === id)

  if (!car) {
    return res.status(404).json({ message: 'Carro não encontrado' })
  }

  res.json(car)
})

export default router
