import React, { useEffect, useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 496px;
  background: url('/images/main-banner.jpg');
  background-size: cover;
`
const SearchContent = styled.div`
  max-width: 1200px;
  height: 70px;
  margin: 0 auto ;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  >input{
    flex-basis: 30%;
    height: 100%;
    font-size: 1.2em;
    background: none;
  }
  
`
const StyleDate = styled(DatePicker)`
    color: #666666;
    height: 100%;
    border: none;
    font-size: 1.2em;
    flex-basis: 40%;
    background: none;
`
const NavLinkWrap = styled.div`
  background-color: #98eecc;
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  font-size: 18px;
  right: 0;
  flex-basis: 20%;
  height: 80%;
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
  height: 100%;
`
const Select = styled.select`
  font-size: 24px;
  font-weight: bold;
  border: none;
  color: #666666;
  flex-basis: 8%;
  background: none;
  select:required:invalid{
    color: #909090;
  }
  option{color: #ddd;}
  option[value=""][disabled] {
  display:none
  }
`
// const Mwrap = styled.div`
//   z-index: 50; background-color: #fff; 
//   padding-top: 5px; width: 100%; height: 300px;
//   position: fixed; top: 0; display: flex; justify-content: space-around;
// `
// const Mwrapper = styled.div`
//    width: 70%; height:40px;
//    display: flex; justify-content: space-between; flex-wrap: nowrap; border-radius: 10px;
//    align-items: center;
// `
// const MinputBox = styled.div`
//   flex-basis: 3/4; 
//   border: 1px solid #ddd; height: 100%;
//   border-radius: 5px;
//   >input{
//     border: none;
//     height: 100%;
//   }
// `
// const MbuttonBox = styled.div`
//   flex-basis: 1/4;
//   border: 1px solid #ddd; height: 100%;
//   border-radius: 5px;
//   >button{
//     border: 1px solid #ddd;
//     background-color: #98eecc;
//     color: #fff;
//     font-weight: bold;
//     border-radius: 5px;
//     font-size: 25px;
//     right: 0; width: 100%; height: 80%;
//   }
// `

// ${scrollPosition > 500 ? "block" : "hidden"}`}
function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [alldonm, setAllDonm] = useState([]);
  const [donm, setDonm] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0);
  const [optiondonmSelect, setOptionDonmSelect] = useState("");
  const [userinput, setUserInput] = useState("");

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    
    useEffect(() => {
            window.addEventListener("scroll", updateScroll);
        }, []);
  
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
      }
    
    const InputValue = (e) =>{
      const ValueI = e.target.value
      setUserInput(ValueI)
    }
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
      {/* 유리써치 시작*/}
        <Wrapper>
          <SearchContent>
            <Select  onChange={optionDonm}>
              <option value="" disabled selected>어디로 떠나볼까요</option>
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
              dateFormat="MM월 dd일"
              placeholderText="날짜를 입력하세요"
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 300)}
              monthsShown={2} />
            <Input type='text' placeholder='검색어를 입력하세요' onChange={InputValue} />
            <NavLinkWrap>
              <NavLink to={{
                pathname:'/searchd',
              }} state={{optiondonmSelect: optiondonmSelect, userinput: userinput}}>
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
