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
  @media screen and (max-width:768px){
      font-size: 1.5em;
  }
`

const  ContainerWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
`


const LinkList = styled.ul`  
  display: flex;
  gap: 10px;
  margin-top: 30px;
  justify-content: center; 
  @media screen and (max-width:768px){
      margin-top: 20;
  }
`


const LinkListItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: center;
  color: #666;
    span{
      cursor: pointer;
      display: block;
      padding: 20px 0px;
      font-size: 1.1em;
    }
  &:hover{font-weight: bold;}
  @media screen and (max-width:768px){
      font-size: 0.9em;
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

  const currentUrl = window.location.href; 

  useMemo(()=>{
    if(currentUrl === "http://localhost:3000/service/notice"){
      setIsActive(true)
      return;
    }
    if(currentUrl === "http://localhost:3000/service/faq"){
      setIsActive(false)
      return;
    }
    if(currentUrl === "http://localhost:3000/service"){
      setIsActive(true)
    }
  },[currentUrl])

  return (
    <>
      <Container>
      <Title>고객센터</Title>
      <LinkList>
      
                <LinkListItem onClick={()=>{setIsActive(true); navigate("/service/notice")}}>
                  <span>공지사항</span>
                </LinkListItem>
                <LinkListItem onClick={()=>{setIsActive(false); navigate("/service/faq")}}>
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