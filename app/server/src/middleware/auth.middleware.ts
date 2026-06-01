import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET_KEY

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader?.split(' ')[1] // "Bearer <token>"

    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined')
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string
      email: string
      role: string
    }

    // Attach user to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role as 'admin' | 'agent' | 'user',
    }

    next()
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ error: 'Token expired' })
    }

    return res.status(401).json({ error: 'Invalid token' })
  }
}

// Check if user is admin
export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' })
  }
  next()
}

// Check if user is agent or admin
export const isAgentOrAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!['agent', 'admin'].includes(req.user?.role || '')) {
    return res.status(403).json({ error: 'Agent access required' })
  }
  next()
}