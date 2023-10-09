import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,deleteDoc,doc,getDoc,getDocs,
  getFirestore,onSnapshot,orderBy,query} from "firebase/firestore";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPen, faRunning } from "@fortawesome/free-solid-svg-icons";
import TimeGap from "./../components/KNH/TimeGap.js"

const BorderWrapper = styled.div`
  max-width: 1280px;
  margin: 50px auto;
`;

const  HeadWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;


`
const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2em;
 
`;
const List = styled.ul`
  margin: 0 auto;
  width: 80%;
  margin-top: 27px;
  margin-bottom: 4px;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.25rem;
  position: relative;
  list-style: none;

  img {
    width: 100%;
    max-height:400px; 
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;


const ListItem = styled.li`
  padding: 5px 30px;
  flex-basis: 10%;
  position: relative;
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
    padding-right: 80px;
    padding-bottom: 50px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;

  > img {
    display: flex;
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
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
  padding: 10px 20px;
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



const TopContent = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`

const Nopost = styled.div`
  width: 60%;
  margin: 30px auto;
  height: 280px;
  border: 1px solid #eee;
  border-radius: 20px;
  text-align: center;
  >h3{
    margin-top: 80px;
    font-size: 4em;

  }
  >p{
    margin-top: 40px;
    color: #999999;
  }
`
const NoPtext = styled.div`
  margin-top: 50px;
  cursor: pointer;
  transition: 0.7s; 
  svg{
    margin-left: 8px;
     transition: 0.7s; 
  }
  &:hover{
    font-weight: bold;
    svg{
    transform: translateX(10px);
    }
  }
`

function Board() {
  const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const uid = sessionStorage.getItem("users")
  let hasPosts = false;
  const nav = useNavigate()

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
        
        console.log("삭제가 완료되었습니다.");
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



 

  return (

    <>
    {
    userState.uid && 
      <BorderWrapper>
        <HeadWrap>
          <Title>나의 활동</Title>
          {userState.uid && (
            <Link to="/write">
              <Button>
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
          )}
        </HeadWrap>

        {posts &&
            posts.map((e, i) => {
              if (uid === e.uid) {
                hasPosts = true; 
                return (
                  <>
                    <List key={i}>
                 
                          <ListItem>
                            <TopContent>
                              <Profile>
                                <img src="https://via.placeholder.com/50x50" alt="profile" />
                                {e.name}
                              </Profile>
                              <UserBtnWrap>
                                <UserBtn onClick={() => navigate(`/edit`)}>수정</UserBtn>
                                <UserBtn onClick={() => handleDelete(e.id)}>삭제</UserBtn>
                              </UserBtnWrap>
                            </TopContent>
                          </ListItem>
                          <ListItem><TimeGap timestamp={e.timestamp} /></ListItem>
                          <ListItem>{e.title}</ListItem>
                          <ListItem>
                          <div dangerouslySetInnerHTML={{ __html: e.content }} />{" "}
                          </ListItem>
                    </List>
                  </>
                );
              }
              return null;
  })}

    {!hasPosts && 
        <Nopost>
          <h3>텅</h3>
          <p>그린핑 회원들이 회원님을 기다리고 있어요 !</p>
          <NoPtext onClick={()=>{nav('/board')}}>캠핑 얘기 하러 가기
            <FontAwesomeIcon icon={faRunning}></FontAwesomeIcon>
          </NoPtext>
        </Nopost>
      }

  

        
      </BorderWrapper>
  
}
    </>
  );
}




export default Board;
