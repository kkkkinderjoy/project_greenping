import React from "react";
import styled from "styled-components";
import Ckeditor from "../components/KNH/Ckeditor";
import { useState } from "react";
import {
  useAsyncError,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Modal from "../components/Modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  margin: 0 4px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Heading = styled.h3`
  font-size: 2.0em;
  position: relative;

  &::after {
    content: "";
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -17px;
    left: 0;
    border-radius: 2px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 800px;
  margin-top: 30px;
  padding-top: 20px;
  padding-right: 120px;
  margin-top: 9px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
`;

const ContentInner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const TextInput = styled.input`
  padding: 5px;
  height: 40px;
  border: 1px solid #e5e7eb;
  flex-basis: 75%;
  font-size: 15px;
`;

const ContentInputWrapper = styled.div`
  width: auto;
  margin-top: 20px;
  margin-left: 70px;
`;

const ContentLabel = styled.p`
  margin-bottom: 15px;
`;

function Write() {
  const [txtTitle, setTxtTitle] = useState("");
  // 제목데이터를 에디터로 넘겨야 함
  const { board, view } = useParams();
  const [isModal, setIsModal] = useState(view ? false : true);
  const navigate = useNavigate();

  const memberProfile = useSelector((state) => state.user);
  // 로그인 하지 않으면 이용할 수 없음
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState(null);

  // 수정 버튼 홈페이지 이동 막기
  const uid = sessionStorage.getItem("users");
  const [userUid, setUserUid] = useState(uid);

  useEffect(() => {
    if (board) {
      const fetchData = async () => {
        const postRef = doc(getFirestore(), "board");
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

  if(!memberProfile.loggedIn){
    return(
      <>
      {
        isModal &&
        <Modal error="로그인 이후 이용해주시기 바랍니다!" onClose={()=>{setIsModal(false); navigate('/login')}}/>
        // 유효성 검사 -> 주소를 잘못 쓴 경우 메인으로 가게 만듦

      }
      {/* 버그 방지 */}
      </>
    )
  }


  return (
    <>
   

      <Container>
        <InnerContainer>
          <Header>
            <Heading>{board && view ? "글수정" : "글쓰기"}</Heading>
          </Header>

          <ContentWrapper>
            <ContentInner>
              <Title>제목</Title>
              <TextInput
                defaultValue={postData && postData.title}
                type="text"
                onChange={(e) => {
                  setTxtTitle(e.target.value);
                }}
              />
            </ContentInner>
            <ContentInputWrapper>
              <ContentLabel>내용</ContentLabel>
              <Ckeditor title={txtTitle} postData={postData} />
            </ContentInputWrapper>
          </ContentWrapper>
        </InnerContainer>
      </Container>
    </>
  );
}

export default Write;
