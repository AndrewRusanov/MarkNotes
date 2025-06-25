import { ThemeSwitcher } from '@/widgets'
import { FC } from 'react'
import styles from './Navbar.module.scss'
import logo from '/public/icons/favicon-96x96.png'

const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt='Логотип "Mark Notes"' className={styles.logo} />
        <h1 className={styles.title}>Mark Notes</h1>
      </div>
      <ThemeSwitcher />
    </div>
  )
}

export default Navbar
