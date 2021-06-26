
import Link from 'next/link'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>c 2021 ROPENFLASH</div>
      <div className={styles.firstSection}>
        <Link href="/tricks">tricks</Link>
        <Link href="/jumpropes">jump ropes</Link>
        <Link href="/dance">jump rope dance</Link>
      </div>
      <div className={styles.secondSection}>
        <Link href="/tutorials">tutorials</Link>
        <Link href="/jumpropes">contact</Link>
        <Link href="/dance">about us</Link>
      </div>
      <div className={styles.socialSection}></div>
    </footer>
  )
}
