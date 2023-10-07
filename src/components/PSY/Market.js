import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandshakeAngle, faMoneyCheckDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import list from './../../data/MarketData'

const Container = styled.div`
  width: 100%;
  padding: 48px 0;
`
const ContainerWrap = styled.div`
  max-width: 1280px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 2%;
`
const ContentItem = styled.div`
  flex-basis: 50%;
  background-color: #f5f5f5;
  position: relative;
  display: none;
  @media screen and (min-width: 1024px){
      display: block;
  }
  img{
    width: 200px; 
    height:200px; 
    display: block; margin: 0 auto; margin-bottom: 24px;
    }
  h3{margin-bottom: 24px; text-align: center; padding-top: 24px; font-size: 22px;}
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
        margin-bottom: 7px;
        font-size: 13px;
        color: rgb(153, 153, 153);
        &:nth-child(1){
        font-size: 18px;
        font-weight: bold;
        color: #000;
        }
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
  position: relative;
  @media screen and (min-width: 1024px){
      flex-basis: 50%;
  }
  display: flex;
  flex-wrap: wrap;
`
const Navk = styled.div`
  position: absolute;
  
`

const Card = styled.div`
  flex-basis: 50%;
  padding: 2.5rem;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  transition: 0.7s;
  &:nth-last-child(1){
    background-color: #e0fff3;
  }
  &.on{
    background-color: #98eecc;
  }
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
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {font-size: 1.5rem;}
  }
  p{margin: 1rem 0;}
  svg{
    position: absolute;
    left: 1rem;
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
  &.on{
    background-color: #98eecc;
  }
  &.on svg{
    scale: 1.2;
  }
  &:hover svg{
  left: 3rem;
  }
  @media screen and (max-width: 640px) {
    padding: 1rem;
  }
  h3{
    font-size: 2rem;
    font-weight: bold;
    @media screen and (max-width: 640px) {font-size: 1.5rem;}
  }
  p{margin: 1rem 0;}
  svg{
    position: absolute;
    left: 1rem;
    top: 13rem;
    font-size: 2.5rem;
    color: rgba(0,0,0,0.3);
    transition: 0.7s;
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
  
  const [id, setId] = useState("판매");

  const FilterList = list.filter(e =>{
    return id === "판매" || id === e.ID
  })
  console.log(FilterList)

  const [isActive, setIsActive] = useState(0);


  return (
    <>
    <Container>
      <ContainerWrap>
        <ContentItem>
        {
          FilterList.slice().reverse().map((e,i)=>{
            return(
              isActive === i &&
              <ul key={i}>
                <h3>{e.ID}</h3>
                <li>{e.TITLE}</li>
                <img src={e.IMG} alt="마켓 이미지들" /> 
              </ul>
            )
          })
        }
        </ContentItem>
        <ContentDesc>
          { 
            data.map((e,i)=>{
              return(
                <Card key={i} className={isActive === i ? 'on' : ''} onClick={()=>{
                  setIsActive(i);
                  }}>
                  <h3>{e.ID}</h3>
                  <p>{e.Desc}</p>
                  <FontAwesomeIcon icon={e.Icon} />
                </Card>
              )
            })
          }
          <NavLink to='/buy'>
            <Card2>
              <h3></h3>
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