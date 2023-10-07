import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  position: fixed;
  bottom: 3%;
  right: 3%;
  align-items: center;
  z-index: 500;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")}; 
  transition: opacity 1.5s ease;
  @media screen and (max-width: 640px){
    bottom: 3%;
  }
`;


const ContentWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Content = styled.li`
  width: 25px;
  height: 25px;
  padding: 15px;
  border-radius: 22px;
  background-color: #ffffff;
  opacity: 0.98;
  box-shadow: 1px 1px 4px gainsboro;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 1.2em;
  img {
    width: 23px;
    height:23px;
  }
  
  
  a{
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 640px){
    &:nth-child(2){
      display: none;
    }
    &:nth-last-child(1){
        cursor: pointer;
        padding: 10px;
        opacity: 0.8;
        background: #efefef;
        border-radius: 50%;
        color: #999999;
        border: 2px solid #e6e6e6;
        box-shadow: none;
       
    }
    
  }
  
`;

const Kakao = styled.li`
  @media screen and (max-width: 640px){
    display: none;
  }
`

function Aside() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 350) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
    return () => {
      window.removeEventListener("scroll", isActiveClick); 
    };
  }, []);

  useEffect(()=>{
    const script = document.createElement('script');
    script.async = true;
    try{
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KakaoKey);
        }
      }

    window.Kakao.Channel.createChatButton({
      container: '#kakao-talk-channel-chat-button',
      channelPublicId: '_dxlaCG',
      title: 'consult',
      size: 'small',
      color: 'yellow',
      shape: 'pc',
      supportMultipleDensities: true,
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  } catch (err){
    
  }
  })

  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
        <Wrap isActive={isActive}>
      {isActive && 
        <ContentWrap>
         
           <Kakao isKakao> <Link id="kakao-talk-channel-chat-button"></Link></Kakao>
         
          {/* <Content isKakao>
          </Content> */}
          <Content>
            <Link to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==">
              <img src={`images/instagram.png`} alt="instagram" />
            </Link>
          </Content>
          <Content onClick={moveToTop}>
            <FontAwesomeIcon className="mt-5" icon={faChevronUp} />
          </Content>
        </ContentWrap>
        }
        </Wrap>
    </>
  );
}

export default Aside;
