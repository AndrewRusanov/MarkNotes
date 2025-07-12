import { FC } from 'react'
import styles from './ToggleEditMode.module.scss'

interface Props {
  isEditMode: boolean
  onToggle: () => void
}

export const ToggleEditMode: FC<Props> = ({ isEditMode, onToggle }) => {
  return (
    <button onClick={onToggle} className={styles.button}>
      {isEditMode ? 'Просмотр' : 'Редактировать'}
    </button>
  )
}
