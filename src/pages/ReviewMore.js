
import React, { useCallback, useEffect, useRef, useState } from 'react'

import styled from "styled-components";

import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { collection, deleteDoc, doc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';




const PagenationContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  @media screen and (max-width: 768px) {
     display: none;
  }
`

const ReviewContent = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      width: 100%;
      
  }
`

const Container = styled.div`
  width: 28%;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  box-shadow: 0 0 10px #d7d7d7;
 

  img{ 
    width: 100%;
    height: 300px;
    border-radius: 10px;
    background-image:  url(https://media.istockphoto.com/id/1055079680/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%97%86%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%9F%BC-%EA%B2%80%EC%9D%80-%EC%84%A0%ED%98%95-%EC%82%AC%EC%A7%84-%EC%B9%B4%EB%A9%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=6lBCS8H2OQDQA_v38ZBOuuKTxKwN3OvYe1xinb7wTb8=);
    background-size: contain;
    background-repeat:  no-repeat;
    background-position: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
    height: 550px;
    padding: 20px;
    img{
      margin-top: 10px;
    }
  }
 `
const ContainerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    p{
      height: 30px;
    }
  }
`

const UserInfo = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-basis: 20%;
`

const ContentTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    flex-basis: 30%;
`
const UserName = styled.div`
    font-size: 14px;
    margin-left: 10px;
   
`
const UserDate = styled.div`
  text-align: right;
  margin-top: 10px;
  font-size: 12px;
`

const ButtonWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 50px;
`;

const Button = styled.button`
   margin-bottom: 20px;
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

const Title = styled.div`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2.2em;
  position: relative;
  line-height: 45px;
  margin-bottom: 20px;

  &::after {
    content: "";
    width: 35px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: 3px;
    left: 18px;
    border-radius: 2px;
  }
`;



function ReviewMore() {

  const [current, SetCurrent] = useState()
  

  useEffect(() => {
    const Scroll = () => {
      let pos = window.scrollY;
      if (pos + window.innerHeight === document.documentElement.scrollHeight) {
       console.log("도착")
       
      }else{
        console.log("미도착")
      }
    };
    window.addEventListener('scroll', Scroll);

  
  }, []);

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


  const navigate = useNavigate();
  const uid = sessionStorage.getItem("users")
  const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(getFirestore(), "review"),
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
  

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;


  const deletePost = async (uid) => {
    const firestore = getFirestore();
    const docRef = doc(firestore, "review", uid);
  
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
  
  return (
    <>
    
     <ButtonWrap>
        <Title>리뷰</Title>
        {
            <Link to="/ReviewWrite">
              <Button>
                  <FontAwesomeIcon icon={faPen} /> 
              </Button>
            </Link>
          
        }
        </ButtonWrap>

        <ReviewContent>
        {posts && posts.map((e, i) => {
        
          return (
            <>
            {

            }
            <Container>
              <ContainerWrap>
                  <UserInfo>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <UserName>{e.name}</UserName>
                  </UserInfo>
                  <ContentTitle>{e.title}</ContentTitle>
                  <div dangerouslySetInnerHTML={{__html: e.content}}/>            
              </ContainerWrap>
              <UserDate>{e.timestamp.toDate().toLocaleDateString()}</UserDate>
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
            </Container>
            </>
          );
        })}


          {/* <PagenationContent>
      <Pagenation
        total={posts.length}    
        limit={limit}
        page={page}
        setPage={setPage}
      />
       </PagenationContent> */}
        </ReviewContent>
    </> 
  );
}

export default ReviewMore
