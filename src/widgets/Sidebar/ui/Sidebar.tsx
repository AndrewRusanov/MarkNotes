import { MOCK_NOTES } from '@/entities/Note/model/mockNotes'
import { Notes } from '@/features'
import { FC } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      {/* TODO: сделать SearchBox */}
      <Notes notes={MOCK_NOTES} />
    </aside>
  )
}

export default Sidebar
