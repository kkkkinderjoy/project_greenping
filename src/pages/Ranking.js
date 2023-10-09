import React, { useEffect, useState } from "react";
import dataList from "./../data/Choicedata";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faChevronCircleDown,
  faHome,
  faLocationDot,
  faPlusCircle,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const Content = styled.div`
  width: 100%;
  margin-top: 60px;
`;
const ContentWrap = styled.div`
  max-width: 1280px;
  margin: 60px auto;
`;

const Title = styled.div`
  text-align: center;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2.2em;
  position: relative;



`;

const Rank = styled.ul`
  width : 100%;
  margin: 60px auto;
  margin-top: 60px;
  display: flex;

  flex-wrap: wrap;
`;
const RankList = styled.li`
  &:nth-child(1){
    margin-top : 30px;
  }
  margin-left: 0%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  @media screen and (max-width:768px){
   flex-wrap: wrap;
  }
  cursor: pointer;
 
`;

const Num = styled.p`
 
  width: 40px;
  height: 40px;
  padding-right:15px;
  border-radius: 10px;
  background-color: #fff;
  color: #999999;
 
  text-align: center;
  color: #333333;
  font-weight: bold;
  margin-right: 3%;
  line-height: 50px;
  font-size: 1.2em;
 
`;

const NIWrap = styled.div`
  flex-basis: 40%;
  display: flex;
  @media screen and (max-width:768px){
    
    flex-basis: 100%;
  }
 
`

const Image = styled.img`
    width: 85%;
    height: 250px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
  
  @media screen and (max-width:768px){
    
    flex-basis: 80%;
    height: 200px;
    margin: 3% 0;
    margin-right: 60px;
    margin-bottom: 5%;
    
  }
`

const RankCon = styled.div`
  margin-left:20px;
  flex-basis: 63%;
  height: auto;
  p {
    margin-bottom: 12px;
  }
  p:nth-child(1) {
    font-size: 1.4em;
    margin-bottom: 15px;
  }
  p:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #999999;
    margin-bottom: 18px;
    > svg {
      padding-right: 3px;
      color: "black";
    }
  }

  p:nth-child(3) {
    font-size: 0.9em;
    line-height: 28px;
  }
`;



const Homepage = styled.div`
  display: flex;
  font-size: 0.8em;
  padding-top: 10px;
  align-items: center;
  flex-wrap: wrap;
  a {
    color: #999999;
  }
  > svg {
    
    color: #999999;
    cursor: pointer;
    padding-right: 3px;
  }
`;

const AddPage = styled.div`
  width: 30px;
  margin: 30px auto;
  >svg {
    font-size: 2.2em;
    color: "#111";
    

  }
`;

function Detail() {
  const [data, setData] = useState(dataList);

  // const [data, setData] = useState();
  const [page, setPage] = useState(23);

  useEffect(() => {
    fetch(
      `https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=10&pageNo=1&MobileOS=etc&MobileApp=greening&serviceKey=${process.env.REACT_APP_publicDataKey}&_type=json`

    )
      .then(function (res) {
        setData(res.data.response.body.items.item);
      })
      .catch(function (error) {});
  });

  if(data.length === 0){

      <div>잠시만 기다려 주세요</div>
  }
  

  return (
    <>
      <Content>
        <ContentWrap>
          <Title>랭킹</Title>
          <Rank>
            {data &&
              data.slice(13, page).map((e, i) => {
                return (
                  <>
                      {e.firstImageUrl !== "" && 
                    <RankList>
                      <NIWrap>

                      <Num>{i + 1}</Num>
                        <Image src={e.firstImageUrl} alt="{e.firstImageUrl}" />
                      </NIWrap>
                      <RankCon>
                        <p>{e.facltNm}</p>
                        <p>
                          {" "}
                          <FontAwesomeIcon icon={faLocationDot} />
                          {e.addr1}
                        </p>
                        {
                          e.themaEnvrnCl !== "" &&
                          <>{e.themaEnvrnCl}</>
                        }
                       
                        {e.resveUrl !== "" && (
                          <Homepage>
                            <FontAwesomeIcon icon={faHome} />
                            <Link to={e.resveUrl}>
                              홈페이지 방문하기
                            </Link>
                          </Homepage>
                        )}
                      </RankCon>
                    </RankList>
                      }
                  </>
                );
              })}
          </Rank>
          <AddPage>
            <FontAwesomeIcon
              onClick={() => setPage(page*2)}
              icon={faPlusCircle} 
            />
          </AddPage>
        </ContentWrap>
      </Content>
    </>
  );
}

export default Detail;
