import { MOCK_NOTES } from '@/entities/Note/model/mockNotes'
import { Notes, SearchBox } from '@/features'
import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNotes = MOCK_NOTES.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <aside className={styles.sidebar}>
      <SearchBox onSearchChange={setSearchQuery} />
      <Notes notes={filteredNotes} />
    </aside>
  )
}

export default Sidebar
