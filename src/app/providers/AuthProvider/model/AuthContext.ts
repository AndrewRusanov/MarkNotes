import { SignInFormData } from '@/features/SignIn/model/model'
import { SignUpFormData } from '@/features/SignUp/model/model'
import { createContext } from 'react'

interface AuthContext {
  user: SignInFormData | null
  signIn: (user: SignInFormData, callback: () => void) => void
  signUp: (newUser: SignUpFormData, callback: () => void) => void
  signOut: (callback: () => void) => void
}

export const AuthContext = createContext<AuthContext | null>(null)
