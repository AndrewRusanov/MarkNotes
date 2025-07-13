import { noteRepository } from '@/entities/Note/model/noteRepo'
import { NoteModel } from '@/entities/Note/model/types'
import { Notes, SearchBox } from '@/features'
import { DeleteModal } from '@/shared/ui'
import dayjs from 'dayjs'
import { FC, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [notes, setNotes] = useState<NoteModel[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [noteToDelete, setNoteToDelete] = useState<string | null>(null)

  useEffect(() => {
    noteRepository.getAll().then(setNotes)
  }, [])

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddNote = async () => {
    const newNote = {
      id: uuid(),
      title: 'Новая заметка',
      createAt: dayjs(),
      note: '',
      group: 'Личное',
    }

    await noteRepository.save(newNote)
    setNotes(prev => [newNote, ...prev])
  }

  const handleOpenDeleteModal = (id: string) => {
    setNoteToDelete(id)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setNoteToDelete(null)
  }

  const handleDeleteNote = async () => {
    if (noteToDelete) {
      await noteRepository.delete(noteToDelete)
      setNotes(prev => prev.filter(note => note.id !== noteToDelete))
      handleCloseModal()
    }
  }

  return (
    <aside className={styles.sidebar}>
      <SearchBox onSearchChange={setSearchQuery} />
      <Notes notes={filteredNotes} onOpenDeleteModal={handleOpenDeleteModal} />
      <button
        type='button'
        className={styles.createBtn}
        onClick={handleAddNote}
      >
        +
      </button>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteNote}
        title='Подтверждение удаления'
        message='Вы уверены, что хотите удалить эту заметку? Это действие нельзя отменить.'
      />
    </aside>
  )
}

export default Sidebar
