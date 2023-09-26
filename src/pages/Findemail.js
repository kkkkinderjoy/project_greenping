import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { firebaseAuth, sendPasswordResetEmail } from '../firebase'


const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  height: 50vh;
  align-items: center;
`
const Content = styled.div`
 width: 35vw;
 padding: 20px;
 box-shadow: 0px 5px 14px rgba(127, 138, 140, 0.09);
 background-color: #fff;
 border-radius: 12px;
 @media screen and (max-width:1024px){
  width: 60vw;
 }
 @media screen and (max-width: 640px){
  width: 70vw;
 }

`
const Title = styled.h1`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 9px;
`
const Input = styled.input`
 padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  height: 45px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  &:focus{
    outline: none;
    border-color: #2ed090;
  }
  &::placeholder{
    opacity: 0;
  }
`
const InputWrap = styled.div`
  position: relative;
  margin-bottom: 15px;
  input:focus +label,
  input:not(:placeholder-shown) +label{
    top: 4px;
    left: 4px;
    font-size: 10px;
    color: #2ed090;
  }
`
const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  color: #999;
  transition: all 0.3s;
  pointer-events: none;
`
const Button = styled.button`
  background-color: #2ed090;
  color: #fff;
  border: 1px solid #b2ffa4;
  width: 100%;
  height: 45px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  line-height: 13px;
  cursor: pointer;
  
`

function Findemail() {

  const[name,setName] =useState("");
  const[phoneNumber,setPhoneNumber]=useState("");
  const[message,setMessage]=useState("");
  const[resultemail,setResultEmail]= useState("");
  const[isModalOpen,setModalOpen] =useState(false);


  const PhoneNumber = (e) =>{
    let value = e.target.value;
    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, `$1-$2-$3`).replace(/-{1,2}$/g,"");
    setPhoneNumber(value);
  }

  const isValidPhone =(phoneNumber) =>{
    const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/
    return regex.test(phoneNumber);
  }

  const findID = async() =>{

    if(name.length === 0){ //이름칸이 비어있을 때
      setModalOpen(!isModalOpen);
      setMessage("이름이 비어있습니다.");
    }else if(!isValidPhone(phoneNumber)){ //전화번호 유효성 검사
      setMessage("유효한 전화번호를 입력해주세요");
      setModalOpen(!isModalOpen)
      return;

    }
  
  try{
    const userQuery = query(
      collection(getFirestore(),"users"),
      where("phoneNumber", "==" ,phoneNumber),
      where("name","==",name)
    );
    const querySnapShot = await getDocs(userQuery);
    
      if(querySnapShot.empty){
        setMessage("가입한 계정이 없습니다.");
        setModalOpen(!isModalOpen)
        return;
      }
      const userDoc = querySnapShot.docs[0];
      const userData = userDoc.data();
      console.log(userData);
      const email = userData.email;
      setResultEmail(email);

      if(!email){
        setMessage("이메일 정보를 찾을 수 없습니다.")
        setModalOpen(!isModalOpen);
        return;
      }
      // const maskEmail = email.replace()

  }
  catch(error){
    setMessage(error);
    setModalOpen(!isModalOpen)
    return;
  }
} 
  
  const passwordEdit = () => {
    sendPasswordResetEmail(firebaseAuth,resultemail)
    .then(function(){
      setMessage(`귀하의 ${resultemail.replace(/(.{4}).+(@.+)/,"$1*****$2")}로 메일을 전송 하였습니다.`)

      setModalOpen(!isModalOpen)
      return;

    }).catch(error =>{
      setMessage(error);
      setModalOpen(!isModalOpen);
      return;
    })
  }

  return (
    <>
    <Container>
      <Content>
        <Title>이메일 및 비밀번호 재설정</Title>
        <InputWrap>
        <Input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='이름을 입력해주세요' />
        <Label htmlFor='name'>이름</Label>
        </InputWrap>
        <InputWrap>
        <Input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} onInput={PhoneNumber} maxLength={13} type='text' placeholder='전화번호를 입력해주세요'/>
        <Label  htmlFor='phoneNumber'>전화번호</Label>
        </InputWrap>
        <p>{message}</p>
        <InputWrap>
          <Button onClick={findID}>이메일 찾기</Button>
        </InputWrap>
        {
          resultemail && <Button onClick={passwordEdit}>패스워드 재설정</Button>
        }
      </Content>
    </Container>
    </>
  )
}

export default Findemail