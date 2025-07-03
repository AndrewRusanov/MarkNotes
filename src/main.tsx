import { App } from '@app/App'
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './app/providers'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MantineProvider withGlobalClasses withCssVariables>
          <App />
        </MantineProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
