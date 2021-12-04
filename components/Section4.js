import styles from './css/section4.module.scss'

const Section4 = () => {
  return (
    <div className={styles.sectionFourContent}>
      <div className={styles.sectionTxt}>
        <span>
          <div className={styles.line}></div> Blog
        </span>
        <h1>Why families are getting health insurance.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          turpis pellentesque pellentesque ut donec. Urna risus sed massa
          feugiat vitae dictum viverra odio viverra. Ullamcorper habitasse
          vitae, egestas facilisi quis placerat nec. Tincidunt at nisi eu ut
          urna adipiscing tempus sem. In justo arcu, mauris in imperdiet. Sit ac
          lectus ullamcorper odio ut volutpat proin morbi cursus. Dis bibendum
          volutpat lectus{' '}
        </p>
        <button>Read More</button>
        <p className={styles.btnRes}>Read More</p>
      </div>
    </div>
  )
}

export default Section4
