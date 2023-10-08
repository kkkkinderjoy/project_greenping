import React, { Fragment, useState } from 'react'
import { styled } from 'styled-components'
import datalist from './../data/FAQData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons'

const FAQContent = styled.div`
 padding: 60px 50px;
`

const FAQWrap = styled.div`
 max-width: 1280px;
 flex-wrap: wrap;

`
const TotalCnt = styled.div`
  display: flex;
  margin-bottom: 10px;
  display: flex;
  gap: 2px;
  margin-left: 10px;
  p{
      color: orangered;
   }
   @media screen and (max-width:768px){
          font-size: 0.9em;
          
    }
      
`

const Container =styled.div`
 position: relative;
 width: 100%;
 border-top: 2px solid #474747;
 font-size: 1em;
  
`


const StyledIcon = styled(FontAwesomeIcon)`
    transition: all 0.5s;
    font-size: 1em;
    transform: rotate(${({$isopen})=> $isopen === "true" ? "180deg" : "0"});

`

const List =styled.ul`
 font-size: 1em;
 flex-basis: 100%;
 
`


const ListItem =styled.li`
  padding: 20px; 
  cursor: pointer;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #eee;
  &:nth-child(even){
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    padding-right: 2rem;
    line-height: 1.4;
    background-color: #eee;
    transition: 0.3s ease-in-out;
    height: 0;
    display: none;
     &.active{
      display: block;
      height: 100%;
     }
  }
  @media screen and (max-width:768px){
     font-size: 0.9em;
          
    }
`




function FAQ() {

  const[data,setData]=useState(datalist);
  const [activeIndex, setActiveIndex] = useState(-1);
  
 
  return (
    <>
      <FAQContent>
        <FAQWrap>
          <TotalCnt>총<p>{datalist.length}</p>건</TotalCnt>
         <Container>
          <List>
            {
              datalist.map((e,index)=>{
                return(
                  <Fragment key={index}>
                    <ListItem onClick={()=>{
                      let tempCard = data;
                      tempCard[index].show = !tempCard[index].show; //토글
                      setData([...tempCard]);
                    }}>Q. {e.question}<StyledIcon icon={faChevronDown} $isopen={datalist[index].show ? "true" :"false"}/></ListItem>
                    <ListItem className={datalist[index].show ? "active" :""}>A. {e.answer}</ListItem>  
                  </Fragment>
                )
              })
            }
          </List>
         </Container>
        </FAQWrap>
      </FAQContent>
    </>
  )
}

export default FAQ