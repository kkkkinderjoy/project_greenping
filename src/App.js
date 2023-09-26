import { Route, Routes } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyle";
import Header from './components/HYJ/Header';
import Footer from './components/HYJ/Footer';
import Main from './pages/Main';
import Member from './pages/Member';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Notice from './pages/Notice';
import Noticedetail from './pages/Noticedetail';
import Findemail from './pages/Findemail';
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store from "./store";
import SearchD from './pages/SearchD';
import Descpage from './pages/Descpage';
import ReviewMore from './pages/ReviewMore';



function App() {
  
  return (
  <>
  <Provider store={store}>
    <Inner />
  </Provider>
  </>
  );
  
}

function Inner(){
  
  const userState = useSelector(state => state.user);
  console.log(userState);

  // const dispatch =useDispatch();
  // const uid = sessionStorage.getItem("users");
  // console.log(uid);

  return(
    <>
      <GlobalStyle />
        <Header/>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/reviewmore' element={<ReviewMore />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/member' element={<Member />}></Route>
            <Route path="/notice" element={<Notice />}></Route>
            <Route path="/noticedetail/:seq" element={<Noticedetail/>}></Route>
            <Route path="/findemail" element={<Findemail />}></Route>
            <Route path='/searchd/' element={<SearchD />} />
            <Route path='/searchd/desc/:seq' element={<Descpage />} />
          </Routes>
        <Footer />
  </>
  )
}


export default App;
