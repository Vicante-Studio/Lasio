import { Request, Response, NextFunction } from 'express'
import supabase from '../config/supabase.js'

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  const {
    data: { user },
    error
  } = await supabase.auth.getUser(token)

  if (error || !user) {
    return res.status(401).json({ error: 'Invalid or expired session' })
  }

  req.user = {
    id: user.id,
    email: user.email
  }

  next()
}