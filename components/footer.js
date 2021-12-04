import styles from './css/footer.module.scss'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <h1>Cader</h1>
        </div>
        <div className={styles.footerRight}>
          <nav className={styles.footerLinks}>
            <Link passHref href="">
              <p>Plans</p>
            </Link>
            <Link passHref href="">
              <p>About us</p>
            </Link>
            <Link passHref href="">
              <p>Blog</p>
            </Link>
            <Link passHref href="">
              <p>FAQ</p>
            </Link>
            <Link passHref href="">
              <p>Contact us</p>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
