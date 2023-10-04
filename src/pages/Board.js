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
              <ListItem>{e.name}</ListItem>
              <ListItem>
                {e.title}
              </ListItem>
              <div dangerouslySetInnerHTML={{__html: e.content}}/>
              {/* <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem> */}
              
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

// const Wrapper = styled.div`
//   width: 100%;
//   margin-top: 60px;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 1rem;
// `;

// const Title = styled.h3`
//   font-size: 30px;
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: end;

//   &::after {
//     content: "";
//     width: 30px;
//     height: 5px;
//     margin-left: 0.5px;
//     background-color: #2ed090;
//     position: absolute;
//     top: -6px;
//     left: 0;
//     border-radius: 2px;
//   }
// `;

// const WriteButton = styled.button`
//   height: 30px;
//   background-color: #70e6b7;
//   color: white;
//   border-radius: 5px;
//   border: 1px solid transparent;
//   padding: 0 10px;
//   font-size: 13px;
//   cursor: pointer;
// `;

// const Card = styled.ul`
//   width: 100%;
//   height: auto;
//   margin-top: 30px;
//   margin-bottom: 4px;
//   border: 1px solid #e5e7eb;
//   border-radius: 0.375rem;
//   padding: 1.25rem;
//   position: relative;
//   list-style: none;
// `;

// const CardHeader = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   margin-bottom: 5px;
//   height: auto;
// `;

// const User = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const UserProfileImage = styled.img`
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
// `;

// const UserName = styled.p`
//   font-size: 18px;
//   margin-left: 8px;
// `;

// const Time = styled.p`
//   font-size: 14px;
//   color: gray;
// `;

// const CardTitle = styled.li`
//   font-size: 20px;
//   font-weight: bold;
// `;

// const CardImages = styled.li`
//   width: 100%;
//   height: auto;
//   display: flex;
//   height: auto;
//   @media screen and (min-width: 841px) {
//     height: 500px;
//   }
//   justify-content: space-around;
//   margin-bottom: 20px;
//   @media screen and (max-width: 840px) {
//     flex-wrap: wrap;
//   }
// `;

// const CardImage = styled.img`
//   width: 49%;
//   border-radius: 0.375rem;
//   margin-bottom: 5px;
//   background-position: center center;
//   object-fit: cover;
//   @media screen and (max-width: 840px) {
//     flex-basis: 99%;
//     height: 230px;
//   }
// `;

// const CardContent = styled.li`
//   height: auto;
// `;

// const CommentSection = styled.li`
//   margin-top: 7px;
// `;

// const CommentTitle = styled.h2`
//   position: relative;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 1px;
//     background-color: #cbd5e0;
//   }
// `;

// const CommentText = styled.p`
//   width: 100%;
// `;

// const HeartIcon = styled.div`
//   cursor: pointer;
// `;
