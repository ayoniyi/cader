import styles from '../css/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import Hamburger from '../../assets/svg/hamburger.svg'
const Header = () => {
  return (
    <header>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <h1>Cader</h1>
        </div>
        <nav className={styles.headerRight}>
          <div className={styles.headerLinks}>
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

export default Header
