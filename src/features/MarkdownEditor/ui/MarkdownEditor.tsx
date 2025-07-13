import MDEditor from '@uiw/react-md-editor'
import { FC } from 'react'
import styles from './MarkdownEditor.module.scss'

interface Props {
  value: string
  onChange: (value?: string) => void
}

const MarkdownEditor: FC<Props> = ({ value, onChange }) => {
  const handleChange = (val?: string) => {
    onChange(val ?? '')
  }

  return (
    <div className={styles.wrapper}>
      <MDEditor
        value={value}
        onChange={handleChange}
        height={400}
        textareaProps={{
          placeholder: 'Введите текст заметки...',
          spellCheck: true,
          className: styles.text,
        }}
      />
    </div>
  )
}

export default MarkdownEditor
