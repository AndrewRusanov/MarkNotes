import { useAuth } from '@/app/providers'
import { LogOutIcon } from '@/shared'
import { ThemeSwitcher } from '@/widgets'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.scss'
import logo from '/public/icons/favicon-96x96.png'

const Navbar: FC = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogOut = () => {
    auth?.signOut(() => {
      navigate('/login')
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <button type='button' onClick={handleLogOut} className={styles.logOut}>
          <LogOutIcon />
        </button>
        <ThemeSwitcher />
      </div>
      <div className={styles.logoWrapper}>
        <h1 className={styles.title}>Mark Notes</h1>
        <img src={logo} alt='Логотип "Mark Notes"' className={styles.logo} />
      </div>
    </div>
  )
}

export default Navbar
