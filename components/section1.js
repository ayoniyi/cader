import styles from './css/section1.module.scss'
import Image from 'next/image'

//import Img1 from '../assets/svg/arrow.svg'
import Txt1 from '../assets/svg/txt/txt2.svg'
import Txt1M from '../assets/svg/txt/txt2m.svg'
import offer1 from '../assets/svg/flexible.svg'
import offer2 from '../assets/svg/quality.svg'
import offer3 from '../assets/svg/inclusive.svg'

const section1 = () => {
  return (
    <div className={styles.sectionOneContent}>
      <div className={styles.topText}>
        <p className={styles.titleSmall}>What we offer</p>
        <div className={styles.titleBg}>
          {/* Why should you use Cader?, this is why
          <span className={styles.arrow}>
            <Image src={Img1} alt="arrow" />
          </span> */}
          <Image src={Txt1} alt="Why should you use Cader?, this is why" />
        </div>
        <div className={styles.titleBgM}>
          <Image src={Txt1M} alt="Why should you use Cader?, this is why" />
        </div>
      </div>
      <div className={styles.offersBox}>
        <div className={styles.offers}>
          <Image src={offer1} alt="flexible" />
          <div className={styles.offerTxt}>
            <h2>Flexible payment</h2>
            <p>
              Our monthly, quarterly and annual payment plans will make it easy
              for you to meet up with your payment obligations
            </p>
          </div>
        </div>
        <div className={styles.offers}>
          <Image src={offer2} alt="flexible" />
          <div className={styles.offerTxt}>
            <h2>Quality service</h2>
            <p>
              Our monthly, quarterly and annual payment plans will make it easy
              for you to meet up with your payment obligations
            </p>
          </div>
        </div>
        <div className={styles.offers}>
          <Image src={offer3} alt="flexible" />
          <div className={styles.offerTxt}>
            <h2>Inclusive plans</h2>
            <p>
              Our monthly, quarterly and annual payment plans will make it easy
              for you to meet up with your payment obligations
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default section1
