import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { addDays, subDays } from "date-fns";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCalendar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  margin: 5px auto 0;
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
  flex-basis: 100%;
  height: 75px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  /* border-radius: 100px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px; */
  /* @media screen and (max-width: 768px){
    flex-direction: column;
  } */
`;

const Select = styled.select`
  width: 18%;
  height: 75px;
  padding: 2%;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px 0 0 10px;
  border: none;
  border: 1px solid #ddd;
  -webkit-appearance: none; //크롬 화살표 없애기
  appearance: none; //화살표 없애기
  -moz-appearance: none; //파이어폭스 화살표 없애기
  text-align: center;
  select:required:invalid {
    color: red;
  }
  &option:disabled{
    color: #2ed090;
  }
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
  /* option{
    font-size: 1em;
    border: none;
    text-align: center
  } */
`;



const StyleDate = styled(DatePicker)`
  width: 100%;
  height: 75px;
  font-size: 1.2em;
  font-weight: bold;
  border: 0;
  color: #2ed090;
  appearance: none;
  -moz-appearance: none;
  text-align: center;
  border: 1px solid #ddd;
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`;

const Input = styled.input`
  border: none;
  width: 30%;
  line-height: 75px;
  font-size: 1.5em;
  font-weight: bold;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  text-align: center;
  border: 1px solid #ddd;
  &::placeholder{
    color: #ddd;
  }
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`;

const NavLinkWrap = styled.div`
  width: 30%;
  background-color: #98eecc;
  font-weight: bold;
  border-radius: 0 10px 10px 0;
  right: 0;
  flex-basis: 15%;
  height: 75px;
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
      <Content>
        <p className={ScrollActive ? "active" : ""}></p>
        <ContentWrap className={ScrollActive ? "on" : ""}>
          <Inner>
            <Select onChange={optionDonm} className={ScrollActive ? "on" : ""}>
              <option value="" disabled selected>
                어디로 떠나볼까요?
                <FontAwesomeIcon icon={faAngleDown} />
              </option>
              <option value="전체">전체</option>
              {Filterdonm.map((e, i) => {
                return <option key={i}>{e}</option>;
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
              // showIcon
              dateFormat={"MM월 dd일"}
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
                <p>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
              </NavLink>
            </NavLinkWrap>
          </Inner>
        </ContentWrap>
      </Content>
    </>
  );
}

export default Search;
