import MDEditor from '@uiw/react-md-editor'
import { FC } from 'react'
import './Markdown.css'

interface Props {
  value: string
  onChange: (value?: string) => void
}

const MarkdownEditor: FC<Props> = ({ value, onChange }) => {
  const handleChange = (val?: string) => {
    onChange(val ?? '')
  }

  return (
    <div className='markdown-editor-container'>
      <MDEditor
        value={value}
        onChange={handleChange}
        height={200}
        preview='edit'
        textareaProps={{
          spellCheck: true,
          placeholder: 'Введите текст заметки...',
        }}
      />
    </div>
  )
}

export default MarkdownEditor
