import { Router } from 'express'

const router = Router()

// Rota POST para criar produto
router.post('/', (req, res) => {
  const { marca, modelo } = req.body
  const novoProduto = { id: Date.now(), marca, modelo }
  res.status(201).json({ message: 'Produto criado com sucesso!', produto: novoProduto })
})

export default router  