import React, { useEffect, useState } from "react";
import dataList from "./../data/Choicedata";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faHome,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { AutoSizer, InfiniteLoader, List } from "react-virtualized";




const Content = styled.div`
  width: 100%;
  height: 700px;
`;
const ContentWrap = styled.div`
  max-width: 1280px;
  margin: 60px auto;
`;

const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
`;

const RankList = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
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
  flex-basis: 37%;
  display: flex;
  @media screen and (max-width:768px){
    
    flex-basis: 100%;
  }
 
`

const Image = styled.img`
    width: 85%;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
    object-fit: cover;
  
  @media screen and (max-width:768px){
    
    flex-basis: 74%;
    height: 200px;
    margin: 3% 0;
    margin-right: 60px;
    margin-bottom: 5%;
    
  }
`

const RankCon = styled.div`
  flex-basis: 68%;
  height: auto;
  p {
    margin-bottom: 12px;
  }
  p:nth-child(1) {
    font-size: 1.1em;
  }
  p:nth-child(2) {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    color: #999999;
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
    const [isLoading, setIsLoading] = useState(false);
    const page = 10

    const loadData = () => {
        setIsLoading(true);
  
       
        setTimeout(() => {
           setData(dataList.slice(0, page));
           setIsLoading(false);
        }, 1000);
     };


    useEffect(() => {
        
        loadData();
     }, []);
  
   
     const loadMoreData = () => {
        setIsLoading(true);
  

        setTimeout(() => {
        
           const nextPageData = dataList.slice(data.length, data.length + page);
           
           setData(prevData => [...prevData, ...nextPageData]);
           setIsLoading(false);
        }, 1000);
     };
  

   return (
      <>
        <Content>
          <ContentWrap>
            <Title>랭킹</Title>

         

            <AutoSizer>
              {({ width, height }) => (
                <InfiniteLoader
                  isRowLoaded={({ index }) => !!data[index]}
                  loadMoreRows={loadMoreData} 
                  rowCount={dataList.length} 
                >
                  {({ onRowsRendered }) => (
                    <List
                      width={width}
                      height={400}
                      rowCount={data.length}
                      rowHeight={200} 
                      rowRenderer={({ index, key, style }) => {
                        const item = data[index];


                        return (
                          <div key={key} style={style}>
                            
                            <>
                              {item.firstImageUrl !== "" && (
                                <RankList>
                                
                                  <NIWrap>
                            <Num>{index +1}</Num>
                            <Image src={item.firstImageUrl} alt="{item.firstImageUrl}" />
                          </NIWrap>
                          <RankCon>
                            <p>{item.facltNm}</p>
                            <p>
                              {" "}
                              <FontAwesomeIcon icon={faLocationDot} />
                              {item.addr1}
                            </p>

                            {item.resveUrl !== "" && (
                              <Homepage>
                                <FontAwesomeIcon icon={faHome} />
                                <Link to={item.resveUrl}>
                                  홈페이지 방문하기
                                </Link>
                              </Homepage>
                            )}
                          </RankCon> 
                                </RankList>  
                              )}
                            </>
                          </div>  
                        );
                      }}
                      onRowsRendered={onRowsRendered} 
                    />
                  )}
                </InfiniteLoader>
              )}
            </AutoSizer>
            {!isLoading && data.length === dataList.length && (
             <>
               모든 데이터를 로드하였습니다.
             </>
          )}
          </ContentWrap>
        </Content>
      </>
    );
}

export default Detail;

