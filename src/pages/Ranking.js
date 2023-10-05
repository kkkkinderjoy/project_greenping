import React, { useState } from "react";
import dataList from "./../data/Choicedata";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Content = styled.div`
  width: 100%;
`;
const ContentWrap = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 60px auto;
`;

const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2.0em;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -8px;
    left: 18px;
    border-radius: 2px;
  }
`;


const Rank = styled.ul`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
`;
const RankList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  > img {
    width: 250px;
    height: 160px;
    border-radius: 10px;
    margin-right: 10px;
  }
`;

const Num = styled.p`
width: 50px;
height: 50px;
  border-radius:20px;
  background-color: #98eecc;
  text-align: center;
  color: #333333;
  font-weight: bold;
  margin-right: 30px;
  line-height: 50px;
  font-size: 1.2em;
  
  
`

const RankCon = styled.div`
  width: 700px;
  p{
    margin-bottom: 5px;
  }
  p:nth-child(1){
    font-size: 1.2em;
  }
  p:nth-child(2){
    display: flex;
    align-items:center;
    font-size: 0.9em;
    color: #999999;
    >svg{
      padding-right: 3px;
    }
  }

`;

const Homepage = styled.div`
    display: flex;
    color: #999999;
    font-size: 0.9em;
    padding-top: 10px;
    align-items: center;
    >svg{
      color: #999999;
      
      padding-right: 3px;
    }
`

function Detail() {
  const [data, setData] = useState(dataList);

  return (
    <>
      <Content>
        <ContentWrap>
        <Title>랭킹</Title>
          <Rank>
            {data &&
              data.slice(0, 10).map((e, i) => {
                return (
                  <>
                    <RankList>
                      <Num>{i + 1}</Num>
                      {e.firstImageUrl !== "" && (
                        <img src={e.firstImageUrl} alt="{e.firstImageUrl}" />
                      )}
                      <RankCon>
                        <p>{e.facltNm}</p>
                        <p> <FontAwesomeIcon
                                icon={faLocationDot}
                                color="#98eecc"
                              />{e.addr1}</p>
                        {e.featureNm !== "" && (
                          <p>{e.featureNm}</p>
                        )}
                        {e.resveUrl !== "" && 
                        <Homepage>
                          
                            <FontAwesomeIcon icon={faHome}/>
                          
                          <Link to={e.resveUrl}>{e.resveUrl}</Link>
                        </Homepage>
                        }
                      </RankCon>
                    </RankList>
                  </>
                );
              })}
          </Rank>
        </ContentWrap>
      </Content>
    </>
  );
}

export default Detail;
