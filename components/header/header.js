import styles from '../css/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Hamburger from '../../assets/svg/hamburger.svg'
const header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <h1>Cader</h1>
        </div>
        <nav className={styles.headerRight}>
          <div className={styles.headerLinks}>
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
          </div>
          <div className={styles.headerBtns}>
            <button>Signin</button>
            <button>Create an account</button>
          </div>
        </nav>
        <nav className={styles.headerRightRes}>
          <Image src={Hamburger} alt="menu" width="44" height="44" />
        </nav>
      </div>
    </header>
  )
}

export default header
