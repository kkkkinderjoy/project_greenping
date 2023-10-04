import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/HYJ/Header";
import Footer from "./components/HYJ/Footer";

import Main from "./pages/Main";
import SearchD from "./pages/SearchD";
import Ranking from "./pages/Ranking";
import ReviewMore from "./pages/ReviewMore";
import Board from "./pages/Board";
import Write from "./pages/Write";
import Market from "./components/PSY/Market";
import Notice from "./pages/Notice";
import Noticedetail from "./pages/Noticedetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Member from "./pages/Member";
import Findemail from "./pages/Findemail";
import Descpage from "./pages/Descpage";
import Notfound from "./components/KNH/Notfound";
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store, { logIn, loggedIn } from "./store";
import Aside from "./components/KNH/Aside";
import { useEffect } from "react";



function App() {
  return (
    <>
      <Provider store={store}>
        <Inner />
      </Provider>
    </>
  );
}

function Inner() {
  const userState = useSelector((state) => state.user);
  console.log(userState);

  const dispatch =useDispatch();
  const uid = sessionStorage.getItem("users");
  console.log(uid);


  useEffect(()=>{
    if(uid){
      dispatch(logIn(uid));
    }
    const fetchUser = async () =>{
      if(!uid) return;
      const userDoc = doc(collection(getFirestore(),"users"),uid);
      console.log(userDoc);
      try{
        const docSnapshot = await getDoc(userDoc);
        console.log(docSnapshot);
        if(docSnapshot.exists()){
          const userData= docSnapshot.data();
          dispatch(loggedIn(userData)); 
          //로그인에서 로그아웃으로 바껴야하니깐 데이터를 불러옴

        }

      }catch(error){
        console.log(error)
      }
    }
    fetchUser();
  }, [dispatch,uid]) //0919-4 dispatch,uid를 추가해주면 

  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <Header userState={userState}/>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/searchd/" element={<SearchD />} />
        <Route path="/searchd/desc/:seq" element={<Descpage />} />
        <Route path="/desc/:seq" element={<Descpage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/reviewmore" element={<ReviewMore />}></Route>
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/market" element={<Market />} />
        <Route path="/notice" element={<Notice />}></Route>
        {/* <Route path="/noticedetail/:seq" element={<Noticedetail />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/findemail" element={<Findemail />}></Route>
        {/* <Route path="/*" element={<Notfound />}></Route> */}
        
      </Routes>
      <Aside/>
      <Footer />
    </>
  );
}

export default App;
