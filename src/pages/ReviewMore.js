import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../data/Data';
import Pagenation from '../components/Pagenation';


const Header = styled.div`
  margin-top: 80px;
  width: 100%;
  background-color: #f9fcfc;
`;

const Container = styled.ul`
  max-width: 1280px; 
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 15px;
 
  @media screen and (max-width: 768px){
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ul{
      width: 100%;
    }
  }
`;

const CardItem = styled.li`
  border: 1px solid #ccc;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 10px;
  background-color: mintcream;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  flex-basis: 30%;
  @media screen and (max-width: 768px) {
    max-width: 483px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  padding: 2px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 1rem;

`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 1rem;
`;

const CardDesc = styled.div`
  font-size: 14px;
  margin-bottom: 0.5rem;
  height: 140px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  p{
    cursor: pointer;
    span{
      margin-left: 10px;
    }
  }
`;

function GreenTalk() {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [good, setGood] = useState(0);
  
  function ClickGood() {
    setGood(good+1)
  } 
  let [like, setLike] = useState([0, 0, 0,0,0,0,0,0,0,0]);
  return (
    <Header>
      <Container >
        {Card.slice(offset, offset + limit).map((e, i) => {
        return(
          <React.Fragment key={i}> 
          <CardItem>
          <ImageContainer img={e.img}></ImageContainer>
          <CardInfo>
            <CardTitle>{e.title}</CardTitle>
            <CardDesc>{e.desc}</CardDesc>
          </CardInfo>
          <CardFooter>
          <p onClick={()=>{
            let likeCnt = [...like];
            likeCnt[i]++;
            setLike(likeCnt); 
            }}>추천👍 {like[i]} </p>     
            <p>{e.date}</p>
          </CardFooter>
        </CardItem>
        </React.Fragment>
        )
          })}
      </Container>
        <Pagenation
         total={Card.length}
         limit={limit}
         page={page}
         setPage={setPage}
        />
    </Header>
  );
}

export default GreenTalk;
