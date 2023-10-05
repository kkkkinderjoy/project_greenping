import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";




const BorderWrapper = styled.div`
  max-width: 1000px;
  margin: 50px auto;
`;
const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2.0em;
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
const List = styled.ul`
width: 100%;
height: auto;
   margin-top: 30px;
   margin-bottom: 4px;
   border: 1px solid #e5e7eb;
   border-radius: 0.375rem;
   padding: 1.25rem;
   position: relative;
   list-style: none;
   img{
    width: 450px;
    border-radius: 10px;
    object-fit: cover;
   }
`;



const ListItem = styled.li`
  padding: 10px 20px;
  flex-basis: 10%;
  position: relative;
  &:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    >p{
      color: #999999;
      font-size: 0.8em;
    }
  }
  &:nth-child(2) {
    width: 93%;
    margin: 10px 0;
    font-size: 1.3em;
    font-weight: bold;
    padding-left: 30px;
    position: relative;

        &::after {
        content: "";
        width:  3px;
        height: 20px;
        margin-left: 0.5px;
        background-color: #98eecc;
        position: absolute;
        top: 8px;
        left: 17px;
        border-radius: 10px;
        z-index: -1;
      }
  }

  
`;

const Profile = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  >img{
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;

  }
`
const HeartWrap = styled.div`
  position: absolute;
  bottom: 5%;
  right: 20px;
  margin-top: 20px;
  width: 25px;
  height: 25px;
  padding: 15px;
  background-color: white;
  box-shadow:  0 0 3px gray;
  border-radius: 50%;

`

const Heart = styled.img`
cursor: pointer;
  max-width: 100%;  
  height: auto;  
 
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 20px 12px;
  background-color: #98eecc;
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

function Board() {
  const userState = useSelector((state) => state.user);
  
  
  const [posts, setPosts] = useState([]);
  

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
        console.log(postArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  },[]);

  //  if (posts.length === 0) {
    
  //   return <div>현재 게시글이 없습니다.</div>;
  // }

  return (
    <>
    
      <BorderWrapper>
        <ButtonWrap>
        <Title>그린톡</Title>
            { 
            userState.uid &&
          
              <Link to="/write">
                <Button>
                    <FontAwesomeIcon icon={faPen} />
                </Button>
              </Link>
              }
        </ButtonWrap>
      

        {posts && posts.map((e, i) => {
          
          return (
            <List key={i}>
              <ListItem>
                <Profile>
                  <img src="https://via.placeholder.com/50x50" alt="profile" />
                  {e.name}
                </Profile>
                <p>{e.timestamp.toDate().toLocaleDateString()}</p>
              </ListItem>
              <ListItem>
                {e.title}
              </ListItem>
              <ListItem>
              <div dangerouslySetInnerHTML={{__html: e.content}}/>  </ListItem>      
              <ListItem
                onClick={() => {
                  toggleLike(i);
                }}
              >
                <HeartWrap>
                  <Heart src={ likes[i]  ? 'images/heart_full.png' : 'images/heart_blank.png'} alt="heart" />
                </HeartWrap>

              </ListItem>
             
            
            </List>
          );
        })}

       
      </BorderWrapper>
    </>
  );
}

export default Board;

