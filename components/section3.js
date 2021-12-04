import styles from './css/section3.module.scss'
import Testimonials from './testimonialsx'

const section3 = () => {
  return (
    <div className={styles.sectionThree}>
      <div className={styles.sectionThreeContent}>
        <div className={styles.topText}>
          <p className={styles.titleSmall}>Don’t take our word for it</p>
          <div className={styles.titleBg}>
            This is what our clients are saying
          </div>
        </div>
        <Testimonials />
      </div>
    </div>
  )
}

export default section3
