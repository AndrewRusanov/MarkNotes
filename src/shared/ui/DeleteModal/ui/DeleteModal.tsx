import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styles from './DeleteModal.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: ReactNode
}

const DeleteModal: FC<Props> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  if (!isOpen) return null

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Отмена
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Удалить
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default DeleteModal
