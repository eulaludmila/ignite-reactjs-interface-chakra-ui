'use client'

import 'swiper/swiper.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
    >
      <SwiperSlide>Slide 1</SwiperSlide>

    </Swiper>
  )
}

export default Slider