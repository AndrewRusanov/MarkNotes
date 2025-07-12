import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  children: string
}

export const MarkdownViewer: FC<Props> = ({ children }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>
}
