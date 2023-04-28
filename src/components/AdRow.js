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
            <h1>Super Cool Ad for Programming</h1>
            <p>Here would be a super cool ad for programming but instead you get this placeholder that just shows where a super cool ad could be.</p>
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
                <h1>Ad That Moves</h1>
                <p>This ad swipes to show another ad.</p>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='slide'>
              <h1>Moving Ad 2</h1>
              <p>This is the second place an ad could be on the website.</p>
              </div>
          </SwiperSlide>
        </Swiper>
        </div>
       </div> 
  )
}
