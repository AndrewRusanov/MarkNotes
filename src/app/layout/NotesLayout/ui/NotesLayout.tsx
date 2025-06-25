import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const NotesLayout: FC = () => {
  return (
    <main>
      {/* TODO: Сделать Sidebar */}
      {/* TODO: обернуть Outlet в ErrorBoundary */}
      <Outlet />
    </main>
  )
}

export default NotesLayout
