import { EMPTY_NOTE } from '@/entities/Note/model/mockNotes'
import { noteRepository } from '@/entities/Note/model/noteRepo'
import { NoteModel } from '@/entities/Note/model/types'
import { useDebouncedCallback } from '@mantine/hooks'
import { ChangeEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useNotePage = () => {
  const { id } = useParams<{ id: string }>()
  const [note, setNote] = useState<NoteModel>(EMPTY_NOTE)
  const [isEditMode, setIsEditMode] = useState(false)

  useEffect(() => {
    if (!id) {
      setNote(EMPTY_NOTE)
      return
    }

    noteRepository.getById(id).then(loaded => {
      setNote(loaded || EMPTY_NOTE)
    })
  }, [id])

  const debouncedSave = useDebouncedCallback((updatedNote: NoteModel) => {
    noteRepository.save(updatedNote)
  }, 1000)

  const updateNote = (updated: NoteModel) => {
    setNote(updated)
    debouncedSave(updated)
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedNote = { ...note, title: event.target.value }
    updateNote(updatedNote)
  }

  const handleContentChange = (value?: string) => {
    updateNote({ ...note, note: value ?? '' })
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
