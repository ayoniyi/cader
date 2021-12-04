import styles from './css/section2.module.scss'
import Image from 'next/image'

import Vid from '../assets/png/vid.png'
//import Steps from '../assets/svg/steps.svg'
import Step1 from '../assets/svg/step1.svg'
import Step2 from '../assets/svg/step2.svg'
import Step3 from '../assets/svg/step3.svg'

const Section2 = () => {
  return (
    <div className={styles.sectionTwoContent}>
      <div className={styles.topText}>
        <p className={styles.titleSmall}>What we offer</p>
        <div className={styles.titleBg}>
          Why should you use Cader?, this is why
        </div>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.bodyLeft}>
          <div className={styles.vid}>
            <Image src={Vid} alt="how to use cader" />
          </div>
        </div>
        <div className={styles.bodyRight}>
          <div className={styles.bodyRightContent}>
            <div className={styles.bRTitle}>
              <h1>Get started in 3 steps</h1>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepImg}>
                <Image src={Step1} alt="step 1" />
              </div>
              <div className={styles.stepTxt}>
                <h2>Create an account</h2>
                <p>Create an account with your, name, email and phone number</p>
              </div>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepImg2}>
                <Image src={Step2} alt="step 2" />
              </div>
              <div className={styles.stepTxt}>
                <h2>Pick your preferred plan</h2>
                <p>
                  Pick a plan that is suitable for you. We can also consult you
                  on this.
                </p>
              </div>
            </div>
            <div className={styles.stepBox}>
              <div className={styles.stepImg2}>
                <Image src={Step3} alt="step 3" />
              </div>
              <div className={styles.stepTxt}>
                <h2>Relax and enjoy being insured</h2>
                <p>
                  Sit back, relax and live your life knowing you are insured by
                  the best.
                </p>
              </div>
            </div>
            <div className={styles.btnBox}>
              <button className={styles.startBtn}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
