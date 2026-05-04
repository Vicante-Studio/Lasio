import { Request, Response } from 'express'
import * as authService from '../services/auth.service.js'

export const handleRegisterUser = async (req: Request, res: Response) => {
  try {
    
    const userData = req.body

    const user = await authService.registerUser(userData)

    return res.status(201).json({ message: 'User registered successfully' })

  } catch (error) {
    
    if(error instanceof Error){

        return res.status(500).json({ error: error.message })

    }
  }
}