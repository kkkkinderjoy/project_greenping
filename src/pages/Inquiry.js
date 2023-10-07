import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, increment, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import '../index.css'
import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { comment } from 'postcss';

const Content = styled.div`
  width: 700px;
  height: 650px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 30px auto;
  position: relative;
  img{
    width: 300px; 
    height: 300px; 
    display: block;
    margin: 0 auto;
  }
  @media screen and (max-width: 640px){
    width: 80%;
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
  top: -15px;
  left: 0;
  border-radius: 2px;
  }
`

const InputItem = styled.div`
  width: 400px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 640px){
    width: 80%;
    height: 60%;
  }
  h3{
    font-size: 20px;
    text-align: center;
    padding: 30px 5px;
    position: relative;
  }
  p{
    position: absolute;
    top: 15px;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ddd;
    line-height: 50px;
    font-size: 1rem;
    color: #fff;
  }
`
const ButtonItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 40px;
  bottom: 25px;
  right: 13.5%;
  p{font-size: 13px; margin-top: 5px;}
`
const Button = styled.button`
  height: 30px;
  width: 80px;
  background-color: #70e6b7;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0 10px;
  font-size: 13px;
  cursor: pointer;
  &:nth-child(3){
    background-color: #ddd;
  }
`

function Inquiry() {

  const userState = useSelector(state => state.user)
  const location = useLocation();
  const data = location.state;
  const uid = sessionStorage.getItem("users");
  const [userUid, setUserUid] = useState(uid)
  const [post, setPost] = useState();
  const [Comment, setComment] = useState("");
  const [Comments, setComments] = useState("");
  const [InputCnt, setInputCnt] = useState(0);
  const navigate = useNavigate();
  const maxLength = 150;

  //댓글 글자수 제한
  const InputText = (Comment, setComment) => {
    if (Comment.length > maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length);
  };
  
  //댓글 작성
  const addComment = () =>{
    if(Comment.length === 0){
      alert("댓글을 작성해주세요.")
    }else{
      alert("댓글이 작성되었습니다.")
    }
    const postRef = doc(collection(getFirestore(), "users"), uid);
    const commentRef = collection(postRef, "comments");
    addDoc(commentRef, {
      text: Comment,
      name: userState&&userState.data.name,
      timestamp: serverTimestamp()
      })
    }
    
  return (
    <>
    <Title>문의하기</Title>
    <Content>
      <InputItem>
        <h3><p>{data.ID}</p>{data.TITLE}</h3>
        <img src={data.IMG} alt='이미지'></img>
        <textarea rows='3' cols='33' maxLength={maxLength} className='textarea' placeholder='댓글을 입력해주세요.' value={Comment} onChange={(e)=>{setComment(e.target.value)}}></textarea>
      </InputItem>
      <ButtonItem>
        <p>{Comment.length}/{maxLength}자</p>
        <Button onClick={()=>{addComment(uid)}}> 댓글달기</Button>
        <Button onClick={() => navigate(-1)}> 돌아가기</Button>
      </ButtonItem>
    </Content>
    </>
  )
}

export default Inquiry