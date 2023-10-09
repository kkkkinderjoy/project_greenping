import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 120px;
`
const Content = styled.div`
  max-width: 1280px;
  margin: 3px auto;
`

const Title = styled.h3`
  text-align: center;
  font-size: 2.0em;
  margin-bottom: 90px;
`

const List = styled.ul`
  max-width: 1280px;
  margin: 30px auto;
  display: flex;
  padding: 0 30px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li`
  flex-basis: 30%;
  &:nth-child(1){
    flex-basis: 60%;
  
  @media screen and (max-width: 1024px) {
    flex-basis: 98%;
   
  }
  }
  img{
    width: 100%;
    height: 100%;
  }
 
  @media screen and (max-width: 1024px) {
    flex-basis: 49%;
   
  }
`;

const Insta= styled.div`
width: 100%;
height: 70px;
background-color: #fff;
>div{
    position: relative;
    width: 100%;
    height:70px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    img{
        width: 139px;
        height: 34px;
        margin-right: 20px;
    }
    >a{
        position: absolute;
        right: 40px;
        top: 10px;
        display: block;  
        svg{
            font-size: 1.7em;
            background-color: #fff;
        } 
    }
}
`
const InstaWrap= styled.div`
    margin: 20px 0;
    height: 161px;
    overflow-y:scroll;
    ul{
        
        width: 100%;
        padding-left: 5px;
        box-sizing: border-box;
        margin-bottom: 10px;
        li{ 
            position: relative;
            width: 100%;
            color: #2d55af;
            height: 60px;
            line-height: 35px;
            background: url("/images/instabgi.png")no-repeat 0 0;
                a{ 
                    position: absolute;
                    top: 0;
                    left: 80px;
                    font-size: 1em;
                    color: #2d55af;
                    letter-spacing: -0.08em;
                    line-height: 35px;
                }
        }
    }

`
const Event= styled.div`

`


function Story() {
    
  return (
    <>
                                          
    <ContentWrap>
            <Title>그린핑 소식</Title>
        <Content>
            <List>
                <ListItem>
                    <Insta>
                        <div><img src={`images/instalogo.png`} alt="instagram"/>
                        <NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>
                            <FontAwesomeIcon icon={faPlusCircle}/>
                        </NavLink>
                        </div>
                    </Insta>
                    <InstaWrap>
                            <ul>
                                <li><NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>#그린핑#캠핑고민#가을이벤트</NavLink></li>
                           
                                <li><NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>#그린핑#텐트#장비#캠핑용품</NavLink></li>
                    
                                <li><NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>#그린핑#글램핑#텐트#야영장#오토캠핑장</NavLink></li>
                        
                                <li><NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>#그린핑#캠핑음식#카라반</NavLink></li>
                            
                                <li><NavLink to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==" target='_blank'>#그린핑#가족여행#애견동반#캠핑장</NavLink></li>
                            </ul>
                            
                        </InstaWrap>
                </ListItem>
                <ListItem><img src={"images/storyimg1.png"} alt="단풍" /></ListItem>
                <ListItem><img src={"images/storyimg2.png"} alt="체험" /></ListItem>
            </List>
        </Content>
    </ContentWrap>

    </>
  )
}

export default Story