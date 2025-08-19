import { Router } from 'express'
const router = Router()

// exemplo de rota GET
router.get('/', (req, res) => {
  res.json({ message: 'Profile funcionando!' })
})

export default router  // <<< MUITO IMPORTANTE
