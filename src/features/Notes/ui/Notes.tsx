import { Note } from '@/entities'
import { NoteModel } from '@entities/Note/model/types'
import { FC } from 'react'

interface Props {
  notes: NoteModel[]
  onOpenDeleteModal: (id: string) => void
}

const Notes: FC<Props> = ({ notes, onOpenDeleteModal }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} onOpenDeleteModal={onOpenDeleteModal} />
      ))}
    </div>
  )
}

export default Notes
