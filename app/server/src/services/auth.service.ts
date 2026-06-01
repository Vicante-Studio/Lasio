import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import supabaseAdmin from '../config/supabaseAdmin.js';
import { LoginType, UserType } from '../types/auth.type.js';

const JWT_SECRET = process.env.JWT_SECRET_KEY

export const registerUser = async (userData: UserType) => {
    const { full_name, email, password } = userData

    //Hash password
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(password, saltRound)

    const { data, error } = await supabaseAdmin.from("users").insert({full_name, email, password_hash: passwordHash}).select().single()

    if(error) throw new Error(error.message)

    return data
}

export const loginUser = async (loginData: LoginType) => {
  const { email, password } = loginData

  const { data: user, error } = await supabaseAdmin.from("users").select('*').eq('email', email).single()

  if(error || !user){
    throw new Error('Invalid email or password')
  }

  const isMatch = await bcrypt.compare(password, user.password_hash)
  if(!isMatch) throw new Error('Invalid email or password')

  if(!JWT_SECRET) throw new Error('JWT_SECRET is not defined in environment variables')
  const token = jwt.sign(
    {id: user.id, email: user.email, role: user.role},
    JWT_SECRET,
    {'expiresIn': '1d'}
  )

  return { user, token }
}

export const getProfile = async (requestedId: string, userId: string) => {
  const data = await supabaseAdmin
      .from('users')
      .select('id, email, full_name, role, created_at')
      .eq('id', requestedId || userId)
      .single()

      return data
}

