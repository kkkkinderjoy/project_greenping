import React, { useState } from "react";
import Card from "./../../data/ReviewData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  faArrowAltCircleDown,
  faArrowRight,
  faChevronRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Content= styled.div` 
  padding: 10px;
  max-width: 1280px;
  margin: 0 auto;
`
const ContentWrap = styled.div`
  width: 100%;
  margin-top: 120px;
 
`

const Title = styled.h3`
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 60px;
`

const List = styled.ul` //왼쪽으로 이동해야함
    display: flex;
    justify-content: flex-end;
    margin-left: 12%;
    margin-bottom: 25px;
    @media screen and (max-width: 768px) {
        left: -20px;
        flex-wrap: wrap;
    }
`

const ListItem = styled.li`
  position: relative;
  cursor: pointer;
  margin-left: 6px;
  >span::after{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 18px;
    width: 1px;
    background-color: #e6e6e6;
  }
  &.active {
        color: lightgreen;
        font-weight: bold;
    }
`

const CardWrapper = styled.div`
  // 컨테츠 감싸는 div
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
    ul{
      display: flex;
      flex-basis: 48%;
      width: 100%;
      gap: 3%;
      margin-bottom: 25px;

    @media (max-width: 768px) {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
      }
    }
    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }
`

const CardItem = styled.li`
  //이미지 li
    width: 100%;
    flex-basis: 60%;
    height: 220px;
    
    @media screen and (max-width: 768px) {
      width: 100%;
    }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  flex-basis: 48%;
  @media (max-width: 768px) {
    width: 100%;
    object-fit: cover;
  }
`
const CardTextWrapper = styled.li`
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
    display: flex;   
    margin-bottom: 10px;
  }
`
const CardTitle = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  color: #333333;
  
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`

const CardDescription = styled.p`
  color: #666666;
  font-size: 0.9em;
  overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* ellipsis line */
	-webkit-box-orient: vertical;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    overflow: visible;
    -webkit-line-clamp: 6;
  }
`

const HashWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 0.8em;
  text-align: center;
  width: 100%;
  gap: 2%;
  color: #666666;
  
  div {
   margin-right: 2%;
   background-color : mintcream ;
    @media (max-width: 768px) {
      display: none;
    }
  }
`

const Btn = styled.div`
  font-size: 1.4em;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 80px;
  @media (max-width: 768px) {
     margin: 0 auto;
     font-size: 1.1em;
     margin-top: 20px;
    }
  p{
    color: #333333;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    font-size: 1.2em;
    svg{
      font-size: 1.2em;
      transition: 0.3s;
      &:hover{
        transform: translateX(15px);}
    }
  }
`

function Review() {
  
  let [data, setData] = useState(Card);
  let [type, setType] = useState("best");
  const hashTag = {
    best: [
      ["#맛있는 먹거리", "#재미있는", "#낭만캠핑","#캠핑라이프"],
      ["#가족과함께", "#애완동물동반", "#캠핑카","#캠프파이어N"],
      ["#카라반", "#자연과함께", "#모두와함께","#야외모험"],
    ],
    recent: [
      ["#가족과함께", "#애완동물동반", "#캠핑카","#산악캠핑"],
      ["#추천캠핑", "#조용해요", "#별이보여요","#백패킹"],
      ["#낭만캠핑", "#다양한먹거리", "#자연과함께","#네이처포토"],
    ],
  };

  const CardMenu = data.filter((e) => {
    return type === "" || e.type === type;
  });


  return (
    <>
        <Content>
      <ContentWrap>
        <Title>리뷰</Title>
          <List>
            <ListItem className={type === "best" ? 'active' : ""} onClick={() => setType("best")} >인기순 </ListItem>
            <ListItem><span></span></ListItem> 
            <ListItem className={type === "recent" ? 'active' : ""} onClick={() => setType("recent")}> 최신순</ListItem>
          </List>
       
        
        <CardWrapper>
          {
          CardMenu.slice(1,5).map((e,i)=>{
            return(
              <>   
            <ul key={i}>
              <CardItem>
                <CardImage src={e.img} alt="" />
              </CardItem>

              <CardTextWrapper>
                <CardTitle>{e.title}</CardTitle>
                <CardDescription>{e.desc}</CardDescription>
                <HashWrapper>
                  {
                  hashTag[e.type].map((el, index) => {
                    return <div key={index}>{el[i]}</div>;
                  })
                  }
                </HashWrapper>
              </CardTextWrapper> 
            </ul>
              </>
            )
          })
          }
            <Btn>
              <NavLink to="/reviewmore">
              <p>전체 리뷰 보기 <FontAwesomeIcon icon={faArrowRight} /></p>
              </NavLink>
            </Btn>
        </CardWrapper>     
      </ContentWrap>
        </Content>
    </>
  );
}

export default Review;
