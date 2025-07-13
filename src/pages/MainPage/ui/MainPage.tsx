import styles from './MainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <button type='button' className={styles.createBtn}>
        Создать заметку
      </button>
    </div>
  )
}

export default MainPage
