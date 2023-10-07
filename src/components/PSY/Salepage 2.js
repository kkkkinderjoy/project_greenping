import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import styled from "styled-components";
import data from "./../../data/MarketData"

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

    const [posts, setPosts] = useState([]);
    console.log(posts)
    const auth = getAuth();


  useEffect(auth, async (user) => {
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
        console.log(postArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  },[]);

  // onAuthStateChanged(auth, async (user) => {
  //   if (user) {
  //     const userUID = user.uid;

  //     try {
  //       const q = query(
  //         collection(getFirestore(), 'market'),
  //         where('authorUID', '==', userUID),
  //         orderBy('timestamp', 'desc')
  //       );
  
  //       const snapShot = await getDocs(q);
  
  //       const postArray = snapShot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  
  //       setPosts(postArray);
  //       console.log(postArray);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     // 사용자가 로그인하지 않았을 때의 처리
  //   }
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userUID = user.uid;

        try {
          const q = query(
            collection(getFirestore(), 'market'),
            where('authorUID', '==', userUID),
            orderBy('timestamp', 'desc')
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
      } else {
        // 사용자가 로그인하지 않았을 때의 처리
      }
    });

    return () => {
      // 컴포넌트가 언마운트되면 unsubscribe 함수 호출
      unsubscribe();
    }
  }, [auth]); // auth 상태가 변경될 때만 useEffect 실행

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


