import React, { useState } from "react";
import Card from "./../../data/ReviewData";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  width: 100%;
`

const ContentWrap= styled.div`
 max-width: 1200px;
  margin: 0 auto;
`

// const Container = styled.div`
//   margin-top: 50px;
//   display: flex;
//   margin-bottom: 4px;
//   width: 100%;

//   @media (max-width: 768px) {
//     width: 90%;
//   }
// `;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2em;
  margin: 0 auto;
 
  /* svg{
    font-size: 0.7em;
    margin-left: 2px;
    margin-bottom: 1px;
    color: #777777;
  } */
 
`

const List = styled.ul`
    display: flex;
    justify-content: flex-end;
`

const ListItem = styled.li`
  margin: 10px 4px 0;
  cursor: pointer;
  &:hover { //click 했을 때 색상변경되도록 수정필요!
    color: red;
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
  ul {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 560px) {
      display: flex;
      flex-direction: column;
    }
  }
`

const CardItem = styled.li`
  //이미지 li
  padding: 2px;
  width: 100%;
  height: 250px;
  @media (max-width: 560px) {
    width: 85%;
    margin: auto;
  }
  @media (min-width: 768px) {
    width: 40%;
    display: flex;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 10px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 70%;
    height: 240px;
  }
`

const CardTextWrapper = styled.li`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  width: 45%;

  @media (max-width: 768px) {
    width: 35%;
    margin-top: 5px;
    display: flex; 
    width: 100%;
    -webkit-line-clamp: 2;
  }
`

const CardTitle = styled.p`
  width: 80%;
  font-weight: 600;
  font-size: 1.3em;
  color: #333333;
`

const CardDescription = styled.p`
  width: 80%;
  color: #666666;
  font-size: 1em;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`

const HashWrapper = styled.div`
  display: flex;
  font-size: 1em;
  text-align: center;
  width: 100%;
  gap: 5%;
  color: #666666;
  div {
    padding: 1%;
    width: 30%;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media (min-width: 768px) {
      display: block;
      width: 25%;
    }
    @media (max-width: 560px) {
      display: none;
    }
  }
`
const Btn = styled.div`
  margin-top: 20px;
  transform: translate(50%,50%);
    svg{  
    width: 5%;
    height: 5%;
  }
  
`


function Review() {
  // const [Bgcolor, setBgColor] = useState(false)

  let [data, setData] = useState(Card);
  let [type, setType] = useState("best");
  const hashTag = {
    best: [
      ["#맛있는 먹거리", "#재미있는", "#낭만캠핑"],
      ["#가족과함께", "#애완동물동반", "#캠핑카"],
      ["#카라반", "#자연과함께", "#모두와함께"],
    ],
    recent: [
      ["#가족과함께", "#애완동물동반", "#캠핑카"],
      ["#추천캠핑", "#조용해요", "#별이보여요"],
      ["#낭만캠핑", "#다양한먹거리", "#자연과함께"],
    ],
  };
  console.log(hashTag);

  const CardMenu = data.filter((e) => {
    return type === "" || e.type === type;
  });

  console.log(CardMenu);
  return (
    <>
      <Content>
        <ContentWrap>
        <Title>리뷰</Title>
          <List>
            <ListItem onClick={() => setType("best")}>인기순 </ListItem>
            <ListItem onClick={() => setType("recent")}> 최신순</ListItem>
          </List>
       
        <CardWrapper>
          {CardMenu.slice(1, 4).map((e, i) => (
            <ul key={i}>
              <CardItem>
                <CardImage src={e.img} alt="" />
              </CardItem>
              <CardTextWrapper>
                <CardTitle>{e.title}</CardTitle>
                <CardDescription>{e.desc}</CardDescription>
                <HashWrapper>
                  {hashTag[e.type].map((el, index) => {
                    return <div key={index}>{hashTag[e.type][i][index]}</div>;
                  })}
                </HashWrapper>
              </CardTextWrapper>
            </ul>
          ))} 
        </CardWrapper> 
        <Btn><NavLink to="/reviewmore"><FontAwesomeIcon icon={faPlusCircle}/></NavLink></Btn>
        </ContentWrap>
      </Content>
     
          

    </>
  );
}

export default Review;
