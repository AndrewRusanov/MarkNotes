import { ErrorBoundary } from '@/app/providers'
import { Navbar } from '@/widgets'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const NotesLayout: FC = () => {
  return (
    <>
      {/* TODO: Сделать Sidebar */}
      <Navbar />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default NotesLayout
