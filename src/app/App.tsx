import '@/app/styles/index.scss'
import { useTheme } from '@app/providers'
import classNames from 'classnames'

export function App() {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', theme)}>
      <h1>Привет, мир!</h1>
    </div>
  )
}
