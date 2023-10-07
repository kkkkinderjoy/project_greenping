import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { styled } from "styled-components";
import dataList from "./../../data/Choicedata";
import { NavLink } from "react-router-dom";

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 120px;
`
const Content = styled.div`
  margin: 3px auto;
  max-width: 1200px;
`
const Title = styled.h3`
  text-align: center;
  font-size: 2.0em;
  margin-bottom: 50px;
`

const ListWrap = styled.ul`
  max-width: 1280px;
  margin: 30px auto;
  display: flex;
  padding: 0 30px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    
  }
`;


const List = styled.li`
  flex-basis: 24%;
  overflow: hidden;
   img {
    width:100%;
    height: 230px;
    object-fit: cover;
    margin-bottom: 7px;
    border-radius: 10px;
  }

  @media screen and (min-width: 641px) and (max-width: 768px) {
    flex-basis: 48%;
    margin-bottom: 20px;
 
  }
  @media screen and (max-width: 640px) {
    flex-basis: 98%;
    margin-bottom: 20px;
  }
`;

const TextWrap = styled.div`
  margin-top: 3px;
  
  >span{
    
    font-weight: bolder;
    color: black;
    display: flex;
    align-items: end;
    margin-bottom: 7px;
    >p:nth-child(1){
      font-size: 1.2em;
    }
    >p:nth-child(2){
      margin-left: 4px;
      font-size: 0.8em;
    }
  }
  > p {
    display: flex;
    flex-wrap: nowrap;
    font-size: 0.9em;
    
  }
`;
const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  margin: 3px 0;
  >p{
    margin-left: 7px;
    font-size: 1em;
    color: #999999;
  }
  >svg{
    color: #98eecc;
  }
`

function Choice() {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=4&pageNo=1&MobileOS=etc&MobileApp=greening&serviceKey=R%2Fe6huREBYwbBicPUN2vK6fCZ3CLJi%2FuKHSWCg%2BDVaxqS0Yqck%2BgJ7yUGTTYUVYaDAbsRm8fOjLOzIpbGQaKmA%3D%3D&_type=json"
  //     )
  //     .then(function (res) {
  //       setData(res.data.response.body.items.item);
  //     })
  //     .catch(function (error) {});
  // });

 const [data, setData] = useState();
 
  useEffect(()=>{
    const RandomData = ()=>{
      const Array = [];
      const Result = dataList.filter((e) => e.firstImageUrl !== '')
      for(let i = 0; i < 4; i++){
        
        const Random = Math.floor(Math.random() * Result.length);
        Array.push(Result[Random])
        setData(Array)
        console.log(Array)
      }
    }
    RandomData()
  }, [])

  const price = ["50,000","45,000","60,000" ,"65,000"]; //가격은 배열로 지정함(공공데이터에 가격정보가 없기때문에...)

  return (
    <>
      {/* Choice */}
      <ContentWrap>
        <Content>
          {/* 주제 */}
          <div >
            <Title>그린핑 PICK</Title>
          </div>

          {/* api */}
          <ListWrap>
            {data &&
              data.map((e, i) => {
                return (
                  <React.Fragment key={i}>
                    {
                        <List>
                      <NavLink to={`desc/${e.contentId}`} state={e}>
                          {e.firstImageUrl !== "" && (
                            <img
                              src={e.firstImageUrl}
                              alt="{e.firstImageUrl}"
                            />
                          )}
                          <TextWrap>
                            <span>
                              <p>{price[i]}</p>
                              <p>원 부터</p>
                            </span>
                            <p>{e.facltNm}</p>
                            <Location>
                              <FontAwesomeIcon icon={faLocationDot}/>
                              <p>{e.doNm + " "+ e.sigunguNm}</p>
                            </Location>
                          </TextWrap>
                      </NavLink>
                        </List>
                    }
                  </React.Fragment>
                );
              })}
          </ListWrap>
        </Content>
      </ContentWrap>
    </>
  );
}

export default Choice;
