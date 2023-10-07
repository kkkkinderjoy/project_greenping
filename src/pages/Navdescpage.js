import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Modal from '../components/Modal'


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
    display: flex; justify-content: space-between;
    align-items: center;
    img{
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
    margin: 0 auto;
    align-items: center;
    line-height: 50px;
    display: flex; justify-content: space-between;
    >svg{
        margin-left: 20px;
        color: #98eecc;
    }
    >p{
        margin-left: 50px;
    }
`
const SearchLine = styled.div`
  margin: 40px auto;
  width: 90%;
  border: 1px solid #ddd;
`
function Navdescpage() {
    const location = useLocation()
    const data = location.state;
    const [isActive, setIsActive] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate("");
return(
    <>
        {
             isModal && <Modal onClose={()=>{setIsModal(false)}}/>
        }
        <Dwrap>
            <h2>{data.facltNm}</h2>
            <Dwrapper>
                {
                    data.firstImageUrl === "" ? <img src='https://via.placeholder.com/100x100' alt='img' /> 
                    : <img src={data.firstImageUrl} alt={data.facltNm} title={data.facltNm} /> 
                }
                
                <Imgdesc>
                    <p>주소 : {data.addr1}</p>
                    <p>캠핑장 환경 : {data.lctCl} / {data.facltDivNm}</p>
                    <p>캠핑장 유형 : {data.induty}</p>
                    <p>운영기간 : {data.induty}</p>
                    <p>운영일 : {data.operDeCl}</p>
                    <p>주변이용가능시설 : {data.posblFcltyCl}</p>
                    <NavLink to={data.homepage} target='_blank'>
                        {
                            data.homepage != "" && <p>홈페이지 : {data.homepage}</p> 
                        }
                    </NavLink>
                    <Dbutton className={isActive === true ? "on" : ""} onClick={()=>{setIsActive(true); setIsModal(true);}}> 예약하기</Dbutton>
                </Imgdesc>
            </Dwrapper>
            <SearchLine />
            <Ddesc>
                {
                    data.intro != "" 
                    && 
                        <>
                            <FontAwesomeIcon icon={faCircleRight} />
                            <p>{data.intro}</p>
                        </>
                }
            </Ddesc>

        </Dwrap>
    </>
  )
}

export default Navdescpage