
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import AnimatedNumber from 'animated-number-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faComment, faPeopleRobbery, faUsers } from '@fortawesome/free-solid-svg-icons';




const Container = styled.div`
    width: 100%;
    padding-bottom: 48px;
`
const ContainerWrap = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex; flex-wrap: wrap;
    padding: 0 2%;
`
const ContainerTitle = styled.div`
    width: 100%;
    margin-top: 3rem;
    text-align: center;
    margin-bottom: 1.25rem;
    position: relative;
`
const Title = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
const Desc = styled.p`
    font-size: 0.875rem;
    color: #a0a0a0;
`
const ContentGrid = styled.div`
    flex-basis: 100%;
    ul{
        display: flex; flex-wrap: wrap;
        justify-content: space-between;
        li{
            flex-basis: 100%;
            height: 14rem;
            border: 1px solid #2ed090;
            border-radius: 10px;
            color: #9ca3af;
            padding: 4rem 1.25rem 4rem 2rem;
            cursor: pointer;
            text-align: center;
            position: relative;
            transition: 0.3s;
            box-sizing: border-box;
            &:not(:nth-child(1)){
            margin-top: 2%;}
            @media screen and (min-width: 640px){
                flex-basis: 49%;
                &:not(:nth-child(1)){
                margin-top: 0%;
            }
            &:nth-child(1n+3){
                margin-top: 2%;
            }}
            @media screen and (min-width: 1024px){
                flex-basis: 24%;
                &:not(:nth-child(1)){
                margin-top: 0%;
            }}
            &:hover{
                background-color: #e5e7eb;
            }
            p:nth-child(1){font-weight: bold; font-size:1.5rem; margin-bottom:1.5rem; color:#000;}
            p:nth-child(2){color:#9ca3af; padding-bottom:2rem;}
            svg{position: absolute; color:#2ed090; font-size:2.5rem; right: 1rem; bottom: 0.5rem; padding-bottom:0.5rem}
        }}
`

function Company() {

    const [isView, setIsView] = useState(false);


    useEffect(()=>{
        const scrollEvent = ()=>{
            const rect = document.querySelector("#content").getBoundingClientRect();
            console.log(rect)
            if(rect.top-200 <= window.innerHeight && rect.bottom >= 0){
                //위치값이 실제 200보다 작다면
                setIsView(true);
            }
        }
        window.addEventListener("scroll", scrollEvent);
        scrollEvent();

        return()=>{
            window.removeEventListener("scroll", scrollEvent)
        }
    },[])
   const Txt = ["년", "명", "개", "건"]
    const data = [
        {
            "title" : "설립일",
            "number" : "2023",
            "desc" : "Date of Foundation",
            "icon" : faBuilding
        },
        {
            "title" : "직원수",
            "number" : "197",
            "desc" : "Number of Employees",
            "icon" : faUsers
        },
        {
            "title" : "등록 업체",
            "number" : "3714",
            "desc" : "Registered Business",
            "icon" : faComment
        },
        {
            "title" : "고객 예약",
            "number" : "12804",
            "desc" : "Number of Customer Reservations",
            "icon" : faPeopleRobbery
        },
    ]

  return (
    <>
        <Container>
            <ContainerWrap>
                <ContainerTitle>
                    <Title>회사 소개</Title>
                    <Desc>캠핑과 함께하는 그린라이프</Desc>
                </ContainerTitle>
                <ContentGrid>
                    <ul id='content'>
                        {
                             data.map((e,i)=>{
                                return(
                                    <li key={i}>
                                        <p>{e.title}</p>
                                        <span>
                                            {
                                                isView && 
                                                <AnimatedNumber 
                                                value={e.number} 
                                                duration={5000} 
                                                formatValue={(value)=> `${value.toFixed(0)}${Txt[i]}`}/>
                                            }
                                        </span>
                                        <p>{e.desc}</p>
                                        <FontAwesomeIcon icon={e.icon} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </ContentGrid>
            </ContainerWrap>
        </Container>
    </>
  )
}

export default Company
