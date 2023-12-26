import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";


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
  &:nth-child(1){
    background-color: #FAE24C;
  }
  img{
    width: 25px;
    height: 25px;
  }
  a{
    width: 25px;
    height: 25px;

    
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



  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  const addKakaoChannel = () => {
    if (window.Kakao) {
      //카카오 스크립트가 로드된 경우
      const kakao = window.Kakao;

      //인증이 안되어있는 경우 인증한다.
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KakaoKey);
      }

      kakao.Channel.chat({
        channelPublicId: '_dxlaCG', //카카오 채널 ID
      });
    }
  };


  return (
    <>
        <Wrap isActive={isActive}>
      {isActive && 
        <ContentWrap>
          <Content>
            <div id="chat-channel-button" onClick={addKakaoChannel}>
                <img src="/images/kakaochannel.png" alt="카카오톡 채널 채팅"/>
            </div>
          </Content>
          <Content onClick={moveToTop}>
            <FontAwesomeIcon icon={faChevronUp} />
          </Content>
        </ContentWrap>
        }
        </Wrap>
    </>
  );
}

export default Aside;
