import React, { useState } from 'react'
import { styled } from 'styled-components'
import datalist from './../data/FAQData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const FAQContent = styled.div`
 padding: 60px 50px;
`

const FAQWrap = styled.div`
 max-width: 1280px;
 flex-wrap: wrap;

`

const StyledIcon = styled(FontAwesomeIcon)`
    transition: all 0.5s;
    font-size: 12px;
    vertical-align: baseline;
    transform: rotate(${({$isopen})=> $isopen === "true" ? "180deg" : "0"});

`

const List =styled.ul`
 gap: 15px;
 position: relative;
 
`

const ListItem =styled.li`
   
  &:nth-child(odd){
    padding: 20px 15px; 
    cursor: pointer;
  }
  &:nth-child(even){
    padding-left: 20px;
    line-height: 60px;
    background-color: #f2efef;
    border-bottom: 1px solid #e1e1e1;
    height: 0; 
    overflow: hidden; 
    transition: 0.5s;
    &.on{
      height: 180px;
    }
  }


`




function FAQ() {

  const[data,setData]=useState(datalist);
  const[IsActive,setIsActive]=useState(true);

  return (
    <>
      <FAQContent>
        <FAQWrap>
          <List>
            {
              datalist.map((e,i)=>{
                
                return(
                    <>
                      <ListItem onClick={()=>setIsActive(true)}>{e.question}</ListItem>
                      <ListItem className={IsActive ? "on" :""}>{e.answer}</ListItem>
                    </>
                )
              })
            }
          </List>
        </FAQWrap>
      </FAQContent>
    </>
  )
}

export default FAQ