import React, { useState } from 'react';
import Card from '../data/Data';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';



const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const FlexContainer = styled.div`
margin-top: 50px;
  display: flex;
  margin-bottom: 4px;
  width: 100%;

  @media (max-width: 768px) {
      width: 90%;
  }
`;

const Heading = styled.h2`
  font-size: 20px;
  margin: auto;
  flex-basis: 72%;
  @media screen and (max-width:768px) {
      flex-basis: 55%;
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-basis: 10%;
  @media screen and (max-width:768px) {
      flex-basis: 25%;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  margin-right: 2px;
  cursor: pointer;
  margin: 0 auto;
  &.on{
    color: #A6F4D0;
  }
`;

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
    @media screen and (max-width: 560px){
      display: flex;
      flex-direction: column;
    }
  }
`;

const CardItem = styled.li` //이미지 li
  padding: 2px;
  width: 100%;
 
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
`;

const CardImage = styled.img`
  border-radius: 2px;
  height: 200px;
  width: 100%;
  margin: auto;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
 
  @media (min-width: 1024px) {
    width: 70%;
    height: 240px;
  }
`;

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
    flex-direction: column;
    width: 100%;
    -webkit-line-clamp: 2
  }
`;

const CardTitle = styled.p`
  width: 80%;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  margin: 5px auto;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 80%;
  }
`;

const CardDescription = styled.p`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
  }
`;

const HashWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 85%;
  margin: auto;

  div {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 10px;
    margin-top: 15px;
    width: 30%;

    @media (min-width: 768px) {
      display: block;
      width: 25%;
    }
    @media screen and (max-width: 560px) {
      display: none;
    }
 
  }
`;

const More = styled.p`
  font-size: 12px;
  position: relative;
  top: 190px;
  left: -20px;

  @media (max-width: 768px) {
   p{
    display: none;
   }
    
  }
`;

function Review() {
  const [Bgcolor, setBgColor] = useState(false)
  

  let [data, setData] = useState(Card);
  let [type, setType] = useState("best");
  const hashTag = {
    best: [
      ['#맛있는 먹거리', '#재미있는', '#낭만캠핑'],
      ['#가족과함께', '#애완동물동반', '#캠핑카'],
      ['#카라반', '#자연과함께', '#모두와함께']
    ],
    recent: [
      ['#가족과함께', '#애완동물동반', '#캠핑카'],
      ['#추천캠핑', '#조용해요', '#별이보여요'],
      ['#낭만캠핑', '#다양한먹거리', '#자연과함께']
    ]
  }
  console.log(hashTag)

  const CardMenu = data.filter(e => {
    return type === "" || e.type === type;
  });

  console.log(CardMenu);
  return (
    <>
      <Wrapper>
        <FlexContainer>
          <Heading>리뷰&</Heading>
          <ListContainer>
            <ListItem onClick={() =>

              setType("best")}>인기순</ListItem>
            <ListItem>ㅣ</ListItem>
            <ListItem onClick={() =>

              setType("recent")}>최신순</ListItem>
          </ListContainer>
        </FlexContainer>
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
                  {
                    hashTag[e.type].map((el, index) => {
                      return (
                        <div key={index}>{hashTag[e.type][i][index]}</div>
                      )
                    })
                  }
                </HashWrapper>
              </CardTextWrapper>
              <NavLink to='/greentalk'>
                <More>
                  <p>더 보기</p>
                  <img src="" alt="" />
                </More>
              </NavLink>
            </ul>
          ))}
        </CardWrapper>
      </Wrapper>
    </>
  );
}

export default Review;
