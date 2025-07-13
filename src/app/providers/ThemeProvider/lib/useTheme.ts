import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from './ThemeContext'

type UseThemeResult = {
  theme: THEME
  toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  const { theme, setTheme } = context

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme,
  }
}
