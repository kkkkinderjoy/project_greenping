import React, { useEffect, useRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping, faHandshakeAngle, faMagnifyingGlass, faMoneyCheckDollar} from '@fortawesome/free-solid-svg-icons'
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink, useLocation } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 300px;
`
const SearchContent = styled.div`
  max-width: 1280px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  border-radius: 5px;
  align-items: center;
  >input{
    flex-basis: 40%;
    height: 100%;
  }
  @media screen {
    
  }
`
const StyleDate = styled(DatePicker)`
    width: 250px;
    color: black;
    height: 100%;
`
const NavLinkWrap = styled.div`
  background-color: #98eecc;
  color: #fff;
  font-weight: bold;
  border-radius: 0 10px 10px 0;
  font-size: 18px;
  right: 0;
  flex-basis: 20%;
  height: 100%;
  a{
    display: flex;
    height: 100%;
    align-items: center;
    p{
      width: 100%;
      font-size: 30px;
      margin: 10px auto;
      text-align: center;
      font-weight: 800;
      color: #fff;
    }
  }
`

const Input = styled.input`
  border: none;
  right: 30%;
`

const Select = styled.select`
  font-size: 24px;
  font-weight: bold;
`
const Mwrap = styled.div`
  z-index: 50; background-color: #fff; 
  padding-top: 5px; width: 100%; height: 300px;
  position: fixed; top: 0; display: flex; justify-content: space-around;
`
const Mwrapper = styled.div`
   width: 70%; height:40px;
   display: flex; justify-content: space-between; flex-wrap: nowrap; border-radius: 10px;
   align-items: center;
`
const MinputBox = styled.div`
  flex-basis: 3/4; 
  border: 1px solid #ddd; height: 100%;
  border-radius: 5px;
  >input{
    border: none;
    height: 100%;
  }
`
const MbuttonBox = styled.div`
  flex-basis: 1/4;
  border: 1px solid #ddd; height: 100%;
  border-radius: 5px;
  >button{
    border: 1px solid #ddd;
    background-color: #98eecc;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    font-size: 25px;
    right: 0; width: 100%; height: 100%;
  }
`
// ${scrollPosition > 500 ? "block" : "hidden"}`}
function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [alldonm, setAllDonm] = useState([]);
  const [donm, setDonm] = useState("")
  const [ischoice, setIsChoice] = useState([null,null]);
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [page, setPage] = useState(1);
  const [Selected, setSelected] = useState("");
  const [userInput, setUserInput] = useState('');
  const [optiondonmSelect, setOptionDonmSelect] = useState("");

  // const getValue = (e) => {
  //   setUserInput(e.target.value)};


    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    
        useEffect(() => {
            window.addEventListener("scroll", updateScroll);
        }, []);
    const searched = alldonm.filter((item) =>

      item.facltNm.includes(userInput)
    );



    
        useEffect(()=>{
      fetch("https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json")
      .then((res) =>{return res.json()})
      .then((data)=> {
        setDonm(data.response.body.items.item)
        setAllDonm(data.response.body.items.item);
      }); 
    },[]);
    
    const optionDonm = (e) =>{
        const donmValue = e.target.value
        setOptionDonmSelect(donmValue);
        
        if(donmValue !== '전체'){
            setIsChoice([1,0])
        }else{
          setIsChoice([0,0])
        } 
        setUserInput(e.target.value)
      }
    
      //   const FilterData = donm && donm.filter(e =>{
      //   return donm === "전체" || donm === e.doNm
      //  })
       const Filterdonm = [...new Set(alldonm && alldonm.map(e=>e.doNm).sort())];
  return (
    <>
      
      {/* 모바일 써치+버튼 시작 */}
        {/* <Mwrap className={scrollPosition > 500 ? ".on" : ""}>
          <Mwrapper>
            <MinputBox className='basis-3/4 border h-full rounded'>
              <input type="text" placeholder='검색어를 입력하세요'/>
            </MinputBox>
            <div>
              <button>
                <NavLink to='/sdetail'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
              </button>
            </div>
          </Mwrapper>
        </Mwrap> */}
      {/* 모바일 써치+버튼 끝 */}               
      {/* 유리써치 */}
        <Wrapper>
          <SearchContent>
            <Select  onChange={optionDonm}>
              <option value="전체">전체</option>
                {
                   Filterdonm.map((e,i) =>{
                    return(
                      <option key={i}>{e}</option>)
                  })
                }
            </Select>
            <StyleDate
              locale={ko}
              selectsRange={true}
              startDate={startDate} 
              endDate={endDate} 
              onChange={(date)=>setDateRange(date)} 
              dateFormat="yyyy년 MM월 dd"

              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 300)}
              monthsShown={2} />
            <Input type='text' placeholder='검색어를 입력하세요' onChange={optionDonm} />
            <NavLinkWrap>
              <NavLink to='/searchd'>
                {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                <p>검색하기</p>
              </NavLink>
            </NavLinkWrap>
          </SearchContent>
        </Wrapper>
        {/* 유리써치 끝*/}
      
    </>
  )
  }

export default Search