import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addDoc, collection, doc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';



const ContentWrap = styled.ul`
  width: 80%;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 7px;
  >h3{
    font-size: 1em;
    padding-bottom: 6px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  >span{
    font-size: 0.7em;
  }

  button{
    background: none;
    border: none;

  }
  svg{
    color: coral;
    cursor: pointer;
  }
`

const ConWrap = styled.div`
  width:100%;
  height: 40px;
  margin: 8px auto;
  display: flex;
  align-items: center;

`

const Textarea = styled.textarea`
    width: 74%;
    margin-top: 7px;
    margin-left: 10%;
    margin-right: 1%;
    padding-left: 4%;
    padding-top: 1%;
    height: 2em;
    border: 1px solid #eee;
    outline: none;
    resize: none;
    &:focus{
      border: 1px solid  #98eecc;;
    }
    border-radius: 10px;
`

const Div = styled.div`
  width: 80%;
  margin: auto;
  padding: 0 2%;
  padding-top: 2%;
  height: 2em;
  border: none;
  font-size: 0.8em;
  color: #999;
  border: 1px solid #eee;
  border-radius: 10px;
`;


const CommentBtn = styled.li`
  width: 38px;
  height: 34%;
  padding: 10px 3px;
  font-size: 0.8em;
  text-align: center;
  margin-bottom: 3px;
  border: none;
  background-color: #444;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 8px;
`
const UpComments = styled.div`

    width: 100%;
    display: flex;


`

const Uploaded = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    >ul{
        width: 100%;
      >li{
        margin: auto;
        width: 80%;
        display: flex;
        padding: 8px;
        border-bottom: 1px solid #eee;
        justify-content: space-between;

      }
    }

`

const Message = styled.p`
    font-size: 0.9em;
    color: #333;
    margin-bottom: 20px;
`




function Comments() {

  const navigate = useNavigate()
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const userState = useSelector((state) => state.user);
  const uid = sessionStorage.getItem("users")
  // const {view} =useParams()

  //   const addComment = () =>{
  //     if(comment.length === 0){
  //       alert("댓글을 작성해주세요.")
  //     }else{
  //       alert("댓글이 작성되었습니다.")
  //     }
  //     const postRef = doc(collection(getFirestore(), "board"), view);
  //     const commentRef = collection(postRef, "comments");
  //         addDoc(commentRef, {
  //           text: comment,
  //           name: userState&&userState.data.name,
  //           uid: userState.uid,

  //       })
  //     }

      


  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() === '') {
      alert('댓글을 작성하세요.');
      return;
    }

    if (comment.length > 30) {
      alert('댓글은 30자 이내로 작성해주세요.');
      return;
    }

    setComments([...comments, comment]);
    setComment('');
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <>

        <ContentWrap>
            <h3>댓글</h3>      


                <Uploaded>
                    <ul>
                      {comments.map((comment, index) => (
                        <li key={index}>
                          {comment}
                          <button onClick={() => handleDeleteComment(index)}>
                            <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
                          </button>
                        </li>
                      ))}
                    </ul>
                 </Uploaded>

                  
              {uid ? (
                  <ConWrap>
                  
                    <UpComments>
                      <Textarea 
                              value={comment}
                              onChange={handleCommentChange}
                              placeholder="댓글을 남겨보세요!"
                      />
                      <CommentBtn onClick={handleAddComment}>등록</CommentBtn>
                    </UpComments>
                    
                  </ConWrap>
      ) : (
        <Div onClick={()=>{navigate('/login')}}>로그인하면 지금 당장 그린퍼들과 대화할 수 있어요!</Div>
      )}
      </ContentWrap>
    </>
  )
}

export default Comments