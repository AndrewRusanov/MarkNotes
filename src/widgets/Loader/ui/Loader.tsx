import { LoaderIcon } from '@/shared'
import { FC } from 'react'
import styles from './Loader.module.scss'

interface Props {
  text?: string
}

const Loader: FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <LoaderIcon />
      {text && <span className={styles.text}>{text}</span>}
    </div>
  )
}

export default Loader
