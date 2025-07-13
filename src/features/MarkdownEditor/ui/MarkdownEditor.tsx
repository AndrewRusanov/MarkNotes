import 'easymde/dist/easymde.min.css'
import { FC } from 'react'
import SimpleMDE from 'react-simplemde-editor'

interface Props {
  value: string
  onChange: (value: string) => void
}

const MarkdownEditor: FC<Props> = ({ value, onChange }) => {
  return (
    <SimpleMDE
      value={value}
      onChange={onChange}
      options={{
        //autofocus: true,
        //TODO: добавить spellChecker
        spellChecker: false,
        placeholder: 'Введите текст заметки...',
        status: false,
      }}
    />
  )
}

export default MarkdownEditor
