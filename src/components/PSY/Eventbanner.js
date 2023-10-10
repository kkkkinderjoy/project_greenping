import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { styled } from "styled-components";
import './../../index.css'

const StyledEventBanner = styled.div`
  max-width: 100%;
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
    img{width: 100%; height: 100%;}
    @media screen and (max-width: 768px) {
      flex-basis: 100%;
    }

`

//     img{width: 100%; height: 130px;}
   





function Eventbanner() {
  return (
    <>

<Swiper>
    {
            Array(6).fill().map((_,i)=>{
              return(
                <SwiperSlide key={i}>
                  <img src={`./images/event${i+1}.jpg`} alt="slide" />
                </SwiperSlide>
              )
            })
          }
    </Swiper>
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