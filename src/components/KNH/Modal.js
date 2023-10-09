import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';


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
    margin: 0 auto;
    width: 530px;
    height: 600px;
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 0 10px #d7d7d7;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 12px;
    }
    &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 60px;
      }
    &::-webkit-scrollbar-thumb {
    background-color: #A6F4D0;
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

const CloseBtn = styled.button`
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


function Modal() {
  const [error, setError] = useState("");
  const [isModal, setIsModal] = useState(false);
  return (
    <ContentWrap>
        <Content>
            <CloseBtn>
              <p><FontAwesomeIcon onClose={()=>setIsModal(false)} icon={faX} /></p>
            </CloseBtn>
            
            <p>{error}</p>
            
        </Content>
    </ContentWrap>
  )
}

export default Modal