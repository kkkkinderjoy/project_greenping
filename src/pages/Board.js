import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  addDoc,
  collection,deleteDoc,doc,getDoc,getDocs,
  getFirestore,onSnapshot,orderBy,query} from "firebase/firestore";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faComment, faMessage, faPen, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import TimeGap from "./../components/KNH/TimeGap.js"
import Comments from "../components/KNH/Comments.js";
import Chat from './../components/KNH/Chatting.js';


const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  
`
const Content = styled.div`
  max-width: 1280px;
  
`

const  HeadWrap = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;


`
const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2.2em;


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
  flex-basis: 109%;
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
    max-height:500px; 
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 10px;
    margin-bottom: 20px;
    
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
  right: 4%;
  margin-top: 30px;
  width: 23px;
  height: 23px;
  padding: 14px;
  background-color: none;
  box-shadow: 0 0 3px gray;
  border-radius: 50%;
  display: flex; 
   justify-content: center; 
   align-items: center; 

   
`;
const MasWrap = styled.div`
  position: absolute;
  bottom: 20px;
  right:110px;
  margin-top: 30px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 0 3px gray;
  border-radius: 50%;
  display: flex; 
   justify-content: center; 
   align-items: center; 
   >svg{
      font-size: 1.1em;
      color: #333;
   }
   @media screen and (max-width: 768px) {
    position: absolute;
    right:90px;
    }
`;

const Heart = styled.img`
  cursor:pointer ; 
  width:auto; 
  height:auto; 
  margin-top: 17px;
  max-width :100% ; 
  max-height :100% ; 
`;



const Button = styled.button`
  position: absolute;
  bottom: -70px;
  right: 13%;
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







const TopContent = styled.div`
width: 100%;
  display: flex;
  justify-content: space-between;
`






function Board() {
  const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState();

  const [isActive, setIsActive] = useState(false);
  const [isModal, setIsModal] = useState(false);


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


  return (
    <>

        {
             isModal && <Chat onClose={()=>{setIsModal(false)}}/>
        }

      <Wrapper>
        <Content>
        <HeadWrap>
          <Title>그린톡</Title>
      
            <Link to="/write">
              <Button>
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
         
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
             
             



           
             <>
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
                <ListItem>
                    <MasWrap onClick={()=>{setIsActive(true); 
                        setIsModal(true);}} >
                      <FontAwesomeIcon  icon={faMessage}></FontAwesomeIcon>
                  </MasWrap>

                </ListItem>
                </>
                
              </List>
            );
          })}
        </ListWrap>
        </Content>
      </Wrapper>
    </>
  );
}

export default Board;
