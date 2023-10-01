import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { styled } from 'styled-components';
//import { useState } from 'react';


const StyledEventBanner = styled.div`
  .swiper-container {
    max-width: 1000px;
    margin: 0 auto;
    height: 300px;
  }
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
  }
  .image-container {
   
    flex-basis: 45%;
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const SwiperPaginationBullet = styled.div`
  background: #868686;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  &.on{
    background: #A3EBCE;
    width: 28px;
    transition: width 0.5s; 
    border-radius: 4px;
  }
`;

function Eventbanner() {
  return (
        <>
        <StyledEventBanner>
          <Swiper 
          spaceBetween={50}
          //centeredSlide={true} 
          autoplay={{ 
          delay: 4000, 
          disableOnInteraction: false,
         }}
          pagination={{ clickable: true }}
          grabCursor={false} 
          loopedSlides={true} 
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
        >
          <SwiperSlide>
            <div className="image-container">
              <img src='/images/greenping-event.jpg' alt="그린핑 이벤트" />
              <img src='/images/card-event.jpg' alt="카드 이벤트" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src='/images/greentalk.jpg' alt="그린톡 이벤트" />
              <img src='/images/birthday.jpg' alt="생일축하 이벤트" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src='/images/best-rivewer.png' alt="베스트 리뷰어 이벤트" />
              <img src='/images/green-market.jpg' alt="그린마켓 이벤트" />
            </div>
          </SwiperSlide>
          <SwiperPaginationBullet>
            <span></span>
          </SwiperPaginationBullet>
        </Swiper>
        </StyledEventBanner>
        </>
  )
}

export default Eventbanner