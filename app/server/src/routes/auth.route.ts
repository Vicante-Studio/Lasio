import express from 'express'
import { handleRegisterUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/register', handleRegisterUser)
router.post('/login')

export default router