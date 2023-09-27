import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

// import mobilelogo from import pclogo from '../../../public/images/mobile_logo.png'
import "react-datepicker/dist/react-datepicker.css"

import styled from 'styled-components'


const Content = styled.div`
  padding: 10px;
  width: 100%;
  background-color: #fff;
  z-index: 30;
  height: 50px;
  @media screen and (min-width: 768px){height: 130px;}
`

const HeaderWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  display: flex;
`

const LogoWrap = styled.div`
  display: flex;
  margin: 10px;
`

const Logo = styled.img`
  width: 0;
  @media (min-width: 768px){
    width: 150px;
    height: 120px;
  }
`

const ListWrap = styled.div`
   display: flex;
   justify-content: space-between;
   flex-basis: 85%;
   @media screen and (max-width:768px) {display: none;}
`

const List = styled.ul`
  flex-basis: 100%;
  display: flex;
  font-weight: bold;
`

const ListItem = styled.li`
  flex-basis: 25%;
  text-align: center;
`

const NavMember = styled.div`
  font-size: 13.5px;
  position: absolute;
  top: 10px;
  right: 50px;
  z-index: 50;
 ul{
  display: flex;
  column-gap: 20px;
  a.active{
    font-weight: bold;
    color: lightgreen;
  }
 }
  @media screen and (max-width: 768px){display: none;}
`

const Hamburger= styled.div`
  position: relative;
  top: 25px;
  left: 88%;
  cursor: pointer;
  z-index: 100;
  transform: all 1s; 
  > div{
    width: 30px; height: 2px; background-color: #000; border-radius: 4px; margin: 6px;
    transform: all 1s; 
  }
  &.on div:nth-child(1){transform:rotate(45deg) translateY(12px)}
  &.on div:nth-child(2){opacity: 0;}
  &.on div:nth-child(3){transform:rotate(-45deg) translateY(-12px)}
  @media screen and (min-width: 768px){display: none;}
  @media screen and (max-width: 640px){left: 85%;}
  
  
`
const Container = styled.div` //모바일 네비
  width: 320px;
  height: 100%;
  position: relative;
  background-color: rgb(249,250,251);
  right: 0;
  top: 0;
  padding: 40px;
  box-sizing: border-box;
  z-index: 40;
  transition: all 0.5s;
  @media screen and (min-width: 768px){display: none;}
  >ul{
    margin-top: 24px;
  >li{
      padding: 20px; font-weight: bold; cursor: pointer;
  }
  }
`

function Header({userState}){
  const [isActive,setIsActive]=useState(false);
  
  return (
    <>
     <Content >
        <HeaderWrap>
          <LogoWrap>
            <NavLink to="/"><Logo src={`images/pc_logo.png`} alt='로고' /></NavLink>
          </LogoWrap>
          <ListWrap>
            <List>
            <ListItem><NavLink to="/">캠핑장 찾기</NavLink></ListItem>
            <ListItem><NavLink to="/">랭킹</NavLink></ListItem>
            <ListItem><NavLink to="/">리뷰</NavLink></ListItem>
            <ListItem><NavLink to="/">그린톡</NavLink></ListItem>
            <ListItem><NavLink to="/">그린마켓</NavLink></ListItem>
            <ListItem><NavLink to="/">고객센터</NavLink></ListItem>
          </List>
          </ListWrap>
          <NavMember>
            <ul>
              <li>
                <NavLink to={userState ? "/logout" : "/login"}>{userState ? "로그아웃" : "로그인"} </NavLink>
              </li>
              <li>
                {
                  userState ?
                  <li>
                    <NavLink to="/modify">정보수정</NavLink>
                  </li>
                  :
                  <li>
                    <NavLink to="/member">회원가입</NavLink>
                  </li>
                }
              </li>
            </ul>
          </NavMember>
          <Hamburger className={isActive && "on"} onClick={()=>{setIsActive(!isActive)}}>
                {
                  Array(3).fill().map((_,i)=>{
                    return(
                      <div key={i}></div>
                    )
                  })
                }
        </Hamburger>
        </HeaderWrap>
     </Content>
        {/* 모바일네비 */}
        
     
      
    </>
  )
}

export default Header