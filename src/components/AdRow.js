import React from 'react'
import './AdRow.css'
import { Swiper, SwiperSlide } from 'swiper/react'; 
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';

SwiperCore.use([Autoplay]);

export const AdRow = () => {
  return (
    <div className='adSection'>
        <div className='adLeft'>
            <h1>Place Ad Here</h1>
        </div>
        <div className='adRight'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            DisableOnInteraction: false
        }}>
          <SwiperSlide>
              <div className='slide'>
                <h1>Ad 1</h1>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='slide'>
              <h1>Ad 2</h1>
              </div>
          </SwiperSlide>
        </Swiper>
        </div>
       </div> 
  )
}
