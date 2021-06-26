import ImageCard from '@components/ImageCard/ImageCard'
import styles from './ExperienceSection.module.scss'
export default function ExperienceSection() {
  return (
    <div className={styles.experienceSection}>
      <div className={styles.trickSection}>
        <div className={styles.cardPart}>
          <div className={styles.cards}>
            <ImageCard inlineStyles={{ left: "10%" }} src="side.jpg" />
            <ImageCard inlineStyles={{ left: "25%", zIndex: 1 }} src="eb2.jpg" />
            <ImageCard inlineStyles={{ left: "40%" }} src="toad.jpg" />
          </div>
        </div>
        <div className={styles.textPart}>
          <div>

            <h1>
              Tricktionary
            </h1>
            <p>
              massive collection of jump rope tricks.

            </p>
            <p>
              find out which one suits your style.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.subscribeSection}>

      </div>
    </div>
  )
}
