import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
// import mobilelogo from import pclogo from '../../../public/images/mobile_logo.png'
import "react-datepicker/dist/react-datepicker.css"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Eventbanner from '../PSY/Eventbanner'
import { useSelector } from 'react-redux'
import { logIn, loggedIn } from '../../store'


const ListItems = ['캠핑장 예약', '후기', '랭킹','그린톡','그린마켓','고객센터'] 
const LinkArray = ['main','review','ranking','greentalk','greenmarket','notice']


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
   font-size: 1.5em;
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
  right: 0;
  top: 20px;
  cursor: pointer;
  z-index: 1000;
  transform: all 1s; 
  > div{
    width: 30px; height: 2px; background-color: #000; border-radius: 4px; margin: 6px;
    transform: all 1s; 
  }
  &.on div:nth-child(1){transform:rotate(45deg) translateY(12px)}
  &.on div:nth-child(2){opacity: 0;}
  &.on div:nth-child(3){transform:rotate(-45deg) translateY(-12px)}
  @media screen and (min-width: 768px){display: none;}
  @media screen and (max-width: 640px){}
`

const Mnav = styled.div` //모바일 네비
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #eee;
  left: ${({ $isopen }) => $isopen ? "0" : "100%;"};
  height: ${({ $isopen, $height }) => ($isopen === "true" ? $height : "100%")};
  top: 0;
  padding: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 999;
  transition: all 0.5s;
  @media screen and (min-width: 768px){display: none;}
  >ul{
    margin-top: 24px;
  >li{
      padding: 20px; 
      font-weight: bold;
       cursor: pointer;
  }
  }
`
const MnavTitle = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        margin-bottom: 20px;
      }
  `
const MnavLogo = styled.div`
      margin: 0 auto;
      display: flex;
      align-items: center;
      background-color: mintcream;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      justify-content: center;
      margin-bottom: 20px;
      svg{
        line-height: 100;
        width: 60px;
        height: 100px;
      }
`

const MnavList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  ul{
    justify-content: center;
    margin-bottom: 40px;
    display: flex;
    cursor: pointer;
    li:nth-child(1) {
      flex-basis: 90%;
    }
  }
`
const MnavBanner = styled.div`
  width: 100%;
`

const MyList = styled.div`
width: 90%;
margin-top: 20px;
ul{
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: #FEFFDD;
  
  padding: 15px 0px;
  border-radius: 10px;
}
`



function Header({userState}){
  
  const [isActive,setIsActive]=useState(false);
  // const userState = useSelector(state => state.user);
  return (
    <>
     <Content $isopen={isActive}>
        <HeaderWrap>
          <LogoWrap>
            <NavLink to="/"><Logo src={`images/pc_logo.png`} alt='로고' /></NavLink>
          </LogoWrap>
          <ListWrap>
            <List>
            <ListItem><NavLink to="/searchd">캠핑장 찾기</NavLink></ListItem>
            <ListItem><NavLink to="/ranking">랭킹</NavLink></ListItem>
            <ListItem><NavLink to="/reviewmore">리뷰</NavLink></ListItem>
            <ListItem><NavLink to="/board">그린톡</NavLink></ListItem>
            <ListItem><NavLink to="/market">그린마켓</NavLink></ListItem>
            <ListItem><NavLink to="/notice">고객센터</NavLink></ListItem>
          </List>
          </ListWrap>
          <NavMember>
            <ul>
              <li>
                <NavLink to={userState.uid ? "/logout" : "/login" }>{userState.uid ? "로그아웃" : "로그인"} </NavLink>
              </li>
              <li>
                {
                  userState.uid ?
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
           <Mnav $isopen={isActive} $height={isActive}>
          <MnavTitle>
          <MnavLogo>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>                       
          </MnavLogo>
          
            {
              userState.uid
              ?
              <>
             
              <NavLink to ='/modify'><span onClick={()=>{
                            setIsActive(!isActive)
              }}>{userState.uid.name}님 안녕하세요.</span></NavLink>
              <MyList>
                <ul>
                  <li>회원정보수정</li>
                  <li>예약 내역</li>
                  <li>나의 활동</li>
                </ul>
              </MyList>
               </> 
              :
              <NavLink to ='/login'><span onClick={()=>{
                setIsActive(!isActive)
               }}>로그인이 필요합니다.</span></NavLink>
               
          }
        </MnavTitle>
        <MnavList>
         {
           ListItems.map((e,i)=>{
             return(
               <>
              <ul>
              <li  onClick={()=>{
                setIsActive(!isActive)
              }}><NavLink to={`/${LinkArray[i]}`}>{e}</NavLink></li>
              <li><FontAwesomeIcon icon={faChevronRight}/></li>
              </ul>
              </>
            )
          })
         }
        </MnavList>
        <MnavBanner>{Eventbanner()}</MnavBanner>
        </Mnav>        
        </HeaderWrap>
         {/* 모바일네비 */}
         
     </Content>
     <Hamburger style={{position: `${isActive ? "fixed" : "absolute"}`}} className={isActive && "on"} onClick={()=>{setIsActive(!isActive)}}>
                {
                  Array(3).fill().map((_,i)=>{
                    return(
                      <div key={i}></div>
                    )
                  })
                }
      </Hamburger>
    </>
  )
}
export default Header