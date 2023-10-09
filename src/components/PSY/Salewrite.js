import React from "react";
import styled from "styled-components";
import Saleeditor from "./Saleeditor";
import { useState } from "react";
import {
  useAsyncError,
  useParams,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import Modal from "./../Modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  p{
    font-size: 1.5rem;
    line-height: 2.5rem;
    @media screen and (max-width: 640px){
    font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 640px){
    justify-content: space-around;
    }
`

const Heading = styled.h3`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 2em;
  position: relative;
  margin-bottom: 60px;
  margin-left: 70px;
  @media screen and (max-width: 640px){
    margin-left: 50px;
    font-size: 25px;
  }
  &::after {
    content: "";
    width: 87px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -8px;
    left: 20px;
    border-radius: 2px;
  }

`

const ContentWrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  height: 800px;
  margin-top: 30px;
  padding-top: 24px;
  padding-right: 9%;
  margin-top: 9px;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
`;

const TextInput = styled.input`
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 68px;
  width: 92.5%;
  padding: 5px;
  height: 37px;
  border: none;
  border-bottom: 1.5px solid #e6e6e6;
  font-size: 1.3em;
  outline: none;
  @media screen and (max-width: 640px){
    width: 80%;
    margin: 0 15%;
    font-size: 1rem;
    }
  &:focus{
    border-bottom: 2px solid #98eecc;
  }
`;

const ContentInputWrapper = styled.div`
  width: auto;
  margin-top: 30px;
  margin-left: 70px;
  @media screen and (max-width: 640px){
    width: 80%;
    margin: 0 15%;
    }
`;



function Write() {
  const [txtTitle, setTxtTitle] = useState("");
  // 제목데이터를 에디터로 넘겨야 함
  const { market, view } = useParams();
  const [isModal, setIsModal] = useState(view ? false : true);
  const navigate = useNavigate();

  const memberProfile = useSelector((state) => state.user);
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState(null);

  const uid = sessionStorage.getItem("users");


  useEffect(() => {
    if (market) {
      const fetchData = async () => {
        const postRef = doc(getFirestore(), "market");
        const postSnapShot = await getDoc(postRef);
        if (postSnapShot.exists()) {
          setPostData(postSnapShot.data());
          setTxtTitle(postSnapShot.data().title);
          if (uid !== postSnapShot.data().uid) {
            setIsModal(true);
            setMessage("권한없음");
            return;
          }
        } else {
          setIsModal(false);
          setMessage("해당 문서가 존재하지 않습니다");
        }
      };
      fetchData();
    }
  });

  return (
    <>
      <Container>
        <InnerContainer>
          <Header>
            <Heading>판매글 쓰기</Heading>
            <Link to='/salepage'><p>내가 쓴글 보기</p></Link>
            </Header>
          <ContentWrapper>
              <TextInput
                placeholder="제목"
                defaultValue={postData && postData.title}
                type="text"
                onChange={(e) => {
                  setTxtTitle(e.target.value);
                }}
              />
            <ContentInputWrapper>
              <Saleeditor title={txtTitle} postData={postData} />
            </ContentInputWrapper>
          </ContentWrapper>
        </InnerContainer>
      </Container>
    </>
  );
}

export default Write;
