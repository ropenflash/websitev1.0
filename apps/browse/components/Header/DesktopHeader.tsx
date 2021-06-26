import Link from 'next/link'
import styles from './DesktopHeader.module.scss'
import { useRouter } from 'next/router'

export default function DesktopHeader() {

  const router = useRouter()

  const activeLinkDetector = path => {
    return router.pathname === path.toString() ? styles.active : null

  }
  return (
    <header className={styles.header} >
      <nav className={styles.nav}>
        <Link href="/">ROPENFLASH</Link>
        <ul className={styles.navList}>
          <Link href="/">
            <li className={activeLinkDetector("/")}>
              Home
            </li></Link>
          <Link href="/tricks">
            <li className={activeLinkDetector("/tricks")}>
              Tricks
            </li>
          </Link>
          <Link href="/tutorials">
            <li className={activeLinkDetector("/tutorials")}>
              Tutorials
            </li>
          </Link>
          <Link href="/dance">
            <li className={activeLinkDetector("/dance")}>
              Dance
            </li>
          </Link>
          <Link href="/contact">
            <li className={activeLinkDetector("/contact")}>
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
