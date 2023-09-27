import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandshakeAngle, faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Content = styled.div`
  padding: 100px;
  width: 100%;
  margin: 0 auto;
`
const ContentWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2%;
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h3`
  font-size: 35px;
  text-align: center;
  padding-bottom: 20px;
`
const ContentItem = styled.div`
  width: 100%;
  h3{font-size: 35px; text-align: start;}
  ul{
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
    li{
      width: 200px;
      height: 200px;
      background-color: #fff;
      border: 1px solid #d8ffd1;
      border-radius: 20px;
      text-align: center;
      cursor: pointer;
      position: relative;
      svg{
        color: #DDDDDD;
        font-size: 65px;
        padding-top: 50px;
        filter: drop-shadow(3px 3px rgba(127, 138, 140, 0.15));
      }
      p{
        text-align: end;
        padding: 10px 0;
        width: 198px;
        height: 47px;
        background-color: #24d181;
        position: absolute;
        bottom: 0;
        border-radius: 0 0 10px 10px;
        color: #fff;
        font-size: 25px;
        border-bottom: 17px;
        line-height: 30px;
        padding-right: 10px;
      }
    }
  }
`
const SvgBox = styled.div`
  background-color: #fff;
  width: 198px;
  height: 200px;
  border-radius: 20px;
`

function Market() {
  return (
    <>
    <Content>
      <ContentWrap>
        <ContentItem>
          <h3>그린마켓</h3>
          <ul>
            <li>
            <NavLink to='/sale'>
              <SvgBox>
                <FontAwesomeIcon icon={faCartShopping} />
              </SvgBox>
              <p>판매</p>
            </NavLink>
            </li>
            <li>
            <NavLink to='/buy'>
              <SvgBox>
                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                <p>구매</p>
              </SvgBox>
            </NavLink>
            </li>
            <li>
            <NavLink to='/assi'>
              <SvgBox>
                <FontAwesomeIcon icon={faHandshakeAngle} />
                <p>양도</p>
              </SvgBox>
            </NavLink>
            </li>
          </ul>
        </ContentItem>
      </ContentWrap>
    </Content>
    </>
  )
}

export default Market