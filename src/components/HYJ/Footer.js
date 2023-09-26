import React from 'react'
import pclogo from './../images/pc_logo.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FooterContent = styled.div`
  height: 250px;
  font-size: 13px;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #999999;
  @media (min-width: 768px) {
    height: 200px;
    font-size: 16px;
    padding: 4px 6px;
  }
`
const FooterWrap = styled.div`
 max-width: 1200px;
 margin: 0 auto;
 @media (min-width: 768px) {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
  }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 16px;
   
`

const LogoWrap = styled.div`
@media (min-width: 768px) {
      display: flex;
      align-items: center;
  }
`

const Logo = styled.img`
  width: 70px;
  height: 70px;
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    }
  
`

const LinksContainer = styled.div`
  position: relative;
  ul{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ddd;
    @media (min-width: 768px) {
    border-bottom: none;
    border-color: transparent;
    font-size: 15px;
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
@media (min-width: 768px) {
    text-align: left;
  }
`

const CustomerService = styled.div`
  display: none;
  ul{
    display: flex;
    @media (min-width: 768px) {
    display: block;
      }
      li{
        &:nth-child(1){
          font-weight: bold;
          font-size: 25px;
        }
      }
    }
  @media (min-width: 768px) {
    display: block;
    }
`;






function Footer(){
  return (
    <>
    <FooterContent>
      <FooterWrap>
        <Container>
          <LogoWrap>
          <NavLink to="/"><Logo src={pclogo} alt="logo" /></NavLink>

          </LogoWrap>
          <LinksContainer>
            <ul>
              <li><NavLink to="/">서비스 이용약관</NavLink></li>
              <li><NavLink to="/">개인정보 처리방침</NavLink></li>
              <li><NavLink to="/">제휴 신청</NavLink></li>
              <li><NavLink to="/">제휴 문의</NavLink></li>
            </ul>
            <CompanyInfo>
              <p><NavLink to="/">(주)그린핑</NavLink></p>
              <p><NavLink to="/">대표이사:ooo</NavLink></p>
              <p><NavLink to="/">사업자등록번호 : 504-85-25999</NavLink></p>
              <p><NavLink to="/">주소:대구광역시 중구 중앙대로 394, 제일빌딩 5F </NavLink></p>
              <p><NavLink to="/">전화:053-123-4567</NavLink></p>
            </CompanyInfo>
          </LinksContainer>
        </Container> 
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