import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import Reserve from '../components/CYR/Reserve'


const Dwrap = styled.div`
    width: 80%; border: 1px solid #ddd;
    margin: 20px auto;
    >h2{
        text-align: center;
        margin: 20px 0; font-weight: bold;
    }
`
const Dwrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    img{
        width: 60%;
        border: 5px solid #ddd;
        margin: 20px;
        display: inline-block;
    }
`
const Imgdesc = styled.div`
    margin: 20px auto;
    border-top: 10px solid #98eecc;
    vertical-align: middle;
    >p{
        margin-top: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ddd;
    }
    >a{
        margin-top: 10px;
        &:hover{
            border-bottom: #ddd;
        }
    }
`
const Dbutton = styled.button`
    border: 1px solid #98eecc;
    width: 100%;
    margin: 50px auto;
    height: 40px;
    border-radius: 5px;
    &.on{
        background-color: #fff;
        color: #98eecc;
        font-weight: 900;
        border: none;
    }
`

const Ddesc = styled.div`
    width: 80%;
    height: 400px;
    align-items: center;
    margin: 0 auto;
    display: flex; justify-content: space-between;
    >svg{
        margin-left: 20px;
        color: #98eecc;
    }
    >p{
        margin-left: 50px;
        line-height: 50px;
    }
`
const SearchLine = styled.div`
  margin: 40px auto;
  width: 90%;
  border: 1px solid #ddd;
`
function Descpage() {
    const location = useLocation()
    const sdata = location.state.e;
    const {facltNm, firstImageUrl, addr1, lctCl, facltDivNm, induty, operDeCl, posblFcltyCl, homepage, intro} = sdata
    const [isActive, setIsActive] = useState(false);
    const [isModal, setIsModal] = useState(false);

return(
    <>
        {
             isModal && <Reserve onClose={()=>{setIsModal(false)}}/>
        }
        <Dwrap>
            <h2>{facltNm}</h2>
            <Dwrapper>
                {
                    sdata.firstImageUrl === "" ? <img src='https://www.placeholder.com/100x100' alt='img' /> : 
                    <img src={firstImageUrl} alt={facltNm} title={facltNm} /> 
                }
                <Imgdesc>
                    <p>주소 : {addr1}</p>
                    <p>캠핑장 환경 : {lctCl} / {facltDivNm}</p>
                    <p>캠핑장 유형 : {induty}</p>
                    <p>운영기간 : {induty}</p>
                    <p>운영일 : {operDeCl}</p>
                    <p>주변이용가능시설 : {posblFcltyCl}</p>
                    <NavLink to={homepage} target='_blank'>
                        {
                            homepage !== "" && <p>홈페이지 : {homepage}</p> 
                        }
                    </NavLink>
                    <Dbutton className={isActive === true ? "on" : ""} onClick={()=>{setIsActive(true); 
                        setIsModal(true);}}> 예약하기</Dbutton>
                </Imgdesc>
            </Dwrapper>
            <SearchLine />
            <Ddesc>
                {
                    intro !== "" 
                    && 
                    <>
                        <FontAwesomeIcon icon={faCircleRight} />
                        <p>{intro}</p>
                    </>
                }
            </Ddesc>
        </Dwrap>
    </>
  )
}

export default Descpage