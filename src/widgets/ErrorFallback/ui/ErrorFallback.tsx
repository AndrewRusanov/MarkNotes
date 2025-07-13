import { ErrorIcon } from '@/shared'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ErrorFallback.module.scss'

interface Props {
  message?: string
}

const DEFAULT_MESSAGE = 'Упс, что-то пошло не так...'

const ErrorFallback: FC<Props> = ({ message = DEFAULT_MESSAGE }) => {
  const navigate = useNavigate()

  const handleGoMain = () => {
    navigate('/notes', { replace: true })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ErrorIcon />
        <p className={styles.message}>{message}</p>
      </div>
      <button type='button' className={styles.action} onClick={handleGoMain}>
        На главную
      </button>
    </div>
  )
}

export default ErrorFallback
