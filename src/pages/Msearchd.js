import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import dataList from './../data/Choicedata'

const Wrap = styled.div`
  width: 100%;
  margin-top: 60px;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  @media screen and (max-width:768px){
      font-size: 1.5em;
  }
`
const Searchwrap = styled.div`
  max-width: 1280px;
  height: 400px;
  margin: 60px auto;
  border: 5px solid #ddd;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    flex-basis: 70%;
    margin: 0 auto;
  }
`;

const SearchForm = styled.div`
  width: 80%;
  height: 300px;
  margin: 50px auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  @media screen and (max-width: 768px){
    flex-basis: 80%;
    margin: 0 auto;
  }
`;
const Searchbar = styled.div`
  all: unset;
  height: 45px;
  width: 70%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  > input {
    flex-basis: 80%;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  > button {
    flex-basis: 30%;
    background-color: #98eecc;
    border-radius: 10px;
    @media screen and (max-width: 768px){
    flex-direction: column;
    }
  }
  > select {
    flex-basis: 80%;
  }

`;
const SearchLine = styled.div`
  margin: 40px auto;
  max-width: 1200px;
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
          margin-top: 5px;
          text-align: left;
          display: flex;
          flex-wrap: wrap;
          >svg{
            color: #98eecc;
          }
            img{ 
              display: block;
              max-width: 36px;
              height: 28px;
              flex-direction: column;
            }
            p{
              margin-top: 20px;
              font-size: 10px;
            }   
          }
        li:nth-last-child(1){
          margin-top: 20px;
          border: 1px solid #ddd;
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

function Msearchd() {
  const location = useLocation();
  const stateData = location.state;
  const [data, setData] = useState(dataList);
  const [searchTerm, setSearchTerm] = useState(stateData.userInput);
  const [searchKeyword, setSearchKeyword] = useState(stateData.userInput);
  const [Selected, setSelected] = useState(stateData.userInput);
//   const [Inputv, setInputv] = useState(stateData.userinput)
  // console.log(location.state.optiondonmSelect)
  console.log(location.state.userInput)

  
  const SbrsCl = ["전기","장작판매","물놀이장","놀이터","산책로","운동시설","무선인터넷","트렘폴린","마트.편의점","온수","운동장"]

  useEffect(() => {
    setSearchTerm(Selected);
    setSearchKeyword(Selected);
    console.log(searchTerm, searchKeyword)
        setData(
          dataList.filter(
            (e) =>
              e.facltNm.includes(searchTerm) ||
              e.addr1.includes(searchTerm) ||
              e.induty.includes(searchTerm) ||
              e.doNm.includes(searchTerm)
          ))
    }, []);
    

  const handleSearch = () => {
    setSearchKeyword(searchTerm);
    setData(
      data.filter(
        (e) =>
          e.facltNm.includes(searchTerm) ||
          e.addr1.includes(searchTerm) ||
          e.induty.includes(searchTerm) ||
          e.doNm.includes(searchTerm)
          // ||
          // e.donm.includes(donmValue) ||
          // e.sigunguNm.includes(donmValue)
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
        <Title>캠핑장찾기</Title>
        <Searchwrap>
          <SearchForm>
              <Searchbar>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchTerm}
                  onChange={
                  (e) => setSearchTerm(e.target.value)}
                />
              </Searchbar>
              <Searchbar>
                <select onChange={optionDonm} value={Selected}>
                  <option value="전체">전체</option>
                  {
                    Filterdonm.map((e, i) => {
                    return <option key={i}>{e}</option>;})
                  }
                </select>
                <select>
                  <option value="전체">전체</option>
                  {
                    FilterSigun.map((e, i) => {
                    return <option key={i}>{e}</option>;})
                  }
                </select>
              </Searchbar>
              <Searchbar>
                <button onClick={handleSearch}>검색하기</button>
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
                                          <div key={index}>
                                            <img src={`images/ico_${imgUrl[index]}.png`} alt="이미지파일" />
                                            <p>{el}</p> 
                                          </div>
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

export default Msearchd;

