import React, { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import Eventbanner from './Eventbanner'


const Content = styled.div`
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
  z-index: 30;
  height: 50px;
  @media screen and (min-width: 768px){height: 130px;}
`

const HeaderWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  display: flex;
`


const LogoWrap = styled.div`
  display: flex;
  margin:10px auto;
  /* a{
    font-family: 'Bagel Fat One', cursive;
    display: inline-block;
    font-size: 3em;
    font-weight: 800;
    color: #23D384;
  } */

`
const Logo = styled.img`
  width: 100%;
  height: 100px;
  display: block;
  @media screen and (max-width:768px){
    display: none;
  }
`

const ListWrap = styled.div`
   display: flex;
   flex-basis: 85%;
   font-size: 1.1em;
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
  
  .active{
    color: #23D384;
  }
  &:last-child{
    display: none;
    @media screen and (max-width:768px){
      display: block;
    }
  }
 
`

const Input = styled.input`
  border: none;
  width: 30%;
  padding: 2%;
  font-size: 1em;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  text-align: center;
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`

const NavMember = styled.div`
  font-size: 0.8em;
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
  >li{
    cursor: pointer;
    &:nth-child(2){
      position: relative;
    }
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
`

const Mnav = styled.div` //모바일 네비
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
  left: ${({ $isopen }) => $isopen ? "0" : "100%;"};
  height: ${({ $isopen, $height }) => ($isopen === "true" ? $height : "100%")};
  top: 0;
  padding: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  z-index: 999;
  transition: all 0.5s;
  @media screen and (min-width: 768px){display: none;}b
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
      background-color: #eee;
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
    margin-bottom: 30px;
    display: flex;
    cursor: pointer;
    
   li{
    display: flex;
    justify-content: space-between;
    width: 80%;
    border-bottom: 1px solid #eee;
    padding-bottom: 24px;
    &:hover{
        color: #A6F4D0;
      }
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


const MPWrap = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
  border-radius: 10px;
`


const MyPage = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`


const MPList = styled.li`
   padding: 8px 13px;
  &:hover {
    background-color: #f0f0f0;
  }
`

const MyPageIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  transition: transform 0.5s; 
  transform: rotate(${(props) => (props.isActive ? '180deg' : '0')});
   
`;



function Header({userState}){
  const ListItems = ['캠핑장 찾기','랭킹','리뷰', '그린톡','그린마켓','고객센터'] 
  const LinkArray = ['navsearch','ranking','reviewmore','board','buy','service']


  const [isActive,setIsActive]=useState(false);
  // const userState = useSelector(state => state.user);
  const [userInput, setUserInput] = useState("");
  const InputValue = (e) => {
    const ValueI = e.target.value;
    setUserInput(ValueI);
  };

  const Dropdown = () => {
    setIsActive(!isActive);
  };


  return (
    <>
     <Content $isopen={isActive}>
        <HeaderWrap>
          <LogoWrap>
            <NavLink to="/"><Logo src={`images/greenping-logo.png`} alt='로고' /></NavLink>
          </LogoWrap>
          <ListWrap>
            <List>
              <ListItem><NavLink to="/navsearch">캠핑장 찾기</NavLink></ListItem>
              <ListItem><NavLink to="/ranking">랭킹</NavLink></ListItem>
              <ListItem><NavLink to="/reviewmore">리뷰</NavLink></ListItem>
              <ListItem><NavLink to="/board">그린톡</NavLink></ListItem>
              <ListItem><NavLink to="/buy">그린마켓</NavLink></ListItem>
              <ListItem><NavLink to="/service">고객센터</NavLink></ListItem>
              <ListItem>
                  <Input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  onChange={InputValue}
                />
              </ListItem>
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
                  <li onClick={Dropdown}>
                    마이페이지  <MyPageIcon icon={faChevronRight} isActive={isActive}/>
                    <MPWrap isActive={isActive}>
                      <MyPage>
                          <NavLink to="/modify"><MPList>정보수정</MPList></NavLink>
                          <NavLink to="/myboard"><MPList>나의 활동</MPList></NavLink>
                      </MyPage>
                    </MPWrap>        
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
              }}>{userState.data?.name}님 안녕하세요.</span></NavLink>
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
              <ul key={i}>
              <li  onClick={()=>{
                setIsActive(!isActive)
              }}><NavLink to={`/${LinkArray[i]}`}>{e}</NavLink><FontAwesomeIcon icon={faChevronRight}/></li>
              </ul>
              </>
            )
          })
         }
        </MnavList>
        <MnavBanner><Eventbanner/></MnavBanner>
        </Mnav>        
        </HeaderWrap>
         
     </Content>
         {/* 모바일네비 */}
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