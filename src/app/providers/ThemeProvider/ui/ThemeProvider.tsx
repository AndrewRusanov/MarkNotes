import { FC, ReactNode, useMemo, useState } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
} from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME) || THEME.DARK

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme)

  const defaultThemeProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return <ThemeContext value={defaultThemeProps}>{children}</ThemeContext>
}

export default ThemeProvider
