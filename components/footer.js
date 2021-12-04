import styles from './css/footer.module.scss'

import Link from 'next/link'

const footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1>Cader</h1>
        </div>
        <div className={styles.footerRight}>
          <nav className={styles.footerLinks}>
            <Link href="">
              <p>Plans</p>
            </Link>
            <Link href="">
              <p>About us</p>
            </Link>
            <Link href="">
              <p>Blog</p>
            </Link>
            <Link href="">
              <p>FAQ</p>
            </Link>
            <Link href="">
              <p>Contact us</p>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default footer
