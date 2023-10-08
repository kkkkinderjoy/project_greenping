import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Comment = styled.ul`
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

  display: flex;
  align-items: center;
  color: #777777;
  margin-left: 10px;
  padding-bottom: 7px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
  font-size: 0.9em;
  position: relative;
  >p{
    margin-left: 18px;
    &:nth-child(1){
      color: black;
      font-weight: bold;
      font-size: 0.9em;
    }

    
  }
  >p:nth-child(2){
        position: relative;
        font-size: 0.8em;
    &::after{
      content: "";
      position: absolute;
      width: 1px;
      height: 90%;
      background-color: #e6e6e6;
      left: -13%;
      top: 1%;
    }
  }
  button{
    position: absolute;
    right: 2%;
    bottom: 30%;
  }

`

const Message = styled.p`
    font-size: 0.9em;
    color: #333;
    margin-bottom: 20px;
`

function Comments() {


    // 댓글

    const navigate = useNavigate()
    const [newComment, setNewComment] = useState("");
    const [savedComments, setSavedComments] = useState([]);
    const uid = sessionStorage.getItem("users")
    const userState = useSelector((state) => state.user);


    useEffect(() => {
  
      const savedCommentsFromLocalStorage = localStorage.getItem('savedComments');
      if (savedCommentsFromLocalStorage) {
        setSavedComments(JSON.parse(savedCommentsFromLocalStorage));
      }
    }, []);
  useEffect(() => {
    localStorage.setItem('savedComment', newComment);
  }, [newComment]);
 




  const CommentSubmit = () => {
    if (newComment.trim() !== '') {
      const updatedComments = [...savedComments, newComment];
      setSavedComments(updatedComments);
      localStorage.setItem('savedComments', JSON.stringify(updatedComments));
      setNewComment('');
    }
  };
    
 

    const CommentDel = (index) => {
  
      const updatedComments = [...savedComments];
      updatedComments.splice(index, 1);
      setSavedComments(updatedComments);
    
      localStorage.setItem('savedComments', JSON.stringify(updatedComments));
    };

  return (
    <>

        <Comment>
            <h3>댓글</h3>      
                { uid ?
                  
                    <>
                      {savedComments.map((comment, index) => (
                        <UpComments>
                              <p>{userState.name}</p>
                              <p key={index}>{comment}</p>  
                              <button onClick={CommentDel}>
                              <FontAwesomeIcon icon={faX}/>
                            </button>
              
                            </UpComments>
                          ))}
                          
                      </>
                :
                <Message>로그인 후 리뷰를 감상할 수 있습니다</Message>
                
                }
              </Comment>
              {uid ? (
              <ConWrap>
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        if (e.isComposing) return 
                        CommentSubmit();
                      }
                    }}
                    placeholder="댓글을 남겨보세요!"
                  />
                  <CommentBtn onClick={CommentSubmit}>등록</CommentBtn>
              </ConWrap>
      ) : (
        <Div onClick={()=>{navigate('/login')}}>로그인하면 지금 당장 그린퍼들과 대화할 수 있어요!</Div>
      )}
    </>
  )
}

export default Comments