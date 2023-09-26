import React, { useState } from 'react'
import styled from 'styled-components'
import datalist from '../data/data'
import { useLocation } from 'react-router-dom'

const Container=styled.div`
 background-color: #f9fcfc;
 padding:60px 30px;
`
const ContentWrap=styled.div`
 margin: 0 auto;
 max-width: 1200px;
 flex-wrap: wrap;
`
const Title= styled.div`
    text-align: left;
    font-size: 23px;
    font-weight: 600;
    color: #333;
    margin-bottom: 36px;
`

const Content =styled.div`
 position: relative;
 width: 100%;
 border-top: 2px solid #474747;
 font-size: 15px;
 ul{ margin-top: 5px;
    li{
        &:nth-child(2){
            color:#b6bdbe;
            margin-top: 3px;

        }
    }
 }
 `

function Noticedetail() {

    
    const location = useLocation();
    // console.log(location);
    const data = location.state;
    window.scrollTo(0,0); // 항상 스크롤이 상단에 있을려고 하면

    
  return (
    <>
        <Container>
            <ContentWrap>
                <Title>공지사항</Title>
                <Container>
                    <ul>
                        <li>{data.title}</li>
                        <li>등록일자:{data.date}</li>
                        <li>{data.desc.split('\n').map(e=>{
                            return(
                                <span>{e}<br /></span>
                            )
                        })}</li>
                    </ul>
                    <div>

                    </div>
                </Container>
            </ContentWrap>
        </Container>
    
    </>
  )
}

export default Noticedetail