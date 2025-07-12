import { EMPTY_NOTE, MOCK_NOTES } from '@/entities/Note/model/mockNotes'
import { NoteModel } from '@/entities/Note/model/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useNotePage = () => {
  const { id } = useParams<{ id: string }>()
  const [isEditMode, setIsEditMode] = useState(false)
  const [note, setNote] = useState<NoteModel>(EMPTY_NOTE)

  useEffect(() => {
    const foundNote = id ? MOCK_NOTES.find(note => note.id === id) : EMPTY_NOTE
    setNote(foundNote || EMPTY_NOTE)
    setIsEditMode(false)
  }, [id])

  const handleTitleChange = (value: string) => {
    setNote({ ...note, title: value })
  }

  const handleContentChange = (value: string) => {
    setNote({ ...note, note: value })
  }

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  return {
    note,
    isEditMode,
    handleTitleChange,
    handleContentChange,
    toggleEditMode,
  }
}
