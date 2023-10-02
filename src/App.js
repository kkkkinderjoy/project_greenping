import { Route, Routes } from "react-router-dom";
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
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store from "./store";

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

  // const dispatch =useDispatch();
  // const uid = sessionStorage.getItem("users");
  // console.log(uid);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/searchd/" element={<SearchD />} />
        <Route path="/searchd/desc/:seq" element={<Descpage />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/reviewmore" element={<ReviewMore />}></Route>
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/market" element={<Market />} />
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/noticedetail/:seq" element={<Noticedetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/findemail" element={<Findemail />}></Route>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
