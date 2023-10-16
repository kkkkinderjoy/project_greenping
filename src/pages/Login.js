import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { firebaseAuth, signInWithEmailAndPassword } from './../firebase'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, loggedIn } from '../store'
import { collection, doc, getDoc, getFirestore } from 'firebase/firestore'



const LoginContent = styled.div`
  display: flex;
  background-color: #f9fcfc;
  justify-content: center;
  height: 98vh;
  align-items: center;
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
  @media screen and (max-width: 1024px) {
        width: 60vw;
    } 
`

const Title = styled.div`
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


// const CheckboxContent = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   font-size: 1em;
//   color: #999;
//   gap: 3px;
// `

// const Checkbox = styled.input`
//     margin-left: 3px;
//     font-size: 1em;
//     color: #999999;
// `


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

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const LinkItem = styled.ul`
  color: #999;
  font-size: 1em;
  display: flex; gap: 12px;
`


function Login() {

    const[email,setEmail] = useState("");
    const[password,setPassword]=useState("");
    const[error,setError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    //console.log(userState)
    
    const errorMsg = (errorCode) =>{
      const firebaseError = {
        'auth/user-not-found' :"이메일 혹은 비밀번호가 잘못 되었습니다.",
        'auth/wrong-password' :'이메일 혹은 비밀번호가 잘못 되었습니다.',
        'auth/invalid-email' :'이메일 혹은 비밀번호가 잘못 되었습니다.'
      }
      return firebaseError[errorCode]|| '알 수 없는 에러가 발생했습니다.'
    }


    const LoginForm = async (e)=>{
      e.preventDefault();
      
      try{
        const userLogin = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userLogin.user;
        console.log(user);
        sessionStorage.setItem("users",user.uid);        
        dispatch(logIn(user.uid));

        const userDoc = doc(collection(getFirestore(),"users"),user.uid);
        const userDocSnapshot = await getDoc(userDoc);
        // console.log(userDocSnapshot.data())
        if(userDocSnapshot.exists()){
          const userData = userDocSnapshot.data();
          dispatch(loggedIn(userData));
          navigate("/");
        }
      }catch(error){
        setError(errorMsg(error.code));
        console.log(error.code);
      }
    }

  return (
    <LoginContent>
      <Content>
        <Title>로그인</Title>
        <form onSubmit={LoginForm}>
          <InputWrap>
            <Input type="email" className='email' placeholder='이메일' onChange={(e)=>{
                  setEmail(e.target.value)
                }} required />
            <Label>이메일</Label>
          </InputWrap>
          <InputWrap>
          <Input type="password" className='password' placeholder='비밀번호' onChange={(e)=>{
                setPassword(e.target.value)
              }} required/>
          <Label>비밀번호</Label>
          </InputWrap>
          <Button type='submit'>로그인</Button>
          </form>
          <p>{error}</p>
          <LinksWrapper>
            <LinkItem>
            <li><NavLink to="/findemail">이메일/비밀번호 재설정</NavLink></li>
            <li><NavLink to="/member">회원가입</NavLink></li>
            </LinkItem>
          </LinksWrapper>
      </Content>
    </LoginContent>
   
   
  )
}

export default Login;


