import { addDoc, collection, deleteDoc, doc, getDoc, getFirestore, increment, getDocs, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import '../index.css'
import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Content = styled.div`
  width: 40%;
  height: 750px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 30px auto;
  position: relative;
  margin: 8px auto;
  align-items: center;
  img{
    width: 300px; 
    height: 300px; 
    display: block;
    margin: 0 auto;
    margin-top: 30px;
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
  @media screen and (max-width: 640px){
    width: 80%;
    height: 60%;
  }
  h3{
    font-size: 25px;
    text-align: center;
    padding-top: 30px;
    margin-bottom: 30px;
    position: relative;
  }
  p{
    position: absolute;
    top: 15px;
    left: -5px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #ddd;
    line-height: 50px;
    font-size: 1rem;
    color: #fff;
  }
  span{
    margin-left: 40%;
  }
`

const Ment = styled.div`
  width: 400px;
  display: flex;
  margin: 0 auto;
  ul{
    position: relative;
    width: 200px;
    >svg{
      position: absolute;
      left: -15px;
    }
  }
  @media screen and (max-width: 640px){
  width: 80%;
  height: 60%;
}
`

const Textarea = styled.textarea`
  max-width: 500px;
  height: 200px;
  position: absolute;
  left: 45%;
  top: 60%;
  transform: translateX(-55%);
  margin-top: 7px;
  margin-left: 10%;
  margin-right: 1%;
  padding-left: 4%;
  padding-top: 3%;
  border: 1px solid #eee;
  outline: none;
  resize: none;
  &:focus{
    border: 1px solid  #98eecc;
  }
  border-radius: 10px;
`

const ButtonItem = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 40px;
  bottom: 10px;
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

  const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const uid = sessionStorage.getItem("users")
  const [userUid, setUserUid] = useState(uid)
  const location = useLocation();
  const data = location.state;
  const [InputCnt, setInputCnt] = useState(0);
  const navigate = useNavigate();
  const maxLength = 150;

  //댓글 글자수 제한
  const InputText = (Comment, setComment) => {
    if (Comment.length > maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length - 1);
  };
  
  //댓글 작성
  const [inquiring, setInquiring] = useState([]); 
  const [Comment, setComment] = useState("");

  const addComment = async (postId) => {
    const firestore = getFirestore();
    
      if(Comment.length === 0){
        alert("댓글을 작성해주세요.")
        return(addComment);
      }else{
        alert("댓글이 작성되었습니다.")
      }
      
    try {
      const docRef = await addDoc(collection(firestore, "inquiring"), {
        uid: userState.uid,
        name: userState.data.name,
        content: Comment,
        postId: postId,
      });

      const commentData = {
        id: docRef.id,
        uid: userState.uid,
        name: userState.data.name,
        content: Comment,
        postId: postId,
      };
        
      setInquiring([...inquiring, commentData]);
        setComment("");
      } catch (error) {
        console.error("댓글 추가 에러:", error);
      }
    };
 
  return (
    <>
    <Title>문의하기</Title>
    <Content>
      <InputItem>
        <h3>
          <p>{data.ID}</p>{data.TITLE}
        </h3>
        <span>{data.PRICE}</span>
        <img src={data.IMG} alt='이미지'></img>
        <Textarea rows='3' cols='33' maxLength={maxLength} className='textarea' placeholder='문의사항을 남겨주세요.' value={Comment} onChange={(e)=>{setComment(e.target.value)}}></Textarea>
      </InputItem>
      <Ment>
        {
          inquiring.map((comment, commentIndex) => (
            <ul>
              <FontAwesomeIcon icon={faUser} />
              <li key={comment.id}>
                <span>{comment.name}: {comment.content}</span>
              </li>
            </ul>    
          ))
        }
      </Ment>
      <ButtonItem>
        <p>{Comment.length}/{maxLength}자</p>
        <Button onClick={() =>{addComment(uid)}}> 댓글달기</Button>
        <Button onClick={() => navigate(-1)}> 돌아가기</Button>
      </ButtonItem>
    </Content>
    </>
  )
}

export default Inquiry