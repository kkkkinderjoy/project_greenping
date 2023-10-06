import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteDoc,collection, getDocs, getDoc, getFirestore, orderBy, query, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styled from "styled-components";
import data from "./../../data/MarketData"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Content = styled.div`
    width: 100%;
`
const TitleWrap = styled.div`
    max-width: 800px;
    margin: 50px auto;
    ul{
        display: flex;
        justify-content: space-between;
    li{
        font-size: 30px;
        background-color: #fff;
        width: 150px;
        height: 50px;
        border: 1px solid #ddd;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
        line-height: 50px;
    &.on{
        background-color: #24d181;
        color: #fff;
    }
  }
}
`
const ContentWrap = styled.div`
    width: 100%;
    height: 100%;
    gap: 15px;
    margin-bottom: 50px;
    padding: 0 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`
const Tomain = styled.div`
  width: 100%;
  position: relative;
  p{
    position: absolute;
    font-size: 18px;
    top: -10px;
    right: 4%;
    color: #999;
  }
`

const ContentItem = styled.div`
  width: 500px;
  height: 500px;
  flex-basis: 31.5%;
  margin-bottom: 50px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  position: relative;
  img{
    width: 300px; 
    height:300px; 
    display: block; margin: 0 auto; margin-bottom: 24px;
    }
  h3{margin-bottom: 24px; text-align: center; padding-top: 24px; font-size: 22px;}
  ul{
    display: flex;
    justify-content: space-around;
    li{
        margin-bottom: 7px;
        &:nth-child(1){
        font-size: 18px;
        font-weight: bold;
        }
    }
  }
  @media screen and (max-width: 1200px){
    flex-basis: 49%;
  }
  @media screen and (max-width: 640px){
    flex-basis: 100%;
  }
`  

function Salepage() {
    
    const Filter = [...new Set(data.map(e => e.ID))]

    const menu = ["/sale" , "/buy", "/assi"]
    
    const [sale, setSale] = useState(0);
    const userState = useSelector((state) => state.user);
    const [post, setPost] = useState();
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const uid = sessionStorage.getItem("users");
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        const postRef = collection(getFirestore(), "market");
        const postSnapShot = await getDoc(doc(postRef));
        const CurrentUser = postSnapShot._firestore._authCredentials.currentUser;
        console.log(CurrentUser.uid);
        if (CurrentUser.uid) {
          console.log("있음?");
          setPost(CurrentUser.uid);
        } else {
          console.log("오류남");
        }
      };
      fetchData();
    }, []);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const q = query(
            collection(getFirestore(), "market"),
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

    const deletePost = async () => {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        const docRef = doc(getFirestore(), "market", "wNUObr3FLD7oJGCWa58C");
        await deleteDoc(docRef);
        alert("게시물이 삭제되었습니다");
        navigate(`/salepage`);
      }
    };

  return (
    <>
    <Content>
        <TitleWrap>
            <ul>
                {
                    Filter.map((e,i)=>{
                        return(
                            <NavLink to={menu[i]}><li className={sale === i ? 'on' : ''} key={i}>{e}
                            </li></NavLink>
                        )
                    })
                }
            </ul>
        </TitleWrap>
        {
          posts &&
          posts.map((e,i)=>{
            return(
              <ContentItem key={i}>
                <h3>{e.title}</h3>
                <ul>
                    <li>{e.title}</li>
                    <li>업로드일: {e.timestamp.toDate().toLocaleDateString()}</li>
                    <li dangerouslySetInnerHTML={{__html: e.content}}/>
                </ul>
              </ContentItem>
            )
          })
        }
    </Content>
    </>
  );
}

export default Salepage;


