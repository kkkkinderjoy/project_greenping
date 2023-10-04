import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { styled } from "styled-components";
import './../../index.css'

const StyledEventBanner = styled.div`
  max-width: 1200px;
  height: 110px;
  margin: 120px auto;
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
    flex-basis: 50%;
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const StyleSlide = styled(SwiperSlide)`
    display: flex;
    flex-wrap: wrap;
    img{width: 100%; height: auto;}
`

function Eventbanner() {
  return (
    <>
      <StyledEventBanner>
        <Swiper
          spaceBetween={10}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={false}
          modules={[Autoplay, Pagination]}
          slidesPerView={2}
          loop={true}
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
        </Swiper>
      </StyledEventBanner>
    </>
  );
}

export default Eventbanner;