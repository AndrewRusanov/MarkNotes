import { ErrorBoundary } from '@/app/providers'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const NotesLayout: FC = () => {
  return (
    <>
      {/* TODO: Сделать Sidebar */}
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default NotesLayout
