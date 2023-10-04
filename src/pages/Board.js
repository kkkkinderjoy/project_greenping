import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  collection,
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
  font-size: 2.2em;
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
    width: 400px;
   }
`;
const ListItem = styled.li`
  padding: 10px 20px;
  text-align: center;
  flex-basis: 10%;
  &:nth-child(2) {
    flex-basis: 50%;
  }
  &:nth-child(3) {
    flex-basis: 12%;
  }
  &:nth-child(4) {
    flex-basis: 20%;
  }
  
`;

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

  // if (posts.length === 0) {
  //   return <div>잠시만 기다려주세요</div>;
  // }

  return (
    <>
      <BorderWrapper>
        <ButtonWrap>
        <Title>그린톡</Title>
            <Link to="/write">
              <Button>
                  <FontAwesomeIcon icon={faPen} />
              </Button>
            </Link>
        </ButtonWrap>
      

        {posts.map((e, i) => {
          
          return (
            <List key={i}>
              {/* <ListItem>{e.name}</ListItem> */}
              <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem>
              <ListItem>
                {e.title}
              </ListItem>
              <div dangerouslySetInnerHTML={{__html: e.content}}/>
              
              <ListItem
                onClick={() => {
                  toggleLike(i);
                }}
              >
                {likes[i] ? "❤️" : "🤍"}
              </ListItem>
            </List>
          );
        })}

       
      </BorderWrapper>
    </>
  );
}

export default Board;

