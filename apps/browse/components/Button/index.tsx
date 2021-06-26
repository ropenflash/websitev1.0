import styles from './Button.module.scss'

export default function Button({ onClickHandler, children }) {
  return (
    <a href="#" className={styles.button} onClick={onClickHandler}>
      {children}
    </a>
  )
}
