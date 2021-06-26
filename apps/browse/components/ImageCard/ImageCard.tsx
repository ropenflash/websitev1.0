import styles from './ImageCard.module.scss'
export default function ImageCard({ inlineStyles, src }) {
  return (
    // <div className={styles.ImageCard}>
    <img className={styles.image} style={inlineStyles} src={src} alt="imagel" />
    // </div>
  )
}
