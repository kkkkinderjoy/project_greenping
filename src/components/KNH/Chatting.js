import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, increment, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { comment } from 'postcss';
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
    width: 400px;
    height: 460px;
    padding-bottom: 40px;
    background-color: #fff;
    padding: 30px;
    padding-top: 40px;
    border-radius: 12px;
    box-shadow: 0 0 10px #d7d7d7;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 8px;
    }
    &::-webkit-scrollbar-track {
    background-color: #f7f7f7;
    border-radius: 60px;
      }
    &::-webkit-scrollbar-thumb {
    background-color: #A6F4D0;
    border-radius: 100px;
}

    >h3{
        margin-top: 10px;
        padding-bottom: 9px;
        margin-bottom: 30px;
        border-bottom: 1px solid #eee;
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



const ConWrap = styled.div`
  position: absolute;
  bottom: 20px;
  width:100%;
  margin: 8px auto;
`

const UpComments = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    color: #777777;
    margin: 0 auto;
    width: 90%;
    font-size: 0.9em;
    position: relative;
   


`

const Textarea = styled.textarea`
    width:70%;
    padding: 5px;
    margin-top: 10px;
    height: 30px;
    border: 1px solid #eee;
    outline: none;
    margin-right: 5px;
    resize: none;
    line-height: 30px;
    &:focus{
      border: 1px solid  #98eecc;;
    }
    border-radius: 10px;
`



const CommentBtn = styled.div`
width: 17%;
  height: 100%;
line-height: 40px;
  font-size: 1.1em;
  text-align: center;
  margin-bottom: 3px;
  background-color: #444;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 15px;
`

const ShowArea = styled.ul`
    margin: 0 auto;
    width: 90%;


`

const ShowCon = styled.li`
    margin-bottom: 10px;
    padding-bottom: 6px;
    justify-content: space-between;
    display: flex;
    >span{
        display: flex;
        align-items: center;
        >p{
            &:nth-child(1){
                padding-right: 10px;
            }
        }
        
    }
    >p{
        color: coral;
        cursor: pointer;
    }
    
`


const UserBtn = styled.button`
  padding: 10px 10px;
  background-color: #fff;
  color: #555555;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  &:nth-child(1){
    position: relative;
    &:hover{
      font-weight: bold;
    }
    &::after{
        content: "";
        position: absolute;
        top: 12px;
        right: 0;
        width: 1px;
        height: 15px;
        background-color: #999999;
      }
  }
  
  &:nth-child(2):hover{
      color: coral;
      font-weight: bold;    

    }

`




function Chatting({onClose}) {


  const userState = useSelector((state) => state.user);

  const uid = sessionStorage.getItem("users")
  const location = useLocation();
  const data = location.state;
  const [InputCnt, setInputCnt] = useState(0);

  const maxLength = 30;

  const InputText = (Comment, setComment) => {
    if (Comment.length > maxLength) {
      setComment(Comment.slice(0, maxLength));
    }
    setInputCnt(Comment.length);
  };
  
  //댓글 작성
  const [comments, setComments] = useState([]); 
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
       const docRef = await addDoc(doc(collection(firestore, "comments")), {
        uid: userState.uid,
        name: userState.data.name,
        content: Comment,
      });

      const commentData = {
        id: docRef.id,
        uid: userState.uid,
        name: userState.data.name,
        content: Comment,
        postId: postId,
      };
        
      setComments([...comments, commentData]);
        setComment("");
      } catch (error) {
        console.error("댓글 추가 에러:", error);
      }
    };





    const deleteComment = async (uid) => {
        const firestore = getFirestore();
        const docRef = doc(firestore, "comments", uid);
      
        try {
          await deleteDoc(docRef);
          alert("삭제가 완료되었습니다");
         
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <ContentWrap>
            <Content>
                <CloseBtn onClick={onClose}>
                <p><FontAwesomeIcon  icon={faX} /></p>
                </CloseBtn>
                    <h3>댓글</h3>

                    {comments.map((comment) => (     
                        <ShowArea>
                            <ShowCon key={comment.id}>
                            <span>
                                <p>{comment.name}</p> 
                                <p>{comment.content}</p>
                                </span>
                                <p onClick={()=>deleteComment(comment.id)}>삭제</p>
                            </ShowCon>
                        </ShowArea>
                        ))}
            
            <ConWrap>
                  
                  <UpComments>
                    <Textarea value={Comment}  maxLength={maxLength} onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                  e.preventDefault();
                                  addComment(uid);
                              }
                            }}
                            placeholder= {"댓글을 작성하세요 !"}
                    />
                    <CommentBtn onClick={()=>{addComment(uid)}}>등록</CommentBtn>
                  </UpComments>
                  
                </ConWrap>

        </Content>
    </ContentWrap>
  )
}

export default Chatting