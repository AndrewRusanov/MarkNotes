import { useAuth } from '@/app/providers'
import { SignIn, SignUp } from '@/features'
import { SignInFormData } from '@/features/SignIn/model/model'
import { SignUpFormData } from '@/features/SignUp/model/model'
import { FC, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './LoginPage.module.scss'

const LoginPage: FC = () => {
  const [mode, setMode] = useState<'signIn' | 'signUp'>('signIn')
  const auth = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from || '/'

  const handleSignUpSubmit = (formData: SignUpFormData) => {
    auth?.signUp(formData, () => {
      setMode('signIn')
      alert('Регистрация прошла успешно!')
    })
  }

  const handleSignInSubmit = (formData: SignInFormData) => {
    const userData = localStorage.getItem(formData.email)

    if (!userData) {
      alert('Пользователь не найден')
      return
    }

    const user = JSON.parse(userData)
    if (user.password !== formData.password) {
      alert('Неверный пароль!')
      return
    }

    auth?.signIn(user, () => {
      navigate(from)
      alert(`Добро пожаловать, ${user.email}!`)
    })
  }

  const handleToggleMode = () => {
    setMode(prevMode => (prevMode === 'signIn' ? 'signUp' : 'signIn'))
  }

  return (
    <div className={styles.wrapper}>
      {mode === 'signIn' ? (
        <>
          <SignIn onSubmit={handleSignInSubmit} />
          <span className={styles.subtitle}>
            Ещё не зарегистрированы?{' '}
            <button
              type='button'
              onClick={handleToggleMode}
              className={styles.actionBtn}
            >
              Зарегистрироваться
            </button>
          </span>
        </>
      ) : (
        <>
          <SignUp onSubmit={handleSignUpSubmit} />
          <span className={styles.subtitle}>
            Уже зарегистрированы?{' '}
            <button
              type='button'
              onClick={handleToggleMode}
              className={styles.actionBtn}
            >
              Войти
            </button>
          </span>
        </>
      )}
    </div>
  )
}

export default LoginPage
