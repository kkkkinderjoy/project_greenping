import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FooterContent = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 10px 0;
  
  @media (min-width: 768px) {
    height: 220px;
    font-size: 1.1em;
  }
`
const FooterWrap = styled.div`
 max-width: 1200px;
 display: flex;
 justify-content:space-around;
 @media (min-width: 768px) { 
    margin: 50px auto;
    font-size: 0.9em;
    display: flex;
    justify-content: space-around;
  }
  >p{
    color: #ddd;
    
  }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    
`



const LinksContainer = styled.div`
  color: #999999;
  position: relative;
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
const ServiceInfo = styled.div`
 ul{
  margin-top: 30px 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
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
      right: -4%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #000;
    }
    }
  }
`
const line = styled.div`
  width: 80%;
  height: 1px;
  color: #000;
`

const CustomerService = styled.div`
  display: none;
  @media (min-width: 768px){
    display: block;}
  ul{
    display: flex;
    @media (min-width: 768px) {
    display: block; 
      li{
        line-height: 1.3;
        margin-bottom: 2px;
        &:nth-child(1){
          font-weight: bold;
          font-size: 1.3em;
        }
      
    }
  }

}
  
`;






function Footer(){
  return (
    <>
    <FooterContent>
      <FooterWrap>
        {/* <Container> */}
          <LinksContainer>
            <ServiceInfo>
              <ul>
                <li><NavLink to="/">서비스 이용약관</NavLink></li>
                <li><NavLink to="/">개인정보 처리방침</NavLink></li>
                <li><NavLink to="/">제휴 신청</NavLink></li>
                <li><NavLink to="/">제휴 문의</NavLink></li>
              </ul>
            </ServiceInfo>
            <line />  
            <CompanyInfo>
              <p>(주)그린핑</p>
              <p>대표이사 : ooo </p>
              <p>사업자등록번호 : 504-85-25999</p>
              <p>주소 : 대구광역시 중구 중앙대로 394, 제일빌딩 5F</p>
              <p>전화 : 053-123-4567</p>
            </CompanyInfo>
          </LinksContainer>
        {/* </Container>  */}
        <CustomerService>
                <ul>
                  <li><NavLink to="/">고객센터1500-6000</NavLink></li>
                  <li><NavLink to="/">평일 09:00 - 18:00</NavLink></li>
                  <li><NavLink to="/">점심시간 11:30 - 12:30</NavLink></li>
                </ul>
        </CustomerService>
        
      </FooterWrap>
    </FooterContent>
    
            
        
         
    </>
  )
}

export default Footer