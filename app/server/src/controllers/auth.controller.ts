import { Request, Response } from 'express'
import * as authService from '../services/auth.service.js'

export const handleRegisterUser = async (req: Request, res: Response) => {
  try {
    
    const userData = req.body
    console.log(userData)

    const user = await authService.registerUser(userData)

    return res.status(201).json({ message: 'User registered successfully' })

  } catch (error) {
    
    if(error instanceof Error){

        return res.status(500).json({ error: error.message })

    }
  }
}

export const handleLoginUser = async (req: Request, res: Response) => {
  try {

    const loginData = req.body

    const { user, token } = await authService.loginUser(loginData)

    return res.status(200).json({ message: 'User logged in successfully', user, token })

  } catch (error) {

    if(error instanceof Error){

        return res.status(500).json({ error: error.message })

    }

  }
}

export const handleGetProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' })
    }

    // Backend access control: only allow users to view their own profile
    const requestedId = req.query.id as string
    if (requestedId && requestedId !== userId && req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'Cannot view other profiles' })
    }

    const { data: user, error } = await authService.getProfile(requestedId, userId)

    if (error) throw new Error(error.message)

    return res.status(200).json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message })
    }
  }
}