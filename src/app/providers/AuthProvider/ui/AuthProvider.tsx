import { SignInFormData } from '@/features/SignIn/model/model'
import { SignUpFormData } from '@/features/SignUp/model/model'
import { FC, ReactNode, useState } from 'react'
import { AuthContext } from '../model/AuthContext'

interface Props {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [user, setUser] = useState<SignInFormData | null>(() => {
    const storedUser = localStorage.getItem('currentUser')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const signUp = (newUser: SignUpFormData, callback: () => void) => {
    localStorage.setItem(newUser.email, JSON.stringify(newUser))
    callback()
  }
  const signIn = (user: SignInFormData, callback: () => void) => {
    setUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
    callback()
  }
  const signOut = (callback: () => void) => {
    setUser(null)
    localStorage.removeItem('currentUser')
    callback()
  }

  const value = {
    user,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext value={value}>{children}</AuthContext>
}
