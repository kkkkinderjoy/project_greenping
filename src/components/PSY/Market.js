import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandshakeAngle, faMoneyCheckDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 48px 0;
`
const ContainerWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 0 2%;
`
const Content = styled.div`
  flex-basis: 50%;
  display: none;
  @media screen and (min-width: 1024px){
      display: block;
  }
  img{width: 100%;}
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
  padding: 3rem;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 640px) {
      padding: 1rem;
  }
  &:nth-child(3n-2){
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
    right: 1rem;
    bottom: 1rem;
    font-size: 2.5rem;
    color: rgba(0,0,0,0.3);
    transition: 0.7s;
    cursor: pointer;
    @media screen and (max-width: 640px) {font-size: 2rem;}
  }
`
  const data = [
    {
      ID : "판매",
      Desc : "내 캠핑용품 판매하기!",
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
    },
    {
      ID : "",
      Desc : "더 많은 용품을 보기 원한다면",
      Desc2 : "마켓 페이지로 이동",
      Icon : faArrowRight
    }
  ]

function Market() {
  return (
    <>
    <Container>
        <ContainerWrap>
            <Content>
                <img src="https://via.placeholder.com/650x620" alt='전경' />
            </Content>
            <ContentDesc>
                {
                    data.map((e,i)=>{
                        return(
                            <Card key={i}>
                                <h3>{e.ID}</h3>
                                <p>{e.Desc}</p>
                                <p>{e.Desc2}</p>
                                <FontAwesomeIcon icon={e.Icon} />
                            </Card>
                        )
                    })
                }
            </ContentDesc>
        </ContainerWrap>
    </Container>
    </>
  )
}

export default Market