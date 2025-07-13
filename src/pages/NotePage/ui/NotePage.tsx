import { MarkdownEditor, MarkdownViewer } from '@/features'
import { ToggleEditMode } from '@/widgets'
import { TextInput } from '@mantine/core'
import { FC, useRef } from 'react'
import { useNotePage } from '../hooks/useNotePage'
import styles from './NotePage.module.scss'

const NotePage: FC = () => {
  const {
    note,
    isEditMode,
    handleTitleChange,
    handleContentChange,
    toggleEditMode,
  } = useNotePage()

  const titleInputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={styles.notePage}>
      <div className={styles.header}>
        {isEditMode ? (
          <TextInput
            ref={titleInputRef}
            placeholder='Название заметки'
            required
            value={note.title}
            onChange={handleTitleChange}
            classNames={{
              input: styles.titleInput,
            }}
          />
        ) : (
          <h1 className={styles.title}>{note.title}</h1>
        )}

        <ToggleEditMode isEditMode={isEditMode} onToggle={toggleEditMode} />
      </div>

      <div className={styles.group}>Группа: {note.group}</div>
      <div className={styles.date}>
        Создано: {note.createAt.format('DD.MM.YYYY HH:mm')}
      </div>

      <div className={styles.content}>
        {isEditMode ? (
          <MarkdownEditor value={note.note} onChange={handleContentChange} />
        ) : (
          <MarkdownViewer>{note.note}</MarkdownViewer>
        )}
      </div>
    </div>
  )
}

export default NotePage
