import '@/app/styles/index.scss'
import { NotesLayout } from '@app/layout'
import { useTheme } from '@app/providers'
import classNames from 'classnames'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Login = lazy(() =>
  import('@/pages').then(module => ({
    default: module.LoginPage,
  }))
)
const NotFoundPage = lazy(() =>
  import('@/pages').then(module => ({
    default: module.NotFound,
  }))
)

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', theme)}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<NotesLayout />}>
          <Route path='/notes' element={<div>Основная страница</div>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
