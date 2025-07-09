import { getFormattedDate } from '@/shared'
import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NoteModel } from '../model/types'
import styles from './Note.module.scss'

interface Props {
  note: NoteModel
}

const Note: FC<Props> = ({ note }) => {
  return (
    <NavLink to={`/notes/${note.id}`} className={styles.note}>
      <h4 className={styles.title}>{note.title}</h4>
      <div className={styles.additionaInfo}>
        <span className={styles.createdAt}>
          {getFormattedDate(note.createAt)}
        </span>
        <div className={styles.group}>
          <div
            className={`${styles.groupCircle} ${
              styles[`groupCircle--${note.group}`]
            }`}
          />
          <span className={styles.groupName}>{note.group}</span>
        </div>
      </div>
    </NavLink>
  )
}

export default Note
