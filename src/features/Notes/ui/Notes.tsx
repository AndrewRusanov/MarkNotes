import { Note } from '@/entities'
import { NoteModel } from '@entities/Note/model/types'
import { FC } from 'react'

interface Props {
  notes: NoteModel[]
  onDeleteNote: (id: string) => void
}

const Notes: FC<Props> = ({ notes, onDeleteNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  )
}

export default Notes
