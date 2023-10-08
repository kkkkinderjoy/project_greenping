import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components'
import Notice from './Notice';
import FAQ from './FAQ';



const Container = styled.div`
  width: 100%;
  margin: 60px;
 
`

const Title = styled.div`
  font-weight: bold;
  font-size: 2em;
  text-align: center;
`

const  ContainerWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  
`


const LinkList = styled.ul` 
  
  position: relative;
  margin-top: 30px;
`

const LinkListItem = styled.li`
  
  border-top: 1px solid rgb(211,211,211);
  color: #666;
    span{
      cursor: pointer;
      display: block;
      padding: 20px 0px;
      font-size: 1.1em;
    }
  &:nth-child(1){border: none;}
  &:hover{font-weight: bold;}
`



function Service() {
  const navigate = useNavigate();
  const [viewNotice,setViewNotice] =useState(true);
 
  return (
    <>
      <Container>
      <Title>고객센터</Title>
        <ContainerWrap>
              <LinkList>
                <LinkListItem onClick={()=>setViewNotice(true)}>
                  <span>공지사항</span>
                </LinkListItem>
                <LinkListItem onClick={()=>setViewNotice(false)}>
                    <span>자주 묻는 질문</span>
                </LinkListItem>
              </LinkList>
            {
              viewNotice ? <Notice /> : <FAQ />
            }
          
        </ContainerWrap>
      </Container>
    </>
  )
}

export default Service