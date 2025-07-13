import { ErrorBoundary } from '@/app/providers'
import { Navbar, Sidebar } from '@/widgets'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './NotesLayout.module.scss'

const NotesLayout: FC = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Sidebar />
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  )
}

export default NotesLayout
