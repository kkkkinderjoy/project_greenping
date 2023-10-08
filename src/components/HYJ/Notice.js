import React from 'react'
import { NavLink, Outlet, Route, Routes } from 'react-router-dom';
import datalist from './../../data/NoticeData'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { current } from '@reduxjs/toolkit';


const NoticeContent = styled.div`
 padding: 60px 50px;

 @media screen and(max-width: 768px){
    padding:0;
 }
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
      @media screen and (max-width:768px){
          font-size: 0.9em;
          
    }
`

const List = styled.ul`
 display: flex; 
 gap: 15px;
 position: relative;
 
`

const Listitem = styled.li`
  cursor: pointer;
  font-size: 1em;
  position: relative;
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
 
  >span::after{
    content: "";
    position: absolute;
    top: 1px;
    left: -10px;
    width: 1px;
    height: 17px;
    background-color: #666;

  }
 
`

const Container =styled.div`
 position: relative;
 width: 100%;
 border-top: 2px solid #474747;
 font-size: 1.2em;
  ul{
  margin-top: 8px;
  div{
    display: flex;
    border-bottom: 1px solid #e5e5e5;
    flex-basis: 100%;
    
    li{
        margin-top: 3px;
        text-align: center;
        font-size: 0.9em;
        line-height: 1;
        text-align: left;
        font-weight: 500;
        color: #666666;
        flex-basis: 15%;
        padding: 15px 15px;
        @media screen and (max-width:768px){
          font-size: 0.7em;
          
        }
        &:nth-child(1){
          text-align: center;
          @media screen and (max-width:768px){
          display: none;
        }
        }
        &:nth-child(2){
          cursor: pointer;
          flex-basis: 70%;
          @media screen and (max-width:768px){
          font-size: 0.7em;
        }
        &:nth-child(3){
          text-align: center;
          @media screen and (max-width:768px){
            flex-basis: 20%;
        }
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
     
        <TotalCnt>
          <div>총<p>{dataFilter.length}</p>건</div>
          <List>
            <Listitem onClick={()=>{setType("전체")}}>전체</Listitem>
            {
              
              FilterType.map((e,i)=>{
                return(
                  <Listitem key={i} onClick={()=>{setType(e)}}>
                  <span>{e}</span>
                  </Listitem>
                )
              })
            }
          </List>
        </TotalCnt>
        <Container>
         <Outlet />
          <ul>
          { 
            dataFilter.slice().reverse().map((e,i)=>{
              return(
                <div key={i}>
                  <li>{e.type}</li>
                  <li><NavLink to={`notice/${i+1}`} state={e}>{e.title}</NavLink></li>
                  <li>{e.date}</li>
                </div>
              )
            })
          }
          </ul>
        </Container>
    </NoticeContent>
    </>
  )
}

export default Notice