import React, { useEffect, useState } from 'react'
import Board from './Board';
import styled from 'styled-components';
import { collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore';

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

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  margin: 20px 12px;
  background-color: #ffffff;
  border: 1px solid #999999;
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

function MyBoard() {
  
  const [isLogin, setIsLogin] = useState(false);
  const uid = sessionStorage.getItem("users")



  const [posts,setPosts]= useState([]);
 
 

  
   
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postRef = doc(getFirestore(),"board");
        const postSnapShot = await getDoc(postRef);
       
        const postArray = postSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    
        if(postSnapShot.exists()){
            if( uid === postSnapShot.data().id){
              setIsLogin(true)
              setPosts(postArray);
              
            }
        }
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  },[]);


   
    const deletePost = async () =>{
      if(window.confirm("정말로 삭제하시겠습니까?")){
        
        const docRef = doc(getFirestore(),"board");
        await deleteDoc(docRef)
        alert("게시물이 삭제되었습니다")
      }
    }

 
  
  return (
    <>
     <Title>내가 쓴 글</Title>
      
            { isLogin &&
              posts.map((e,i)=>{
                  return(
                    <List key={i}>
                    <ListItem>{e.name}</ListItem>
                    <ListItem>{e.timestamp.toDate().toLocaleDateString()}</ListItem>
                    <ListItem>


                      {e.title}
                    </ListItem>
                    <div dangerouslySetInnerHTML={{__html: e.content}}/>
                    <ListItem>
                        <ButtonWrap>
                            <Button>수정</Button>
                            <Button onClick={deletePost}> 삭제</Button>
                          </ButtonWrap>
                   </ListItem>
                  </List>
                  )

              })
            }
      
    </>
  )
}

export default MyBoard