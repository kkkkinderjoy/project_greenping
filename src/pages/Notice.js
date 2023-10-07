import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import datalist from './../data/NoticeData'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { current } from '@reduxjs/toolkit';


const NoticeContent = styled.div`
 padding:60px 30px;
`

const NoticeWrap = styled.div`
 margin: 40px auto;
 max-width: 1000px;
 flex-wrap: wrap;

`
const Title= styled.div`
    text-align: left;
    font-size: 23px;
    font-weight: bold;
    color: #333;
    margin-bottom: 36px;
`
const TotalCnt = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
    div{
      display: flex;
      gap: 2px;
      margin-left: 10px;
        p{
          color: orangered;
        }
      }
`

const List = styled.ul`
 display: flex; 
 gap: 15px;
 position: relative;
 
`

const Listitem = styled.li`
  li{
  cursor: pointer;
  font-size: 15px;
  /* &::before{
    content: "";
    position: absolute;
    top: 4px;
    left: 36px;
    background-color: #dddddd;
    width: 1px;
    height: 15px;
    z-index: 50;
  } */
 }
`

const Container =styled.div`
 position: relative;
 width: 100%;
 border-top: 2px solid #474747;
 font-size: 15px;
  ul{
  margin-top: 8px;
  div{
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    flex-basis: 100%;
    li{
        margin-top: 20px;
        text-align: center;
        padding: 10px;
        font-size: 13px;
        line-height: 18px;
        font-weight: 500;
        color: #666666;
        flex-basis: 15%;
        @media screen and (min-width:768px){
          padding: 27px 15px;
          font-size: 15px;
          flex-basis: 10%;
        }
        &:nth-child(1){
            display: none;
            
            @media screen and (min-width:768px){
            display: block;
            }
        }
       
        &:nth-child(3){
          cursor: pointer;
          text-align: left;
          flex-basis: 70%;
          @media screen and (min-width:768px){
            padding: 27px 15px; 
            flex-basis: 45%; 
            }
        }
        &:nth-child(5){
          display: none;
          @media screen and (min-width:768px){
            margin-left: 80px;  
            display: block;
            }
        }
     }
     
  }
}
`

function Notice(){
    //datalist.reverse(); //datalist 배열 역순으로 만들기
    const[data,setData] = useState(datalist);
    const[type,setType] = useState("전체");
    
    const dataFilter = datalist.filter(e =>{
        if(type === "전체"){
            return e.type
        }else{
            return e.type === type
        }
    })
    const FilterType = [...new Set (datalist.map(e => e.type))]

    

  return (
    <>
    <NoticeContent>
      <NoticeWrap>
        <Title>공지사항</Title>
        <TotalCnt>
          <div>총<p>{dataFilter.length}</p>건</div>
          <List>
            <Listitem onClick={()=>{setType("전체")}}>전체</Listitem>
            {
              
              FilterType.map((e,i)=>{
                return(
                  <Listitem key={i} onClick={()=>{setType(e)}}>{e}</Listitem>
                )
              })
            }
          </List>
        </TotalCnt>
        <Container>
          <ul>
          { 
            dataFilter.slice().reverse().map((e,i)=>{
              return(
                <div key={i}>
                  <li>{e.num}</li>
                  <li>{e.type}</li>
                  <li><NavLink to={`/noticedetail/${e.SEQ}`} state={e}>{e.title}</NavLink></li>
                  <li>{e.date}</li>
                  <li>조회수:{e.clicks}</li>
                </div>
              )
            })
          }
          </ul>
        </Container>
      </NoticeWrap>
    </NoticeContent>
    </>
  )
}

export default Notice