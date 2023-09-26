import { NavLink, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./../components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Membership from './pages/Membership';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Notice from './pages/Notice';
import Noticedetail from './pages/Noticedetail';
import Findemail from './pages/Findemail';
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store, { loggedIn } from "./store";


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

  const dispatch =useDispatch();
  const uid = sessionStorage.getItem("users");
  console.log(uid);

  return(
    <>
    <ThemeProvider>
      <GlobalStyle>
      <Header/>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/membership' element={<Membership />}></Route>
          {/* <Route path='/*' element={<NotFound/ >}></Route> */}
          <Route path="/notice" element={<Notice />}></Route>
          <Route path="/noticedetail/:seq" element={<Noticedetail/>}></Route>
          <Route path="/findemail" element={<Findemail />}></Route>
        </Routes>
      <Footer />
      </GlobalStyle>
    </ThemeProvider>
  </>
  )
}


export default App;
