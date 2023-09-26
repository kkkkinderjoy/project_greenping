import React, { useState } from 'react'
import styled from 'styled-components'
import { createUserWithEmailAndPassword, firebaseAuth } from './../firebase'
import { doc, setDoc, getFirestore, Firestore, getDoc, query, collection, where, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../store'
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';


const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  height: calc(100vh - 86px);
  align-items: center;
`
const SignUp = styled.div`
    width: 25vw;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: #fff;
    border-radius: 10px;
    p{
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 2px;
      margin-top: 20px;
      span{
        margin-left: 5px;
        color: red;
      }
    }
    @media screen and (max-width: 1024px) {
        width: 60vw;
    } 
    @media screen and (max-width: 640px) {
        width: 70vw;
    } 
`
const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`
const Emailbox = styled.div`
  display: flex;
  justify-content: space-between;
  button{
    margin-left: 10px;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    border: 1px solid #eee;
    background-color: #A6F4D0;
    cursor: pointer;
    p{
      font-size: 14px;
      color: #fff;
      font-weight: normal;
      margin: 0 auto;
    }
  }
`
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #A6F4D0;
  border: none;
  color: #fff;
  cursor: pointer;
  border: 1px solid #eee;
  margin-top: 20px;
`
const Password = styled.div`
position: relative;
width: 100%;
svg{
  position: absolute;
  right: 10px;
  top: 12.5px;
  cursor: pointer;
}
`
function Member() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState([0, 0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dateOfBirth, setDateOfBirth] = useState("");
  const userState = useSelector(state => state.user);

  const toggleEye = (index) => {
    const newEye = [...eye];
    //원래 있던 eye의 배열값을 복사해 배열을 벗긴다.
    //[[0,0]] > [] 없애는게 ...표현 > 즉, 같은값이 복사가 된다.
    newEye[index] = !newEye[index];
    //eye를 첫번째를 클릭 했다면 newEye[0] = 부정 즉 fasle > true로 변경된다 [1,0]
    setEye(newEye);
    //그리고 그 값을 쓰기 전용인 setEye에 새로운 배열값을 저장한다.
  }

  const PhoneNumber = (e) => {
    let value = e.target.value;
    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");
    setPhoneNumber(value);
  }

  const DateOfBirth = (e) => {
    let value = e.target.value;
    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1/$2/$3").replace(/\/{1,2}$/g, "");
    setDateOfBirth(value)
  };

  const errorMsg = (errorCode) => {
    const firebaseError = {
      'auth/admin-restricted-operation': "빈 데이터가 있다.",
      'auth/email-already-in-use': "이미 사용중인 이메일 주소",
      'auth/invalid-email': "유효하지 않음 이메일 주소",
      'auth/operation-not-allowed': "이메일/비밀번호 계정이 비활성화 되어 있습니다.",
      'auth/weak-passwrod': "너무 짧은 비밀번호를 사용하였습니다.(6자리)",
    }
    return firebaseError[errorCode] || '알 수 없는 에러가 발생하였습니다.'
  }

  const isValidDateOfBirth = (dateOfBirth) => {
    const regex = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/
    return regex.test(dateOfBirth)
  }

  const isValidPhone = (phoneNumber) => {
    const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/ //[]안은 사용 가능한 숫자 범위 / {}중괄호 안은 자릿 수
    return regex.test(phoneNumber);
    // 결과값은 ture(이상 없을 때) or false(이상 생겼을 때) 이다.
    // test() : 문자열에 일치하는 부분이 있는지 확인하고, true 혹은 false를 return
  }
  const isValidEmail = (email) => {
    const regex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
    return regex.test(email)
  }

  const signUp = async (e) => {
    e.preventDefault();

    let errorMessage = "";

    if (!isValidEmail(email)) {
      setError("유요한 이메일 주소를 입력해주세요");
      return;
    }
    else if (nickname.length === 0) {
      errorMessage = "닉네임";
    }
    else if (password.length === 0) {
      errorMessage("비밀번호")
    } else if (passwordConfirm.length === 0) {
      errorMessage = "비밀번호 확인";
    } else if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.")
      return;
    } else if (name.length === 0) {
      errorMessage = "이름"
    } else if (!isValidDateOfBirth(dateOfBirth)) {
      setError("유효하지 않는 생년월일 입니다.")
    } else if (!isValidPhone(phoneNumber)) {
      setError("유효한 전화번호를 입력해주세요");
      return;
    }
    if (errorMessage) {
      setError(errorMessage + "이(가) 비어있습니다.")
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword
        (firebaseAuth, email, password)

      const userProfile = {
        name,
        nickname,
        phoneNumber,
        email,
      }
      await setDoc(doc(getFirestore(), "users", user.uid), userProfile)
     
      sessionStorage.setItem("user", user.uid)
      dispatch(logIn(user.uid));
      alert("회원가입이 완료 되었습니다.");
      navigate('/');

    } catch (error) {
      setError(errorMsg(error.code))
    }
  }


  const checkEmail = async (data) => {
   
    if (!isValidEmail(data)) {
      setError("유요한 이메일 주소를 입력해주세요");
      return;
    }
    try{
       const q = await query(collection(getFirestore(), 'users'), where("email", "==", data));
       const querySnapshot = await getDocs(q);
       if(querySnapshot.docs.length === 0){
        setError("사용가능한 이메일입니다.");
      }else{
         setError("입력된 이메일 주소는 이미 사용 중입니다.");
       }
     }catch(error){
      console.log(error)
     }
          //Ref 은 doc까지만 접근한 상태
          

  
    // try {
    //   const signInChk = await fetchSignInMethodsForEmail(firebaseAuth,email);
    //   if (signInChk === data) {
    //     setError("입력된 이메일 주소는 이미 사용 중입니다.");
    //   } else {
    //     setError("사용가능한 이메일입니다.");
    //   }
    // } catch (error) {
    //   setError(errorMsg(error))
    // }
  };
  
  return (
    <>
      <Container>
        <SignUp>
          <Title>회원가입</Title>
          <p>이메일<span>*</span></p>
          <Emailbox>
          <Input defaultValue={email} onChange={(e) => { setEmail(e.target.value) }} type='email' className='email'/>
            <button onClick={()=>{checkEmail(email)}} ><p>중복 확인</p></button>
          </Emailbox>
         
          <p>닉네임<span>*</span></p>
          <Input value={nickname} onChange={(e) => { setNickname(e.target.value) }} type='text' className='nickname' />

          <p>비밀번호<span>*</span></p>
          <Password>
            <Input type={eye[0] ? 'text' : 'password'} className='password' onChange={(e) => { setPassword(e.target.value) }} />
            <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={() => {
              toggleEye(0)
            }} />
          </Password>
          <p>비밀번호 확인<span>*</span></p>
          <Password>
            <Input type={eye[0] ? 'text' : 'password'} onChange={(e) => { setPasswordConfirm(e.target.value) }} className='confirm_password' />
            <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={() => {
              toggleEye(0)
            }} />
          </Password>

          <p>이름<span>*</span></p>
          <Input value={name} onChange={(e) => { setName(e.target.value) }} type='text' className='name' />

          <p>생년월일</p>
          <Input onInput={DateOfBirth} maxLength={10} type='text' className='birth' />

          <p>전화번호<span>*</span></p>
          <Input onInput={PhoneNumber} maxLength={13} type='text' className='phone' />

          <Button onClick={signUp}>가입</Button>
          <p>{error}</p>
        </SignUp>
      </Container>

      {/* {
      userState.loggedIn ? <Modal error="개인정보 수정을 할 수 없습니다." onClose={()=>{navigate('/login')}}/> : ""
    } */}
    </>
  )
}

export default Member