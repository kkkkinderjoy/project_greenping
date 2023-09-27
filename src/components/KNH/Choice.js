import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { styled } from "styled-components";
import dataList from "./../../data/Choicedata"

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 60px;
`
const Content = styled.div`
  margin: 3px auto;
  max-width: 1280px;
`
const Title = styled.h3`
  font-size: 25px;

`

const ListWrap = styled.ul`
  max-width: 1280px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  justify-content: space-around;
`

const List = styled.li`
  flex-basis: 24%;
  
  
  >img{
    height:200px;
    object-fit: cover;
    margin-bottom: 7px;
  }

  @media screen and (min-width:641px) and (max-width:768px) {
      flex-basis:48% ;
      >img{
        width: 360px;
      }
  }
  @media screen and (max-width:640px) {
      flex-basis:98% ;
      >img{
        width: 600px;
        height:400px;
      }
      margin-bottom: 20px;
  }
`

const TextWrap = styled.div`
    margin-top: 3px;
    >p{
      display: flex;
      flex-wrap: nowrap;
    }
`
const Location = styled.div`
  display: flex;
  align-items:center;
  >p{
    font-size: 13px;
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

  const [data,setData] = useState(dataList)

  return (
    <>
      {/* Choice */}
      <ContentWrap>
        <Content>
          {/* 주제 */}
          <div className="top-wrap w-full flex justify-between items-end">
            <Title>오늘의 추천</Title>
          </div>
          
          {/* api */}
          <ListWrap>
            {data &&
              data.slice(0, 4).map((e, i) => {
                return (
                  <>
                  
                    <List>
                      {e.firstImageUrl !== "" && (
                        <img src={e.firstImageUrl} alt="{e.firstImageUrl}" />
                      )}
                      <TextWrap>
                        <Location>
                          <FontAwesomeIcon
                            className="text-[15px] mr-1"
                            icon={faLocationDot}
                            size="2x" color="#d8d8d8"
                          />
                          <p>{e.doNm + e.sigunguNm}</p>
                        </Location>
                        <p>{e.facltNm}</p>
                      </TextWrap>
                    </List>
                  </>
                );
              })}
          </ListWrap>
        </Content>
      </ContentWrap>
    </>
  );
}

export default Choice;
