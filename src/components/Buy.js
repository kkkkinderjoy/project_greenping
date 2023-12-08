import React, { useState } from 'react'
import data from './../data/MarketData'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Content = styled.div`
  width: 100%;
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
    @media screen and (max-width: 640px){
      scale: 0.7;
    }
  }
}
`
const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  gap: 15px;
  margin-bottom: 50px;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`
const Tomain = styled.div`
  width: 96%;
  display: flex;
  justify-content: space-between;
  p{
    font-size: 18px;
    color: #999;
    &:nth-child(1){color: #333;}
  }
  span{font-size: 22px; color: orangered;}
`
const ContentItem = styled.div`
  width: 500px;
  height: 500px;
  flex-basis: 31.5%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  img{
    width: 300px; 
    height:300px; 
    display: block; margin: 0 auto; margin-bottom: 24px;
    border: 1px solid #f2f2f2;
    }
  h3{
    margin-top: 20px;
    font-size: 22px;
    text-align: center;
    padding: 30px 5px;
    position: relative;
  }
  p{
    position: absolute;
    text-align: center;
    top: 70px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ddd;
    line-height: 50px;
    font-size: 1rem;
    color: #fff;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
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
    flex-basis: 95%;
  }
`  
const ItemTitle = styled.div`
  color: #999;
  position: absolute;
  top: 16px;
  left: 50%; 
  transform: translateX(-50%)
`

const Button = styled.button`
    position: absolute;
    width: 100px;
    height: 30px;
    background-color: #70e6b7;
    border: none;
    border-radius: 10px;
    color: #fff;
    right: 10px;
    bottom: 10px;
    cursor: pointer;
`

function Buy() {

    const [ID, setID] = useState("구매");

    const dataFilter =  data.filter(e =>{
      return (e.ID === "구매" || e.ID === ID)
    })

    const FilterItem = [...new Set(data.map(e => e.ID))]

    const [buy, setBuy] = useState(1);

    const menu = ["/sale" , "/buy", "/assi"]

    const uid = sessionStorage.getItem("users");
    const [userUid, setUserUid] = useState(uid);
    console.log(userUid)

  return (
    <>
    <Content>
        <TitleWrap>
          <ul>
            {
              FilterItem.map((e,i)=>{
                return (
                  <NavLink to={menu[i]}><li className={buy === i ? 'on' : ''} key={i}>{e}</li></NavLink>
                )
              })
            }
          </ul>
        </TitleWrap>
        <ContentWrap>
          <Tomain>
            <p>총 <span>{dataFilter.length}</span>개</p>
            <NavLink to='/'><p>메인으로 돌아가기</p></NavLink>
          </Tomain>
            {
             dataFilter.slice().reverse().map((e,i)=>{
                return(
                <ContentItem key={i}>
                <ItemTitle>
                  <FontAwesomeIcon icon={faUser} /> {e.NAME}
                </ItemTitle>
                    <h3>{e.TITLE}</h3>
                    <img src={e.IMG} alt="구매용품 이미지들" />
                    <ul>
                      <li>{e.PRICE}</li>
                      <li>업로드일 : {e.DATE}</li>
                    </ul>
                    {
                      uid &&
                    <NavLink to={`/inquiry/${e.NUM}`} state={e}><Button>문의하기</Button></NavLink>
                    }
                </ContentItem>
                )
              })         
            }
        </ContentWrap>
    </Content>
    </>
  )
}

export default Buy