
import styles from './HeroSection.module.scss'

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <video
        autoPlay
        loop
        muted
        className={styles.video}>
        <source src="intro1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
