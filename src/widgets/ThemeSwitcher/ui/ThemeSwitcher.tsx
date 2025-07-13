import { THEME } from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { MoonIcon, SunIcon } from '@/shared'
import { useTheme } from '@app/providers'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type='button'
      className={styles.themeSwitcher}
      onClick={toggleTheme}
    >
      {theme === THEME.DARK ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export default ThemeSwitcher
