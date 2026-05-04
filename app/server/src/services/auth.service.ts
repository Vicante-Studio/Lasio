import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import supabaseAdmin from '../config/supabaseAdmin.js';
import { UserType } from '../types/auth.type.js';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const registerUser = async (userData: UserType) => {
    const { full_name, email, password } = userData

    //Hash password
    const saltRound = 10;
    const passwordHash = await bcrypt.hash(password, saltRound)

    const { data, error } = await supabaseAdmin.from("users").insert({full_name, email, password_hash: passwordHash}).select().single()

    if(error) throw new Error(error.message)

    return data
}