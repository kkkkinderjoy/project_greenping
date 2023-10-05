import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux' 
import { logIn, logOut } from '../store'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase' 
import Modal from "./../components/Modal"

function Logout() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[isModal,setIsModal]= useState(true);
    const [error, setError] = useState();

    signOut(firebaseAuth)
    .then(()=>{
        dispatch(logOut()); 
        // navigate("/logout");  //로그아웃 클릭하면 메인화면으로 가기 위해서
        sessionStorage.removeItem("users")  //세션 스토리지에 있는 데이터를 지울려고
        
    })
    .catch((error)=>{
        console.log(error);
    })

  return (
    <>
        
          <Modal error="로그아웃이 되었습니다." onClose={()=>{setIsModal(false); navigate("/")}} />
           
            
        
    </>
  )
}

export default Logout