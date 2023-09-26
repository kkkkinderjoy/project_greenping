import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { eachDayOfInterval } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";


const Wrap = styled.div`
  width: 100%;
`;
const Searchwrap = styled.div`
  width: 1280px;
  height: 400px;
  margin: 0 auto;
  border: 5px solid #ddd;
  border-radius: 10px;
`;
const SearchForm = styled.div`
  width: 80%;
  height: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
`;
const Searchbar = styled.div`
  all: unset;
  height: 45px;
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  > input {
    flex-basis: 80%;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
  }
  > button {
    background-color: #98eecc;
    border-radius: 0 10px 10px 0;
  }
  > select {
    width: 50%;
  }
`;
const SearchLine = styled.div`
  margin: 40px auto;
  width: 1280px;
  border: 1px solid #ddd;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 1.2%;
`;
const ContentItem = styled.div`
  flex-basis: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  ul {
    display: flex;
    justify-content: start;
    flex-basis: 70%;
    border: 1px solid #ddd;
    border-radius: 5px;
    list-style: none;
    margin: 20px 20px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #ddd;
    li {
      flex-basis: 50%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      ul{
        display: flex;
        border: none;
        flex-direction: column;
        justify-content: center;
        li{
          text-align: left;
          display: flex;
          >svg{
            color: #98eecc;
          }
          p{
          display: flex;
          flex-wrap: wrap;

            img{ 
              display: block;
              position: relative;
              width: 36px;
              height: 28px;
            }
            >p{
              display: block;
              font-size: 10px;
            }   
          } 
        }
      }
  }

  /* @media screen and (max-width: 1200px){
    flex-basis: 100%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  } */
`;

function SearchD() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [Selected, setSelected] = useState("");

  
  const SbrsCl = ["전기","장작판매","물놀이장","놀이터","산책로","운동시설","무선인터넷","트렘폴린","마트.편의점","온수","운동장"]

  useEffect(() => {
    fetch(
      "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.response.body.items.item);
      });
  }, []);

  const handleSearch = () => {
    setSearchKeyword(searchTerm);
    setData(
      data.filter(
        (e) =>
          e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.addr1.includes(searchTerm) ||
          e.induty.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const optionDonm = (e) => {
    const donmValue = e.target.value;
    setSelected(donmValue)
  };

  
  const Filterdonm = [...new Set(data && data.map((e) => e.doNm).sort())];
  const FilterSigun = [...new Set(data.filter((e) =>{
    return Selected === e.doNm
  }).map((e)=> e.sigunguNm))]
  // 필터를 돌려서 중복제거함
  return (
    <>
      <Wrap>
        <Searchwrap>
          <SearchForm>
              <Searchbar>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>검색하기</button>
              </Searchbar>
              <Searchbar>
                <select onChange={optionDonm}>
                  <option value="전체">전체</option>
                  {Filterdonm.map((e, i) => {
                    return <option key={i}>{e}</option>;
                  })}
                </select>
                <select>
                  <option value="전체">전체</option>
                  {
                    FilterSigun.map((e, i) => {
                    return <option key={i}>{e}</option>;
                  })}
                </select>
              </Searchbar>
          </SearchForm>
        </Searchwrap>
        <SearchLine />
        <Content>
          <ContentItem>
            {data && data.map((e, i) =>{
              const listArray = e.sbrsCl.split(",");
              const imgUrl = ["ground","hotwater","mart","playzone","pool","sports","tramp","volt","walk","wifi","wood"]
              return(
                <React.Fragment key={i}>
                  {
                    searchKeyword === searchTerm && 
                      <NavLink to={`desc/${e.contentId}`} state={e}>
                        <ul key={i}>
                          <li>
                            <img src={e.firstImageUrl} />
                          </li>
                          <li>
                            <ul>
                              <li><FontAwesomeIcon icon={faUser}/> : {e.facltNm}</li>
                              <li><FontAwesomeIcon icon={faLocationDot}/> : {e.addr1}</li>
                              {
                                e.tel != "" && <li><FontAwesomeIcon icon={faPhoneVolume} /> : {e.tel}</li>
                              }
                              <li>
                                  {
                                    listArray.map((el,index)=>{
                                      return (
                                          <p>
                                            <img width="50" src={`images/ico_${imgUrl[index]}.png`} alt="" />
                                            <p>{el}</p> 
                                          </p>
                                      )
                                    })
                                  }
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </NavLink>
                  }
                </React.Fragment>
                )}
            )}
          </ContentItem>
        </Content>
      </Wrap>
    </>
  );
}

export default SearchD;
