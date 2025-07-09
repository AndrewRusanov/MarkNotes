import { EMPTY_NOTE, MOCK_NOTES } from '@/entities/Note/model/mockNotes'
import { NoteModel } from '@/entities/Note/model/types'
import { Notes, SearchBox } from '@/features'
import { FC, useState } from 'react'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [notes, setNotes] = useState<NoteModel[]>(MOCK_NOTES)

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddNote = () => {
    setNotes(prev => [EMPTY_NOTE, ...prev])
  }

  return (
    <aside className={styles.sidebar}>
      <SearchBox onSearchChange={setSearchQuery} />
      <Notes notes={filteredNotes} />
      <button type='button' onClick={handleAddNote}>
        +
      </button>
    </aside>
  )
}

export default Sidebar
