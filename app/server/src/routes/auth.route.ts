import express from 'express'
import { handleRegisterUser, handleLoginUser, handleGetProfile } from '../controllers/auth.controller.js'
import { verifyToken } from '../middleware/auth.middleware.js'


const router = express.Router()

router.post('/register', handleRegisterUser)
router.post('/login', handleLoginUser)

router.get('/profile', verifyToken, handleGetProfile)

export default router