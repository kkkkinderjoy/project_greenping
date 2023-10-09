import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation } from 'react-router-dom'
import data from "./../../data/NoticeData"
import Service from '../../pages/Service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  width: 100%;
  margin: 60px 0;
  height: 65vh;
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


const Content =styled.div`
 position: relative;
 width: 100%;
 border-top: 2px solid #474747;
 margin-top: 100px;
  
 ul{ 
    flex-basis: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:768px){
        font-size: 0.9em;
    }
    li{
        margin: 0 auto;
        &:nth-child(1){
           border-radius: 10px;
           color: #fff;
           width: 80px;
           height: 20px;
           text-align: center;
           background-color:#23D384;
           padding: 2px;
        }
        &:nth-child(2){
            flex-basis: 70%;
            font-size: 1.3em;
            margin-top: 5px;
            
        }
        &:nth-child(3){
            font-size: 0.9em;
            flex-basis: 10%;
            text-align: left;
            color:#b6bdbe;
            margin-top: 5px;
        } 
        @media screen and (max-width:768px){
            &:nth-child(2){
            flex-basis: 60%;
        }
        &:nth-child(3){
            flex-basis: 20%;
        }
        }
    }
 
}
 `

 const Desc = styled.div`
    position: relative;
 p{
    padding: 100px 50px;
 }
 a{
    
    position: absolute;
    bottom: 10px;
    right: 20px;
    border-radius: 10px;
    background-color: #ddd;
    width: 60px;
    height: 20px;
    text-align: center;
    padding: 10px;

    
 }
 @media screen and (max-width:768px){
    font-size: 0.9em;
 }
 `

function Noticedetail() {
    const[isActive,setIsActive]= useState(true);
    const location = useLocation();
    // console.log(location);
    const data = location.state;
    window.scrollTo(0,0); // 항상 스크롤이 상단에 있을려고 하면

    
  return (
    <>  

    <Container>
        <ContainerWrap>
        <Title>고객센터</Title>
            <Content>
                    <ul>
                        <li>{data?.type}</li>
                        <li>{data?.title}</li>
                        <li>{data?.date}</li>
                    </ul>
                    <Desc>
                        {
                             <p>{data?.desc.split('\n').map(e=>{
                                return(
                                    <span>{e}<br /></span>
                                )
                            })}
                            </p>
                        }
                        <NavLink to="/service/notice"><FontAwesomeIcon icon={faAlignJustify} />목록</NavLink>
                    </Desc>
                </Content>
            </ContainerWrap>
        </Container>
    
    </>
  )
}

export default Noticedetail