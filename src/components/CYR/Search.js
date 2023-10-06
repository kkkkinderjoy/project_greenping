import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { addDays, subDays } from "date-fns";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 496px;
  background: url("/images/main-banner.jpg");
  background-size: cover;
  > p {
    width: 100%;
    height: 100px;
    background-color: #fff;
    opacity: 1;
    display: none;
    &.active {
      display: block;
      position: fixed;
      top: 0;
      z-index: 9000;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 20px;
    }
  }
`;

const ContentWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  /* position: relative;
  top: 80%;
  left: 32%; */
  transform: translateY(530%);
  &.on {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 5%;
    left: 50%;
    width: 100%;
    z-index: 10000;
  }
`;

const Inner = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
  &.on {
    border-bottom: 1px solid #eee;
  }
`;

const Select = styled.select`
  width: 18%;
  padding: 2%;
  font-size: 1em;
  border: none;
  -webkit-appearance: none; //크롬 화살표 없애기
  appearance: none; //화살표 없애기
  -moz-appearance: none; //파이어폭스 화살표 없애기
  text-align: center;
  select:required:invalid {
    color: red;
  }
  > option[value=""][disabled] {
    display: none;
  }
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`;

const Option = styled.option`
  font-size: 1em;
  border: none;
  text-align: center;
`;

const StyleDate = styled(DatePicker)`
  width: 250px;
  height: 65px;
  font-size: 1em;
  font-weight: bold;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  text-align: center;
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`;

const Input = styled.input`
  border: none;
  width: 30%;
  padding: 2%;
  font-size: 1em;
  font-weight: bold;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  text-align: center;
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`;

const NavLinkWrap = styled.div`
  background-color: #98eecc;
  font-weight: bold;
  border-radius: 100px;
  right: 0;
  flex-basis: 15%;
  height: 75%;
  a {
    display: flex;
    height: 100%;
    align-items: center;
    p {
      width: 100%;
      font-size: 1.7em;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }
`;

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

function Search() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [alldonm, setAllDonm] = useState([]);
  const [donm, setDonm] = useState("");
  const [userInput, setUserInput] = useState("");
  const [optiondonmSelect, setOptionDonmSelect] = useState("");
  //날짜 나오게 하기
  const dateNow = new Date();
  const today = `${dateNow.getMonth() + 1}월 ${dateNow.getDate()}일`;

  useEffect(() => {
    fetch(
      "https://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=project&serviceKey=hQ42F%2BSKq2L%2FUrlhNoGxv63elQn7W8CmL22xl6yXuGk%2BMz0zdU%2Frk2CIdCeX5%2BYPmg39K5QBYCeSgUyqtD7Qdg%3D%3D&_type=json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDonm(data.response.body.items.item);
        setAllDonm(data.response.body.items.item);
      });
  }, []);

  const optionDonm = (e) => {
    const donmValue = e.target.value;
    setOptionDonmSelect(donmValue);
  };

  const InputValue = (e) => {
    const ValueI = e.target.value;
    setUserInput(ValueI);
  };
  const Filterdonm = [...new Set(alldonm && alldonm.map((e) => e.doNm).sort())];

  //스크롤 이벤트

  const [ScrollY, setScrollY] = useState(0); // window 의 scrollY값을 저장
  const [ScrollActive, setScrollActive] = useState(false);
  function scrollFixed() {
    if (ScrollY > 600) {
      setScrollY(window.scrollY);
      setScrollActive(true);
    } else {
      setScrollY(window.scrollY);
      setScrollActive(false);
    }
  }

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", scrollFixed);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

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

      <Content>
        <p className={ScrollActive ? "active" : ""}></p>
        <ContentWrap className={ScrollActive ? "on" : ""}>
          <Inner className={ScrollActive ? "on" : ""}>
            <Select onChange={optionDonm} className={ScrollActive ? "on" : ""}>
              <option value="" disabled selected>
                어디로 떠나볼까요?
              </option>
              <Option value="전체">전체</Option>
              {Filterdonm.map((e, i) => {
                return <Option key={i}>{e}</Option>;
              })}
            </Select>
            <StyleDate
              locale={ko}
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(date, today) => {
                setDateRange(date);
              }}
              dateFormat="MM월 dd일"
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 300)}
              monthsShown={2}
              placeholderText={today} //데이트피커에서만 사용하는 placeholder 같은 기능
            />
            <Input
              type="text"
              placeholder="검색어를 입력하세요"
              onChange={InputValue}
            />
            <NavLinkWrap>
              <NavLink
                to={{
                  pathname: "/searchd",
                }}
                state={{
                  optiondonmSelect: optiondonmSelect,
                  userInput: userInput,
                }}
              >
                <p>검색하기</p>
              </NavLink>
            </NavLinkWrap>
          </Inner>
        </ContentWrap>
      </Content>
    </>
  );
}

export default Search;
