import { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import styles from './css/testimonials.module.scss'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import User1 from '../assets/png/user1.png'
import User2 from '../assets/png/user2.png'
import User3 from '../assets/png/user3.png'

const Testimonials = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    //focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: true,
  }

  //let { customSlider } = useRef(' ')

  return (
    // <div>
    <Slider
      {...settings}
      className={styles.sliderContainer}
      //ref={(slider) => (customSlider = slider)}
    >
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User1} alt="user1" />
        </div>
      </div>
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User3} alt="user3" />
        </div>
      </div>
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User2} alt="user2" />
        </div>
      </div>
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User1} alt="user1" />
        </div>
      </div>
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User3} alt="user3" />
        </div>
      </div>
      <div className={styles.imgSlide}>
        <div className={styles.imgBox}>
          <Image src={User2} alt="user2" />
        </div>
      </div>
    </Slider>
    // </div>
  )
}

export default Testimonials
