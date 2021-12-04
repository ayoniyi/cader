import { useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import User1 from '../assets/png/user01.png'
import User2 from '../assets/png/user02.png'
import User3 from '../assets/png/user03.png'

import lArrow from '../assets/svg/leftarrow.svg'
import rArrow from '../assets/svg/rightarrow.svg'

import styles from './css/testimonialsx.module.scss'

const images = [User1, User2, User3, User1, User2, User3, User1, User2, User3]

const testimonialsOther = () => {
  // const NextArrow = ({ onClick }) => {
  //   return (
  //     <div className={styles.arrowNext} onClick={onClick}>
  //       <Image src={rArrow} alt="next" />
  //     </div>
  //   )
  // }
  // const PrevArrow = ({ onClick }) => {
  //   return (
  //     <div className={styles.arrowPrev} onClick={onClick}>
  //       <Image src={lArrow} alt="previous" />
  //     </div>
  //   )
  // }

  const [ImageIndex, setImageIndex] = useState(0)

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    lazyload: true, //
    speed: 600,
    slidesToShow: 3,
    //slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    //nextArrow: <NextArrow />,
    //prevArrow: <PrevArrow />,
    pauseOnHover: true,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          //centerMode: true,
          //centerPadding: 50,
        },
      },
    ],
  }

  let { customSlider } = useRef(' ')

  return (
    <div>
      <Slider
        {...settings}
        className={styles.sliderContainer}
        ref={(slider) => (customSlider = slider)}
      >
        {images.map((img, index) => (
          <div
            className={index === ImageIndex ? styles.activeSlide : styles.slide}
            key={index}
          >
            <div className={styles.overlay}></div>
            <div>
              <Image src={img} alt={img} />
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.arrows}>
        <div
          className={styles.arrowPrev}
          //onClick={onClick}
          onClick={() => customSlider.slickPrev()}
        >
          <div className={styles.previmg}>
            <Image src={lArrow} alt="previous" />
          </div>
        </div>
        <div
          className={styles.arrowNext}
          //onClick={onClick}
          onClick={() => customSlider.slickNext()}
        >
          <div className={styles.nextimg}>
            <Image src={rArrow} alt="next" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonialsOther
