import React, { useState } from 'react'
// import dataList from './../data/Data'
import { useNavigate } from 'react-router-dom';
import Write from '../pages/Write';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h3`
  font-size: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: end;

  &::after {
    content: '';
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -6px;
    left: 0;
    border-radius: 2px;
  }
`;

const WriteButton = styled.button`
  height: 30px;
  background-color: #70e6b7;
  color: white;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0 10px;
  font-size: 13px;
  cursor: pointer;

 
`;

const Card = styled.ul`
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

const CardHeader = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5px;
  height: auto;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-size: 18px;
  margin-left: 8px;
`;

const Time = styled.p`
  font-size: 14px;
  color: gray;
`;

const CardTitle = styled.li`
  font-size: 20px;
  font-weight: bold;
`;

const CardImages = styled.li`
  width: 100%;
  height: auto;
  display: flex;
  height: auto;
  @media screen and (min-width: 841px){
    height: 500px;
  }
  justify-content: space-around;
  margin-bottom: 20px;
  @media screen and (max-width:840px){
  flex-wrap: wrap;
  
  }
`;

const CardImage = styled.img`
  width: 49%;
  border-radius: 0.375rem;
  margin-bottom: 5px;
  background-position: center center;
  object-fit: cover;
  @media screen and (max-width:840px) {
   flex-basis:99% ;
   height:230px;

  }
`;

const CardContent = styled.li`
height:auto;
`;

const CommentSection = styled.li`
  margin-top: 7px;
  
`;

const CommentTitle = styled.h2`
  position: relative;

  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  height: 1px;
  background-color: #cbd5e0;
  }
 
`;

const CommentText = styled.p`
  width: 100%;

`;


const HeartIcon = styled.div`
  cursor: pointer;
`

function Main() {
  const navigate = useNavigate();
  // const [data, setData] = useState(dataList);
  

  const goWrite = () => {
    navigate('/write');
  };

  // const [likes, setLikes] = useState(Array(data.length).fill(false));
  //   const toggleLike = (index)=>{
  //     const newLikes = [...likes];
  //     newLikes[index] = !newLikes[index]
  //     setLikes(newLikes)
  //   }
  


  

  return (
    <Wrapper>
      <Container>
        <Title>그린톡
        <WriteButton onClick={goWrite}>글쓰기</WriteButton>
        </Title>
        {/* {data.map((e, i) => (
          <Card key={i}>
            <CardHeader>
              <User>
                <UserProfileImage src={e.profile} alt="profileIMG" />
                <UserName>{e.user}</UserName>
              </User>
              <Time>{e.time}</Time>
            </CardHeader>
            <CardTitle>{e.title}</CardTitle>
            <CardImages>
              {

              }
              <CardImage src={e.imageURL} alt="img" />
              <CardImage src={e.imageURL2} alt="img" />
            </CardImages>
            <CardContent>{e.content}</CardContent>
            <CommentSection>
              <CommentTitle>댓글</CommentTitle>
              <CommentText>{e.answer}</CommentText>
              <div>
                {e.answer2}
                <HeartIcon onClick={()=>{toggleLike(i)}}>
                  <FontAwesomeIcon icon={ likes[i] ?  faHeart : faHeart} size="lg"/>
                </HeartIcon>
              </div>
            </CommentSection>
          </Card>
        ))} */}
      </Container>
    </Wrapper>
  );
}

export default Main