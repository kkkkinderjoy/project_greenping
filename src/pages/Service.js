import React, { useMemo, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components'
import Notice from './../components/HYJ/Notice';
import FAQ from './../components/HYJ/FAQ';



const Container = styled.div`
  width: 100%;
  margin-top: 60px;
`

const Title = styled.div`

  font-weight: bold;
  font-size: 2em;
  text-align: center;
  /* @media screen and (max-width:768px){
      font-size: 1.5em;
  } */
`

const  ContainerWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`


const LinkList = styled.ul`
  display: flex;
  height: 55px;
  align-items: center;
  gap: 15px;
  margin: 30px 0 0;
  justify-content: center; 
  @media screen and (max-width:768px){
      margin-top: 20;
  }
`


const LinkListItem = styled.li`
  background: #f6f6f6;
  color: #666;
  line-height: 50px;
  height: 50px;
  padding: 5px;
  position: relative;
    span{
      cursor: pointer;
      display: block;
      padding: 20px 0px;
      font-size: 1.1em;
    }
  @media screen and (max-width:768px){
      font-size: 0.9em;
  }
  &.on{
  color: #fff;
  background: #555;
  }
  &.on::before{
   content:"" ;
   position: absolute;
   bottom: -5px;
   left: 50%;
   width: 12px;
   height: 5px;
   margin-left: -6px;
   background: url(/images/service_arrow.png) no-repeat;
  }
`


function Service() {
  const navigate = useNavigate();
  const[isActive,setIsActive]= useState(true);

  const data = [
    {
      "title":"공지사항",
      "link":"/service/notice"
    },
    {
      "title":"자주 묻는 질문",
      "link":"/service/faq"
    }
  ]

  

  return (
    <>
      <Container>
      <Title>고객센터</Title>
      <LinkList>
      
                <LinkListItem className={isActive === true ? "on" : ""} onClick={()=>{setIsActive(true); navigate("/service/notice")}}>
                  <span>공지사항</span>
                </LinkListItem>
                <LinkListItem className={isActive === true ? "" : "on"} onClick={()=>{setIsActive(false); navigate("/service/faq")}}>
                  <span>자주 묻는 질문</span>
                </LinkListItem>
      </LinkList>
        <ContainerWrap>
              {
                isActive ? <Notice /> : <FAQ />  
                //isActive가 참일때는 Notice 컴포넌트, 거짓일때는 FAQ 컴포넌트
              }

        </ContainerWrap>
      </Container>
      
    </>
  )
}

export default Service