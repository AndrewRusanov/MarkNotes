import '@/app/styles/index.scss'
import { useTheme } from '@app/providers'
import classNames from 'classnames'
import { Route, Routes } from 'react-router-dom'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', theme)}>
      <Routes>
        <Route path='/login' element={<div>LoginPage</div>} />
      </Routes>
    </div>
  )
}
