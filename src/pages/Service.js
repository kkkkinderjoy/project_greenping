import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components'
import Notice from './Notice';
import FAQ from './FAQ';



const Container = styled.div`
  max-width: 1280px;
  margin: 60px auto;
  padding-bottom: 100px;
`;

const  ContainerWrap = styled.div`
  width: 83%;
  margin: 0 auto;
  display: flex;
  
`

const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2em;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -8px;
    left: 18px;
    border-radius: 2px;
  }
`

const ContentWrap = styled.div`
display: flex;
justify-content: flex-start;

`
const LinkWrap = styled.div`
  width: 180px;

`

const LinkList = styled.ul`
  position: relative;
  margin-top: 30px;
`
const LinkListItem = styled.li`
  font-weight: bold;
  font-size: 1.1em;
  padding: 20px;
  border-top: 1px solid rgb(211,211,211);
  &:nth-child(1){
    border: none;
  }
`



function Service() {
  const navigate = useNavigate();
  const [viewNotice,setViewNotice] =useState(true);
 
  return (
    <>
      <Container>
        <ContainerWrap>
          <Title>고객센터</Title>
        </ContainerWrap>
        <ContentWrap>
        <LinkWrap>
            <LinkList>
              <LinkListItem onClick={()=>setViewNotice(true)}>
                 공지사항
              </LinkListItem>
              <LinkListItem onClick={()=>setViewNotice(false)}>
                  자주 묻는 질문
              </LinkListItem>
            </LinkList>
        </LinkWrap>
          {
            viewNotice ? <Notice /> : <FAQ />
          }
        </ContentWrap>
        
      </Container>
    </>
  )
}

export default Service