import { noteRepository } from '@/entities/Note/model/noteRepo'
import { NoteModel } from '@/entities/Note/model/types'
import { Notes, SearchBox } from '@/features'
import dayjs from 'dayjs'
import { FC, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [notes, setNotes] = useState<NoteModel[]>([])

  useEffect(() => {
    noteRepository.getAll().then(setNotes)
  }, [])

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddNote = async () => {
    const newNote: NoteModel = {
      id: uuid(),
      title: 'Новая заметка',
      createAt: dayjs(),
      note: '',
      group: 'Личное',
    }

    await noteRepository.save(newNote)
    setNotes(prev => [newNote, ...prev])
  }

  const handleDeleteNote = async (id: string) => {
    await noteRepository.delete(id)
    setNotes(prev => prev.filter(note => note.id !== id))
  }

  return (
    <aside className={styles.sidebar}>
      <SearchBox onSearchChange={setSearchQuery} />
      <Notes notes={filteredNotes} onDeleteNote={handleDeleteNote} />
      <button
        type='button'
        className={styles.createBtn}
        onClick={handleAddNote}
      >
        +
      </button>
    </aside>
  )
}

export default Sidebar
