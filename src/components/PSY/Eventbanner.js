import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { styled } from "styled-components";
import './../../index.css'

const StyledEventBanner = styled.div`
  max-width: 90%;
  margin: 120px auto;
  height: 110px;
  position: relative;

  .swiper-container {
    margin: 40px auto;
  }
  .swiper-slide {
    display: flex;
    flex-wrap: wrap;
  }
  .image-container {
    column-gap: 10px;
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const StyleSwiper = styled(Swiper)`
  position: relative;
  padding-bottom: 20px;
`

const StyleSlide = styled(SwiperSlide)`
    display: flex;
    flex-wrap: wrap;
    img{width: 100%; height: 100px;}
   
`


function Eventbanner() {
  return (
    <>
      <StyledEventBanner>
        <StyleSwiper
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={false}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          breakpoints= {{
            768: {
              slidesPerView : 2,
              slidesPerGroup : 2
            }  ,
            1024:{
              slidesPerView: 2,
              slidesPerGroup : 2
              }

          }
          }
          
        >
          {
            Array(6).fill().map((_,i)=>{
              return(
                <StyleSlide key={i}>
                  <img src={`./images/event${i+1}.jpg`} alt="slide" />
                </StyleSlide>
              )
            })
          }
        </StyleSwiper>
      </StyledEventBanner>
    </>
  );
}

export default Eventbanner;