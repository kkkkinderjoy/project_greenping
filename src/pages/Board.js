import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,deleteDoc,doc,getDoc,getDocs,
  getFirestore,onSnapshot,orderBy,query} from "firebase/firestore";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import TimeGap from "./../components/KNH/TimeGap.js"

const BorderWrapper = styled.div`
  width: 100%;
  
`

const  HeadWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

`
const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2em;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -8px;
    left: 18px;
    border-radius: 2px;
  }
`;

const ListWrap = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

`
const List = styled.ul`
  margin: 0 auto;
  flex-basis: 29%;
  margin-top: 27px;
  margin-bottom: 4px;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1rem;
  position: relative;
  list-style: none;
  position: relative;
  padding-bottom: 95px;
  img {
    width: 100%;
    max-height:400px; 
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 641px) and (max-width: 786px){
    flex-basis: 40%;


  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
`;

const ListItem = styled.li`
  padding: 5px 30px;
  flex-basis: 10%;

  &:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 0.9px solid #e5e5e5;
  }
  &:nth-child(2){
    position: absolute;
    top: 17px;
    right: 20px;
    color: #999999;
    font-size: 0.8em;
  }
  &:nth-child(3) {
    width: 93%;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 1.3em;
    font-weight: bold;
    padding-left: 30px;
    position: relative;
   

    &::after {
      content: "";
      width: 3px;
      height: 20px;
      margin-left: 0.5px;
      background-color: #98eecc;
      position: absolute;
      top: 5px;
      left: 17px;
      border-radius: 10px;
      z-index: -1;
    }
  }
  &:nth-child(4){
    padding-bottom: 10px;
    color: #555;
    
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  > img {
    display: flex;
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const HeartWrap = styled.div`
  position: absolute;
  bottom: 20px;
  right: 7%;
  margin-top: 30px;
  width: 25px;
  height: 25px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 3px gray;
  border-radius: 50%;
  display: flex; 
   justify-content: center; 
   align-items: center; 
`;

const Heart = styled.img`
  
  cursor:pointer ; 
  width:auto; 
  height:auto; 
  margin-top: 8px;
  max-width :100% ; 
  max-height :100% ; 
`;



const Button = styled.button`
  margin: 20px 12px;
  background-color:  #98eecc;
  padding: 20px;
  border-radius: 50%;
  font-size: 1.1em;
  line-height: 1.25rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  svg {
    color: #fff;
  }
`;

const UserBtnWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 31px;
  color: #999999;
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



const Comment = styled.ul`
  width: 80%;
  margin: auto;
  margin-top: 35px;
  margin-bottom: 7px;
  >h3{
    font-size: 0.9em;
    padding-bottom: 6px;
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
  justify-content: space-between;
`

const Textarea = styled.textarea`
    width: 74%;
    margin-left: 9%;
    padding-left: 4%;
    padding-top: 2%;
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


const CommentBtn = styled.button`
  width: 43px;
  height: 90%;
  margin-bottom: 3px;
  border: none;
  background-color: #333333;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 12px;
`


const TopContent = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`



function Board() {
  const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const uid = sessionStorage.getItem("users")
  const [likes, setLikes] = useState(Array(posts.length).fill(false));
  const toggleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(getFirestore(), "board"),
          orderBy("timestamp", "desc")
        );

        const snapShot = await getDocs(q);

        const postArray = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          isLiked: doc.data().likes
        }));
        
        setPosts(postArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  
    

   





  const deletePost = async (uid) => {
    const firestore = getFirestore();
    const docRef = doc(firestore, "board", uid);
  
    try {
      await deleteDoc(docRef);
      alert("삭제가 완료되었습니다");
     
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleDelete = (uid) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deletePost(uid).then(() => {
        const updatedPosts = posts.filter((post) => post.id !== uid);
        setPosts(updatedPosts);
        
      
      });
    }
};

  



  useEffect(() => {
    const fetchData = async () => {
      const postRef = collection(getFirestore(), "board");
      const postSnapShot = await getDoc(doc(postRef));
      const CurrentUser = postSnapShot._firestore._authCredentials.currentUser;
      console.log(postSnapShot);
      if (CurrentUser.uid) {
        setPost(CurrentUser.uid);
      } else {
      }
    };
    fetchData();
  }, []);




  // 댓글

  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState("");

  const addNewComment = async (postId) => {
    const firestore = getFirestore();
    
    try {
      const docRef = await addDoc(collection(firestore, "comments"), {
        uid: userState.uid,
        name: userState.data.name,
        content: newComment,
        postId: postId,
      });


        const commentData = {
          id: docRef.id,
          uid: userState.uid,
          name: userState.data.name,
          content: newComment,
          postId: postId,
        };
        
        setComments([...comments, commentData]);
        setNewComment("");
      } catch (error) {
        console.error("댓글 추가 에러:", error);
      }
    };



    
    const deleteCo = async (uid) => {
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
    <>
      <BorderWrapper>
        <HeadWrap>
          <Title>그린톡</Title>
          {userState.uid && (
            <Link to="/write">
              <Button>
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
          )}
        </HeadWrap>
        <ListWrap>

        {posts &&
          posts.map((e, i) => {
            return (
              <List key={i}>
                <ListItem>
                  <TopContent>
                  <Profile>
                    <img
                      src="https://via.placeholder.com/40x40"
                      alt="profile"
                      />
                    {e.name}
                  </Profile>
                  {uid && uid === e.uid && (
                    <UserBtnWrap>
                      <UserBtn onClick={() => {
                        navigate(`/edit`);
                      }}>
                        수정
                      </UserBtn> 
                      <UserBtn onClick={()=>handleDelete(e.id)}>삭제</UserBtn>
                    </UserBtnWrap>
                )}
                </TopContent>
                </ListItem>
                <ListItem><TimeGap timestamp={e.timestamp} /></ListItem>
                <ListItem>{e.title}</ListItem>
                <ListItem>
                  <div dangerouslySetInnerHTML={{ __html: e.content }} />{" "}
                </ListItem>

          <Comment>
            <h3>댓글</h3>
                {comments.map((comment, commentIndex) => (
                  
                  <li key={comment.id}>
                    <span>{comment.name}: {comment.content}</span>
                    {userState.uid === comment.uid && (
                      <button onClick={deleteCo}>
                        <FontAwesomeIcon icon={faTrash}/>
                      </button>
                    )}
                  </li>
                ))}
              </Comment>
              {uid ? (
              <ConWrap>
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글을 남겨보세요!"
                  />
                  <CommentBtn onClick={() => addNewComment(e.id)}>등록</CommentBtn>
              </ConWrap>
      ) : (
        <Div onClick={()=>{navigate('/login')}}>로그인 이후 이용해주세요</Div>
      )}
             
                <ListItem
                  onClick={() => {
                    toggleLike(i);
                  }}
                  >
                  <HeartWrap>
                    <Heart
                      src={
                        likes[i]
                        ? "images/heart_full.png"
                        : "images/heart-full.png"
                      }
                      alt="heart"
                      />
                  </HeartWrap>
                </ListItem>
              </List>
            );
          })}
        </ListWrap>
      </BorderWrapper>
    </>
  );
}

export default Board;
