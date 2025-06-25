import { createContext } from 'react'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextProps = {
  theme: THEME
  setTheme: (theme: THEME) => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)

export const LOCAL_STORAGE_THEME_KEY = 'theme'
