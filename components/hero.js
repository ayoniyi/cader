import styles from './css/hero.module.scss'
import Image from 'next/image'

import Img1 from '../assets/svg/heroimg1.svg'
import Img2 from '../assets/svg/heroimg2.svg'
// import Shape1 from '../assets/svg/heroshape1.svg'
// import Shape2 from '../assets/svg/heroshape2.svg'

import t1 from '../assets/svg/txt/hero.svg'
import t2 from '../assets/svg/txt/heroM.svg'
import t1m from '../assets/svg/txt/heroalt.svg'

const hero = () => {
  return (
    <div className={styles.heroContent}>
      <div className={styles.heroDesc}>
        {/* <h1 className={styles.heroTitle}> */}
        {/* Great health insurance has */}
        {/* </span> */}
        {/* been this */}
        {/* <span className={styles.shapeBox2}> */}
        {/* affordable */}
        {/* </h1> */}
        <div className={styles.heroT1}>
          <Image src={t1} alt="Great health insurance has..." />
        </div>
        <div className={styles.heroT2}>
          <Image src={t1m} alt="Great health insurance has..." />
        </div>
        <div className={styles.heroT3}>
          <Image src={t2} alt="Great health insurance has..." />
        </div>
        <p className={styles.heroText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus
          montes, porta vivamus in. Ipsum mi commodo in sed eget eget non eget
          lectus.
        </p>
        <div className={styles.heroBtns}>
          <button>Get Started</button>
          <button>Explore our plans</button>
        </div>
      </div>
      <div className={styles.heroImages}>
        <div className={styles.heroImgFront}>
          <Image src={Img1} alt="cader" />
        </div>
        <div className={styles.heroImgBack}>
          <Image src={Img2} alt="cader" />
        </div>
      </div>
    </div>
  )
}

export default hero
