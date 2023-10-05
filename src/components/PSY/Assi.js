import React, { useState } from 'react'
import data from './../../data/MarketData'
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

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
        line-height: 50px;
        border: 1px solid #ddd;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
    &.on{
        background-color: #24d181;
        color: #fff;
    }
  }
}
`

const ContentWrap = styled.div`
    width: 100%;
    gap: 15px;
    margin-bottom: 50px;
    padding: 0 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`
const Tomain = styled.div`
  width: 100%;
  position: relative;
  p{
    position: absolute;
    font-size: 18px;
    top: -10px;
    right: 4%;
    color: #999;
  }
`

const ContentItem = styled.div`
  width: 500px;
  height: 500px;
  flex-basis: 31.5%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  white-space: break-spaces;
  position: relative;
  img{
    width: 300px; 
    height:300px; 
    display: block; margin: 0 auto; margin-bottom: 24px;
    }
  h3{margin-bottom: 24px; text-align: center; padding-top: 24px; font-size: 22px;}
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li{
        margin-bottom: 7px;
        &:nth-child(1){
        font-size: 18px;
        font-weight: bold;
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

function Assi() {

    const [ID, setID] = useState("양도");

    const FilterAssi = data.filter(e =>{
      return(e.ID === "양도" || e.ID === ID)
    })
    console.log(FilterAssi)
    
    const AssiFilter = [...new Set(data.map(e => e.ID))]

    const [assi, setAssi] = useState(2);

    const menu = ["/sale", "/buy", "/assi"]

    const uid = sessionStorage.getItem("users");
    const [userUid, setUserUid] = useState(uid);
    console.log(userUid)

  return (
    <>
    <Content>
        <TitleWrap>
          <ul>
            {
              AssiFilter.map((e,i)=>{
                return (
                  <NavLink to={menu[i]}><li className={assi === i ? 'on' : ''} key={i}>{e}</li></NavLink>
                )
              })
            }
          </ul>
        </TitleWrap>
        <ContentWrap>
          <Tomain>
            <NavLink to='/'><p>메인으로 돌아가기</p></NavLink>
          </Tomain>
          {
          FilterAssi.slice().reverse().map((e,i)=>{
            return(
              <ContentItem key={i}>
                <h3>{e.TITLE}</h3>
                <img src={e.IMG} alt='양도용품 이미지' />
                <ul>
                  <li>{e.PRICE}</li>
                  <li>업로드일: {e.DATE}</li>
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

export default Assi