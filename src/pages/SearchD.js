import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhoneVolume, faUser } from "@fortawesome/free-solid-svg-icons";
import dataList from "./../data/Choicedata";



const Button = styled.button`
  color: white;
  position: absolute;
  right: 10%;
  
  margin: 20px 12px;
  background-color:  #98eecc;
  padding: 12px;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;


  svg {
    color: #fff;
  }
`;
const Wrap = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const ContentWrap = styled.div`
  max-width: 1280px;
  margin: 60px auto;
`;

// const Title = styled.div`
//   padding: 10px 20px;
//   font-weight: bold;
//   font-size: 2em;
//   position: relative;
//   margin-bottom: 10px;
//   &::after {
//     content: "";
//     width: 30px;
//     height: 5px;
//     margin-left: 0.5px;
//     background-color: #2ed090;
//     position: absolute;
//     top: -8px;
//     left: 18px;
//     border-radius: 2px;
//   }
// `;
const Title = styled.div`
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  @media screen and (max-width:768px){
      font-size: 1.5em;
  }
`
const Searchwrap = styled.div`
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
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
  flex-basis: 30%;
    }
  }
  > select {
    flex-basis: 40%;
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
              font-size: 10px;
              margin-top: 20px;
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

function SearchD() {
  const location = useLocation();
  const stateData = location.state;
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(stateData.optiondonmSelect === '' ? stateData.userinput : stateData.optiondonmSelect);
  const [searchKeyword, setSearchKeyword] = useState(stateData.optiondonmSelect === '' ? stateData.userinput : stateData.optiondonmSelect);
  const [Selected, setSelected] = useState(stateData.optiondonmSelect === '' ? stateData.userinput : stateData.optiondonmSelect);
  // const [Inputv, setInputv] = useState(stateData.userinput)
  // const [selectv, setselectv] = useState(stateData.optiondonmSelect)
  // console.log(location.state.optiondonmSelect)
  // console.log(location.state.userinput)
 

  const SbrsCl = ["전기","장작판매","물놀이장","놀이터","산책로","운동시설","무선인터넷","트렘폴린","마트.편의점","온수","운동장"]


  // useEffect(() => {
  //     setSearchTerm(Selected);
  //     setSelected(Selected);
  //     setSearchKeyword(Selected);
  //     console.log(searchTerm, searchKeyword)
  //   fetch(
  //     "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json"
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then( async (data) => {
  //       const result = await data.response.body.items.item
  //       setData(
  //         result.filter(
  //           (e) =>
  //             e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             e.addr1.includes(searchTerm) ||
  //             e.induty.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //             e.doNm.includes(searchTerm)
  //         )
  //         );
  //     });
  //   }, []);
  //API로 땡기는법
  useEffect(() => {
    setSearchTerm(Selected);
    setSelected(Selected);
    setSearchKeyword(Selected);
    console.log(searchTerm, searchKeyword)
    setData(
      dataList.filter(
        (e) =>
          e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.addr1.includes(searchTerm) ||
          e.induty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.doNm.includes(searchTerm)
      )
    );
  }, []);
 
  
  
  
  
  
  

   

  const handleSearch = () => {
    setSearchTerm(document.querySelector(".inputTxt").value); 
    setSearchKeyword(document.querySelector(".inputTxt").value)
    setData(
      data.filter(
        (e) =>
          e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.addr1.includes(searchTerm) ||
          e.induty.toLowerCase().includes(searchTerm.toLowerCase()) ||
          e.doNm.includes(searchTerm)
      ) 
    );
  };
  const optionDonm = (e) => {
    const donmValue = e.target.value;
    setSelected(donmValue)
  };

  const filteredData = data.filter((e) => {
    const matchesSearchTerm = e.facltNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.addr1.includes(searchTerm) ||
      e.induty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.doNm.includes(searchTerm);
    const matchesSelected = Selected === "전체" || Selected === e.doNm;
    
    // 필터링 조건: searchTerm와 Selected 값이 일치하는 경우
    return matchesSearchTerm && matchesSelected;
  });
  
  // useEffect(()=>{
  //     setSearchKeyword(stateData.optiondonmSelect)
  //    // setSearchKeyword(stateData.optiondonmSelect)
  //    setData(
  //      data.filter(
  //        (e) =>
  //          e.facltNm.toLowerCase().includes(Selected.toLowerCase()) ||
  //          e.addr1.includes(Selected) ||
  //          e.induty.toLowerCase().includes(Selected.toLowerCase()) ||
  //          e.doNm.includes(Selected)
  //      )
  //    );
  //  }
  //  FilterData();
  // },[])
  const Filterdonm = [...new Set(data && data.map((e) => e.doNm).sort())];
  const FilterSigun = [...new Set(data.filter((e) =>{
    return Selected === e.doNm
  }).map((e)=> e.sigunguNm))]
  // 필터를 돌려서 중복제거함
  // console.log(searchKeyword)
  return (
    <>
      <Wrap>
        <Title>캠핑장 찾기</Title>
        <ContentWrap>
          <Searchwrap>
            <SearchForm>
                <Searchbar>
                  <input
                    type="text"
                    defaultValue={location.state.userinput}
                    placeholder="검색어를 입력하세요"
                    className="inputTxt"
                  />
                </Searchbar>
                <Searchbar>
                  <select onChange={optionDonm} value={Selected}>
                    <option value="전체">전체</option>
                    {Filterdonm.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                  <select >
                    <option value="전체">전체</option>
                    {
                      FilterSigun.map((e, i) => {
                      return <option key={i}>{e}</option>;
                    })}
                  </select>
                </Searchbar>
                <Searchbar>
                  <button onClick={handleSearch}>검색하기</button>
                </Searchbar>
                {/* <Searchbar>
                  <ul>
                    {
                      data.map((e,i)=>{
                        return (
                          <li key={i}>#{e.themaEnvrnCl}</li>
                        )
                      })
                    }
                  </ul>
                </Searchbar> */}
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
                        <NavLink to={`desc/${e.contentId}`} state={{e}}>
                        {/* <NavLink to={{ pathname: `desc/${e.contentId}`, state: { e } }}> */}
                          <ul key={i}>
                            <li>
                              <img src={e.firstImageUrl} alt={e.title} />
                            </li>
                            <li>
                              <ul>
                                <li><FontAwesomeIcon icon={faUser}/> : {e.facltNm}</li>
                                <li><FontAwesomeIcon icon={faLocationDot}/> : {e.addr1}</li>
                                {
                                  e.tel !== "" && <li><FontAwesomeIcon icon={faPhoneVolume} /> : {e.tel}</li>
                                }
                                <li>
                                    {
                                      listArray.map((el,index)=>{
                                        return (
                                              <div key={index}>
                                                <img width="50" src={`images/ico_${imgUrl[index]}.png`} alt="" />
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
        </ContentWrap>
      </Wrap>
    </>
  );
}

export default SearchD;