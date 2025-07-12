import { FC } from 'react'
import { useParams } from 'react-router-dom'
const NotePage: FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>NotePage {id}</h1>
    </div>
  )
}

export default NotePage
