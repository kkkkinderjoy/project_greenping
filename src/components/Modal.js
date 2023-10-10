import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faX } from '@fortawesome/free-solid-svg-icons';
import Logout from '../pages/Logout';




const ContentWrap = styled.div`
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

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 50px;
    border-radius: 12px;
    box-shadow: 0 0 10px #d7d7d7;
    position: relative;
    >svg
    {
      flex-basis: 100%;
      font-size: 100px;
      color:red;
    }
    >p{
      font-size: 16px;
      font-weight: bold;
      }
`

const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    background-color: #e9e9e9;
    border-radius: 50%;
    position: absolute;
    right: 5%;
    top: 5%;
    z-index: 20000;
    text-align: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
      >p{
        color: gray;
        opacity: 1;
        font-weight: 100;
        }  
`

const Button = styled.button`
  margin: 50px auto;
  width: 100px;
  padding: 15px;
  border: none;
  background-color: #87e7be;
  transition: 0.2s;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
`

function Modal({error,onClose}) {
  
  return (
    <>
    <ContentWrap>
        <Content>
          <FontAwesomeIcon icon={faTriangleExclamation}/>
            <CloseBtn  onClick={onClose}> 
              <FontAwesomeIcon icon={faX} />
            </CloseBtn>
          <p>{error}</p>
        </Content>
    </ContentWrap>
  
    </>
  )
}

export default Modal