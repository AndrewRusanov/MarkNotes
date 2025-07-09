import { Note } from '@/entities'
import { NoteModel } from '@entities/Note/model/types'
import { FC } from 'react'

interface Props {
  notes: NoteModel[]
}

const Notes: FC<Props> = ({ notes }) => {
  return (
    <div>
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  )
}

export default Notes
