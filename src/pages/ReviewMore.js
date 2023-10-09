
import React, { useCallback, useEffect, useState } from 'react'
import styled from "styled-components";
import Pagenation from "../components/LJS/Pagenation";
import { faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { collection, doc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';


const ReviewContent = styled.div`
  max-width: 1280px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
  }
  @media screen and (max-width: 1024px){
      display: flex;
      flex-direction: column;
      width: 80%;
  }
`

const Container = styled.div`
  flex-basis: 27%;
  margin: 0 auto;
  border: 1px solid #eee;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  box-shadow: 0 0 10px #d7d7d7;
  border-radius: 1rem;
  cursor: pointer;
  
  img{ 
    width: 100%;
    height: 350px;
    border-radius: 0rem;
    background-image: url(https://media.istockphoto.com/id/1055079680/ko/%EB%B2%A1%ED%84%B0/%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%97%86%EB%8A%94-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%9F%BC-%EA%B2%80%EC%9D%80-%EC%84%A0%ED%98%95-%EC%82%AC%EC%A7%84-%EC%B9%B4%EB%A9%94%EB%9D%BC.jpg?s=612x612&w=0&k=20&c=6lBCS8H2OQDQA_v38ZBOuuKTxKwN3OvYe1xinb7wTb8=);
    background-size: contain;
    background-repeat:  no-repeat;
    background-position: center;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
    height: 600px;
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
    border-bottom: 1px solid #e5e7eb;
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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    margin-top: 120px;
    width: 90%;
  }
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
 
const userState = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(9);
  const sliceData = posts.slice(posts.length-loading)
  const [isActive, setIsActive] = useState(false)

  const fetchData = async () => {
    
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
    // setData(prevData => [...prevData, ...result]);
};
  // 최초 마운트가 되었을때는 스크롤유무와 관계 없이 1회가 시작되어야 하므로 fetch를 마운트 되었을 때 실행  
useEffect(() => {
    fetchData();
    
}, []);

useEffect(() => {

  const scrollEvent = () => {
      if(posts.data){
        return;
      }
      else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
        setTimeout(() => {
          setLoading(loading + 9)
        }, 1000);
    }
}
  
  window.addEventListener('scroll', scrollEvent);
  return () => window.removeEventListener('scroll', scrollEvent);

}, [loading]);



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
        { sliceData && sliceData.map((e, i) => {
          return (
            <>
            <Container >
             
              <ContainerWrap>
                  <UserInfo>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  <UserName>{e.name}</UserName>
                  </UserInfo>
                  <ContentTitle>{e.title}</ContentTitle>
                  <div dangerouslySetInnerHTML={{__html: e.content}}/>          
              </ContainerWrap>
              <UserDate>{e.timestamp?.toDate().toLocaleDateString()}</UserDate>
            </Container>
            </>
          );
        })}
        </ReviewContent>
    </> 
  );
}
export default ReviewMore
