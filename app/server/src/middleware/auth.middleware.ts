import { Request, Response, NextFunction } from 'express'
import supabase from '../config/supabase.js'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']

  console.log('🔍 Auth middleware triggered')
  console.log('Auth header:', authHeader ? 'present' : 'missing')

  const token = authHeader?.split(' ')[1]

// Check if there's no token
  if(!token){
    console.log('❌ No token in header')
    res.status(401).json({ error: 'No token provided' })
    return 
  }

  console.log('Token received:', token.slice(0, 20) + '...')

  const { data: { user }, error } = await supabase.auth.getUser(token)

  console.log('Supabase verification error:', error)
        console.log('User:', user?.id)

// Check if there's an error or no user is returned
  if(error || !user) {
    console.log('❌ Token verification failed:', error?.message)
    res.status(401).json({ error: 'Invalid or expired session'})
    return 
  }

  const { data: profile, error: profileError } = await supabase.from('profiles').select('id, role').eq('id', user.id).single()

  console.log('Profile fetch error:', profileError)
  console.log('Profile:', profile)


  if(profileError || !profile){
    console.log('❌ Profile not found:', profileError?.message)
    res.status(401).json({ error: 'Profile not found'})
    return
  }

  req.user  = { id: profile.id, role: profile.role}

  console.log('✅ Auth successful for user:', profile.id, 'role:', profile.role)

  next()
}