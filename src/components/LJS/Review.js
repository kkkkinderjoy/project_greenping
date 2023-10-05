import React, { useState } from "react";
import Card from "./../../data/ReviewData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  faArrowAltCircleDown,
  faArrowRight,
  faChevronRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Content = styled.div`
  width: 100%;
`

const ContentWrap= styled.div`
 max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.0em;
  margin: 0 auto;
`

const List = styled.ul`
    display: flex;
    justify-content: flex-end;
`

const ListItem = styled.li`
  margin: 10px 4px 0;
  cursor: pointer;
  &.active {
        color: hotpink;
        font-weight: bold;
    }

  &:nth-child(1)::before{
    position: absolute;
    top: 0;
    right: 0;
    height: 10px;
    width: 1px;
  }
`

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  ul {
    width: 43%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    height: 100%;
    margin-right: 5px;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
`

const CardItem = styled.li`
  //이미지 li
  padding: 5px;
  width: 100%;
  height: 240px;
  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
  }
`

const CardImage = styled.img`
  height: 100%;
  width: 90%;
  margin: auto;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const CardTextWrapper = styled.li`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
    text-align: start;
    margin-bottom: 10px;
  }
`

const CardTitle = styled.p`
  font-weight: 600;
  font-size: 1.2em;
  color: #333333;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    
  }
`

const CardDescription = styled.p`
  width: 300px;
  color: #666666;
  font-size: 1em;
  overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* ellipsis line */
	-webkit-box-orient: vertical;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    overflow: hidden;
	  text-overflow: ellipsis;
	  word-wrap: break-word;
	  display: -webkit-box;
	  -webkit-line-clamp: 2; /* ellipsis line */
  }
`

const HashWrapper = styled.div`
  display: flex;
  font-size: 0.8em;
  text-align: center;
  width: 350px;
  gap: 2%;
  color: #666666;
  div {
    padding: 10px;
    width: 100px;
    border-radius: 10px;
    border: 1px solid #ddd;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const Btn = styled.div`
  font-size: 1.4em;
  text-align: center;
  width: 20%;
  margin: 0 auto;
  margin-top: 100px;
  @media (max-width: 768px) {
     margin: 0 auto;
     width: 30%;
     font-size: 20px;
     margin-top: 20px;
    }
  p{
    color: #333333;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
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
              <p>전체 보기 <FontAwesomeIcon icon={faArrowRight} /></p>
            </NavLink>
            </Btn>
        </CardWrapper>
        </ContentWrap>
      </Content>
    </>
  );
}

export default Review;
