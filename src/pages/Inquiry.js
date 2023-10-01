import styled from 'styled-components';
import '../index.css'
import { useState } from 'react';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TextContent = styled.div`
    width: 100%;
    margin: 0 auto;
    img{
    width: 300px; 
    height:300px; 
    display: block; margin: 0 auto; margin-bottom: 24px;
    }
`
const Title = styled.div`
    margin: 30px 130px;
    font-size: 30px;
    position: relative;
    &::after {
    content: '';
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -5px;
    left: 0;
    border-radius: 2px;
  }
`
const InputWrap = styled.div`
    max-width: 1200px;
    height: 600px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 0 auto;
    margin-bottom: 30px;
`
const InputItem = styled.div`
    width: 800px;
    align-items: center;
    margin: 0 auto;
    position: relative;
    h3{
        font-size: 20px;
        text-align: center;
        padding: 20px;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`
const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 90px;
    height: 30px;
    background-color: #70e6b7;
    color: white;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0 10px;
    font-size: 13px;
    cursor: pointer;
`

function Inquiry() {

    const [comment, setComment] = useState("");
    const location = useLocation()
    const data = location.state;
    
  return (
    <>
    <TextContent>
        <Title>문의하기</Title>
        <InputWrap>
            <InputItem>
                <h3>{data.TITLE}</h3>
                <img src={data.IMG} alt='이미지'></img>
                <Text>
                <textarea className='textarea' placeholder='댓글을 입력해주세요.' value={comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
                </Text>
                <Button onClick={()=>{}}>댓글달기</Button>
            </InputItem>
        </InputWrap>
    </TextContent>
    </>
  )
}

export default Inquiry