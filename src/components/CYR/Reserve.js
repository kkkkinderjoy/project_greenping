import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {ko} from 'date-fns/esm/locale'
import {addDays, subDays} from 'date-fns'
import { useNavigate } from 'react-router-dom';


const ModalWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color:rgba(0, 0, 0, 0.2);
    display: flex;
    align-items:center;
    justify-content: center;
`
const ModalContent = styled.div`
    margin: 0 auto;
    width: 530px;
    height: 600px;
    background-color: #fff;
    padding: 30px;
    padding-left: 45px;
    border-radius: 12px;
    box-shadow: 0 0 10px #d7d7d7;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 8px;
    }
    &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 60px;
      }
    &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 100px;
}

   
    >img{
      margin: 80px auto;
      width: 130px;
      height: 130px;
    
    }
    >p{
      text-align: center;
      font-size: 20px;
      color: #000;
    }
`

const MCloseBtn = styled.button`
    width: 40px;
    height: 40px;
    background-color: #e9e9e9;
    border-radius: 50%;
    position: absolute;
    border: none;
    right: 5%;
    top: 5%;
    z-index: 20000;
    text-align: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
      >p{color: gray;
      opacity: 1;
      font-weight: 100;
      }
 
    
    
`

const Mwrap = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  p{
    margin-bottom: 10px;
  }
`
const StyleDate = styled(DatePicker)`
    display: flex;
    color: #666666;
    height: 100%;
    border: none;
    font-size: 1.2em;
    flex-basis: 40%;
    background: none;
`
const Personnel = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`

const Personnelbox =styled.div`
    display: flex;
    justify-content: space-between;
    flex-basis: 20%;
    align-items: center;
    button{
        width: 30px;
        border: none;
        border-radius: 10px;
    }
`
const Title = styled.div`
  padding: 10px 0;
  font-weight: bold;
  position: relative;

  &::after {
    content: "";
    width: 20px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: 0px; left: 0;
    border-radius: 2px;
  }
`;


const ReserBtn = styled.button`
    border: none;
    margin: 40px auto;
    width: 480px;
    height: 50px;
    margin-right: 40px;
    border-radius: 10px;
    background-color: #A6F4D0;
    cursor: pointer;
    


`

function Reserve({onClose}) {
  const [isModal, setIsModal] = useState(true);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [data, setData] = useState()
  const [adultcount, setAdultCount] = useState(1);
  const [childcount, setChildCount] = useState(1);

  const navigate = useNavigate()


  const PayBtn = () =>{
        alert("결제가 완료되었습니다")
        navigate(-1)

    
  }

  return (
    <>
    
    {
      isModal &&
    
    <ModalWrap>
        <ModalContent>
            <MCloseBtn  onClick={onClose}> 
              <p><FontAwesomeIcon icon={faX} /></p>
            </MCloseBtn>
            <Mwrap>
                <Title>날짜선택</Title>
                <StyleDate
                locale={ko}
                selected={startDate}
                selectsRange={true}
                startDate={startDate} 
                endDate={endDate} 
                onChange={(date)=>setDateRange(date)} 
                dateFormat="MM월 dd일"
                placeholderText="날짜를 입력하세요"
                minDate={subDays(new Date(), 0)}
                maxDate={addDays(new Date(), 300)}
                monthsShown={2} 
                inline/>
            </Mwrap>
            <Mwrap>
                <Title>인원선택</Title>
                <Personnel>
                    <input type="checkbox" name="test" value="1" />성인
                    <Personnelbox>
                        <button onClick={()=>{setAdultCount(adultcount-1)}}>-</button>
                        <p>{adultcount}</p>
                        <button onClick={()=>{setAdultCount(adultcount+1)}}>+</button>
                    </Personnelbox>
                    <input type="checkbox" name="test" value="2" />아동
                    <Personnelbox>
                        <button onClick={()=>{setChildCount(childcount-1)}}>-</button>
                        <p>{childcount}</p>
                        <button onClick={()=>{setChildCount(childcount+1)}}>+</button>
                    </Personnelbox>
                </Personnel>
            </Mwrap>
            <Mwrap>
                <Title>방 선택</Title>
                <Personnel>
                  <input type="radio" name="test" value="1" />방1
                  <input type="radio" name="test" value="2" />방2
                  <input type="radio" name="test" value="3" />방3
                  <input type="radio" name="test" value="4" />방4
                </Personnel>
            </Mwrap>
            <Mwrap>
            <ReserBtn onClick={PayBtn()}>결제하기</ReserBtn>
            </Mwrap>
        </ModalContent>
    </ModalWrap>
    }
    </>
  )
}

export default Reserve
