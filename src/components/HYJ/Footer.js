import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

const FooterContent = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  @media (min-width: 768px) {
    height: 220px;
    font-size: 1.1em;
  }
`
const FooterWrap = styled.div`
  max-width: 1280px; 
  margin: 0 auto;  
 @media (min-width: 768px) { 
    font-size: 0.9em;
    /* display: flex;
    justify-content: space-around; */
  }
  /* >p{
    color: #ddd;
    
  } */
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ddd;
`
const LogoForm = styled.div`
margin-top: 20px;
  h3{
    img{
      filter: grayscale(100%);
    }
  }

`
const ServiceWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`
const ServiceInfo = styled.div`
  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0;

    li{
      font-size: 1em;
      font-weight: 500;
      position: relative;
      a{
        color: #595959
      }
      &:not(:nth-last-child(1))::before{
        content: "";
        position: absolute;
        width: 1px;
        height: 14px;
        right: -7%;
        top: 50%;
        transform: translateY(-50%);
        background-color: #000;
      }
      @media screen and(min-width: 768px){ 
        width: 100%;
      
      }
    }
  }
  
`

const LinksContainer = styled.div`
  color: #999999;
  height: 100%;
  ul{
    display: flex;
    justify-content: center;
    @media (min-width: 768px) {
      font-size: 1em;
    }
    li{
    &:nth-child(2){margin-left:8px;}  
    &:nth-child(3){margin-left:8px;}  
    &:nth-child(4){margin-left:8px;}  
    }
  }
`
const CompanyInfo = styled.div`
  text-align: center;
  height: 100%;
  margin-bottom: 20px;
  p{
    line-height: 1.5em;
    &:nth-child(1){
      margin-top: 20px;
    }
  }
@media (min-width: 768px) {
    text-align: left;
    border-color: transparent;
  }
`




const CustomerService = styled.div`
  display: none;
  margin-top: 20px;
  ul{
    display: flex;
    justify-content: end;
    @media (min-width: 768px) {
    display: block; 
      li{
        line-height: 1.3em;
        margin-bottom: 2px;
        font-size: 14px;
        a{
          color: gray;
        }
        h2{
          color: #000;
        }
        svg{
          color: #000;
        }
        h3{
          color: #000;
        }
        }
      }
    }
    @media (min-width: 768px){
    display: block;}
`;

function Footer(){
  return (
    <>
    <FooterContent>
      <FooterWrap>
        <ServiceWrap>
          <ServiceInfo>
            <ul>
              <li><NavLink to="/">서비스 이용약관</NavLink></li>
              <li><NavLink to="/">개인정보 처리방침</NavLink></li>
              <li><NavLink to="/">제휴 신청</NavLink></li>
              <li><NavLink to="/">제휴 문의</NavLink></li>
            </ul>
          </ServiceInfo>
        </ServiceWrap>
        <Container>
          <LogoForm>
            <h3>
              <img src="images/logo.png" alt="logo"/>
            </h3>
          </LogoForm>
          <LinksContainer>
            <CompanyInfo>
              <p>(주)그린핑</p>
              <p>대표이사 : ooo </p>
              <p>사업자등록번호 : 504-85-25999</p>
              <p>주소 : 대구광역시 중구 중앙대로 394, 제일빌딩 5F</p>
              <p>전화 : 053-123-4567</p>
            </CompanyInfo>
          </LinksContainer>
          <CustomerService>
            <ul>
              <li>
                <h2>
                  <FontAwesomeIcon icon={faHeadphones} />
                  고객센터
                </h2>
              </li>
              <li><NavLink to="/">1588-9780</NavLink></li>
              <li><h3>영업시간</h3></li>
              <li><NavLink to="/">평일 09:00 - 18:00</NavLink></li>
              <li><NavLink to="/">점심시간 11:30 - 12:30</NavLink></li>
            </ul>
          </CustomerService>  
        </Container>  
      </FooterWrap>
    </FooterContent>   
    </>
  )
}

export default Footer