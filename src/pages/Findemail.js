import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { firebaseAuth, sendPasswordResetEmail } from '../firebase'
import Modal from "./../components/Modal"



const Container = styled.div`
  background-color: #f9fcfc;
  padding-top: 60px;
  padding-bottom: 140px;
`


const Content = styled.div`
  position: relative;
  margin: 0 auto;
  width: 25vw;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
  /* box-shadow: 0px 5px 14px rgba(127, 138, 140, 0.09);
   */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  @media screen and (max-width: 1024px){
        width: 60vw;
        } 
`



const Title = styled.h3`
  text-align: center;
  font-size: 1.6em;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
`



const Input = styled.input`
  padding: 13px;
  width: 95%;
  margin-bottom: 10px;
  height: 30px;
  border: 1px solid #e4e4e4;
  border-radius: 10px;
  font-size: 1rem;
  &:focus{
    outline: none;
    border-color: #2ed090;
  }
  &::placeholder{
    opacity: 0;
  }
`



const InputWrap = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
  input:focus +label,
  input:not(:placeholder-shown) +label{
    top: 4px;
    left: 4px;
    font-size: 0.8rem;
    color: #2ed090;
  }
`



const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 1em;
  color: #999999;
  transition: all 0.3s;
  pointer-events: none;
`


const Button = styled.button`
  font-size: 1em;
  background-color: #2ed090;
  border: 1px solid #2ed090;
  color: #fff;
  width: 100%;
  height: 45px;
  border-radius: 10px;
  text-align: center;
  line-height: 1.3;
  cursor: pointer;
  margin-top: 25px;
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

  const isValidPhone = (phoneNumber) =>{
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
    )  
    const querySnapShot = await getDocs(userQuery);
      if(querySnapShot.empty){
        setMessage("가입한 계정이 없습니다.");
        setModalOpen(!isModalOpen);
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


  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(firebaseAuth,resultemail)
      setMessage(`귀하의 ${resultemail.replace(/(.{4}).+(@.+)/,"$1*****$2")}로 메일을 전송 하였습니다.`)
      setModalOpen(!isModalOpen)
    } catch (error) {
      console.error(error.message);
      setModalOpen(!isModalOpen);
     
    }
  }


  // const handleResetPassword = () => {
  //  
  //   sendPasswordResetEmail(firebaseAuth,resultemail)
  //   .then(function(){
  //     setMessage(`귀하의 ${resultemail.replace(/(.{4}).+(@.+)/,"$1*****$2")}로 메일을 전송 하였습니다.`)
  //     setModalOpen(!isModalOpen)
  //     return
  //   }).catch(error =>{
  //     setMessage(error);
  //     setModalOpen(!isModalOpen);
  //     return;
  //   })
  // }

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
        <InputWrap>
          <Button onClick={findID}>이메일 찾기</Button>
        </InputWrap>
        {
          resultemail && <Button onClick={handleResetPassword}>패스워드 재설정</Button>
        }
      </Content>
    </Container>
    {isModalOpen && <Modal error={message} onClose={()=>setModalOpen(false)}/>}
    </>
  )
}

export default Findemail