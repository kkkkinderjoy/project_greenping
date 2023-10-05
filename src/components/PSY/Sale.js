import React, { useState } from 'react'
import data from './../../data/MarketData'
import { styled } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Write from '../../pages/Write';

const Content = styled.div`
  background-color: #f9fcfc;
  padding-top: 60px;
  padding-bottom: 140px;
`
const TitleWrap = styled.div`
    max-width: 800px;
    margin: 50px auto;
    ul{
        display: flex;
        justify-content: space-between;
    li{
        font-size: 30px;
        background-color: #fff;
        width: 150px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
        line-height: 50px;
    &.on{
        background-color: #24d181;
        color: #fff;
    }
  }
}
`

const ContentItem = styled.div`
  width: 600px;
  height: 500px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  text-align: center;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  h3{padding-top: 50px; font-size: 28px;}
  svg{
      color: #70e6b7;
      font-size: 150px;
      filter: drop-shadow(3px 3px rgba(127, 138, 140, 0.15));
      position: absolute;
      top: 35%;
      left: 34%;
    }
    @media screen and (max-width: 768px) {
    width: 100%;
    height: 400px;
    max-width: 400px;
    h3 {
      font-size: 24px;
    }
    svg {
      font-size: 100px;
      top: 35%;
      left: 35%;
    }
  }
`  
const Button = styled.button`
    position: absolute;
    width: 80%;
    height: 50px;
    font-size: 18px;
    line-height: 30px;
    background-color: #2ed090;
    border-radius: 10px;
    border: none;
    color: #fff;
    right: 50%;
    bottom: 10%;
    transform: translate(50%);
    cursor: pointer;
`

function Sale({userState}){
    const [isActive,setIsActive]=useState(false);

  const [ID, setID] = useState("판매");
  const [sale, setSale] = useState(0);

  const Filter = [...new Set(data.map(e => e.ID))]

  const menu = ["/sale" , "/buy", "/assi"]

    const uid = sessionStorage.getItem("users");
    const [userUid, setUserUid] = useState(uid);
    console.log(userUid)
    //로그인 했을때 문의하기버튼 보이게 

  return (
    <>
    <Content>
      <TitleWrap>
      <ul>
            {
              Filter.map((e,i)=>{
                return (
                  <NavLink to={menu[i]}><li className={sale === i ? 'on' : ''} key={i}>{e}
                  </li></NavLink>
                )
              })
            }
          </ul>
      </TitleWrap>
    {
      uid ?
      <li>
        <Write />
      </li>
      :
      <>
      <ContentItem>
        <h3>판매를 원한다면 로그인해주세요!</h3>
        <FontAwesomeIcon icon={faCartShopping} />
        <NavLink to='/login'><Button>로그인하기</Button></NavLink>
      </ContentItem>
      </>
    }
    </Content>
    </>
  )
}

export default Sale