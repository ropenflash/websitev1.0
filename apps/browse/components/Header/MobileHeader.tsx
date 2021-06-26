import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './MobileHeader.module.scss'


export default function MobileHeader() {
  const router = useRouter()

  const activeLinkDetector = path => {
    return router.pathname === path.toString() ? styles.active : null
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">ROPENFLASH</Link>
      </nav>
    </header>
  )
}
