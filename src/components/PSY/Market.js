import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandshakeAngle, faMoneyCheckDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import list from './../../data/MarketData'

const Container = styled.div`
  width: 100%;
  padding: 48px 0;
`
const Title = styled.h3`
text-align: center;
font-size: 2.0em;
margin-bottom: 90px;
`

const ContainerWrap = styled.div`
  max-width: 1200px;
  height: 500px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 2%;
`

const ContentItem = styled.div`
  text-align: center;
  flex-basis: 50%;
  background-color: #fff;
  position: relative;
  display: none;
  @media screen and (min-width: 1024px){
    display: block;
  }
  img{
    width: 300px; 
    height: 300px; 
    display: block; 
    margin: 0 auto; 
    margin-bottom: 24px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    }
  h3{
    width: 400px;
    display: inline-block;
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 24px;
    padding-top: 24px; 
    font-size: 20px;}
  ul{
    li{
      font-size: 1rem;
      color: rgb(153, 153, 153);
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
` 
const ContentDesc = styled.div`
  flex-basis: 100%;
  @media screen and (min-width: 1024px){
      flex-basis: 50%;
  }
  display: flex;
  flex-wrap: wrap;
`
const Card = styled.div`
  flex-basis: 50%;
  padding: 2.5rem;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: 0.7s;
  background-color: #fff;
  &.on svg{
    scale: 1.2;
  }
  &:hover svg{
  scale: 1.3;
  }
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
  &:nth-child(1){
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  &:nth-child(2){
    border-bottom: 1px solid #ddd;
  }
  &:nth-child(3){
    border-right: 1px solid #ddd;
  }
  h3{
    font-size: 1.5rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {font-size: 1.5rem;}
  }
  p{margin: 1rem 0;}
  svg{
    position: absolute;
    left: 1.2rem;
    bottom: 1rem;
    font-size: 2.5rem;
    color: rgba(0,0,0,0.3);
    transition: 0.7s;
    @media screen and (max-width: 640px) {font-size: 2rem;}
  }
`
const Card2 = styled.div`
  flex-basis: 50%;
  padding: 2.5rem;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: 0.7s;
  &:hover svg{
    transform: translateX(15px);
  }
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
  p{margin: 1rem 0;}
  svg{
    position: absolute;
    left: 1rem;
    top: 13rem;
    font-size: 2.5rem;
    transition: 0.7s;
    color: rgba(0,0,0,0.3);
    @media screen and (max-width: 640px) {font-size: 2rem;}
  }
  `
const data = [
  {
    ID : "판매",
    Desc : "판매글 쓰러 가볼까요?",
    Icon : faCartShopping
  },
  {
    ID : "구매",
    Desc : "필요한 캠핑용품 구매",
    Icon : faMoneyCheckDollar
  },
  {
    ID : "양도",
    Desc : "이웃들에게 양도받기",
    Icon : faHandshakeAngle
  }
]

function Market() {

  //const [randNumber, setRandNumber] = useState(null); //1개만 뜨게!! 구매 데이터가 랜덤으로 1개만 뜬다
  
  const [txt, setTxt] = useState(0);
  const [FilterData, setFilterData] = useState([]);
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const txtList = ["판매", "구매", "양도"];
    const randEvent = () => {
      const dataFilter = list.filter(e => e.ID === txtList[txt]);
      setFilterData(dataFilter); //3개를 한꺼번에 필터한다.
      
      const randomIndex = Math.floor(Math.random() * dataFilter.length); //랜덤함수
      setRandomData(dataFilter[randomIndex]);
      //console.log(randomData);
    }
    randEvent();
  }, [txt]);

  const [isActive, setIsActive] = useState(0);

  return (
    <>
    <Container>
      <Title>그린마켓</Title>
      <ContainerWrap>
        <ContentItem>
          {
            <ul>
              <h3>{randomData.ID}</h3>
              <img src={randomData.IMG} alt="구매이미지" />
              <p>{randomData.TITLE}</p>
              <p>{randomData.PRICE}</p>
            </ul>
          }
        </ContentItem>
        <ContentDesc>
          { 
            data.map((e,i)=>{
              return(
                <Card key={i}  onClick={()=>{
                  setIsActive(i)
                  i !== 3 &&  setTxt(i);
                  }}>
                  <h3>{e.ID}</h3>
                  <p>{e.Desc}</p>
                  <FontAwesomeIcon icon={e.Icon}  className={isActive === i ? 'on' : ''}/>
                </Card>
              )
            })
          }
          <NavLink to='/buy'>
            <Card2>
              <p>더 많은 용품을 보기 원한다면</p>
              <p>마켓 페이지로 이동</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Card2>
          </NavLink>
        </ContentDesc>
      </ContainerWrap>
    </Container>
    </>
  )
}

export default Market;