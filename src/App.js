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
import Service from "./pages/Service";
import Market from "./components/PSY/Market";
import Notice from './components/HYJ/Notice';
import FAQ from './components/HYJ/FAQ';
import Noticedetail from "./components/HYJ/Noticedetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Member from "./pages/Member";
import Findemail from "./pages/Findemail";
import Modify from "./pages/Modify";
import Descpage from "./pages/Descpage";
import Notfound from "./components/KNH/Notfound";
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store, { logIn, loggedIn } from "./store";
import Aside from "./components/KNH/Aside";
import Sale from "./components/PSY/Sale";
import Buy from "./components/PSY/Buy";
import Assi from "./components/PSY/Assi";
import Inquiry from "./pages/Inquiry";
import Myboard from "./pages/Myboard";
import { useEffect } from "react";
import Navsearch from "./pages/Navsearch";
import Salepage from "./components/PSY/Salepage";
import Salewrite from "./components/PSY/Salewrite";
import Navdescpage from "./pages/Navdescpage";
import ReviewCk from "./components/LJS/ReviewCk";
import ReviewWrite from "./pages/ReviewWrite";
import Msearchd from "./pages/Msearchd";
import ChoiceDescpage from "./pages/ChoiceDescpage";


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
  //console.log(userState);

  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");

  //console.log(uid);

  useEffect(() => {
    if (uid) {
      dispatch(logIn(uid));
    }
    const fetchUser = async () => {
      if (!uid) return;
      const userDoc = doc(collection(getFirestore(), "users"), uid);
      //console.log(userDoc);
      try {
        const docSnapshot = await getDoc(userDoc);
        //console.log(docSnapshot);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          dispatch(loggedIn(userData));
          //로그인에서 로그아웃으로 바껴야하니깐 데이터를 불러옴
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [dispatch, uid]); //0919-4 dispatch,uid를 추가해주면

  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <Header userState={userState} />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/searchd/" element={<SearchD />} />
        <Route path="/navsearch/" element={<Navsearch />} />
        <Route path="/msearch/" element={<Msearchd />} />
        <Route path="/searchd/desc/:seq" element={<Descpage />} />
        <Route path="/navsearch/navdesc/:seq" element={<Navdescpage />} />
        <Route path="/navdesc/:seq" element={<Navdescpage />} /> 
        <Route path="/desc/:seq" element={<Descpage />} />
        <Route path="/ranking/" element={<Ranking />} /> 
        <Route path="/ranking/navdesc/:seq" element={<Navdescpage />} />
        <Route path="/reviewmore" element={<ReviewMore />}></Route>
        <Route path="/reviewck" element={<ReviewCk />}></Route>
        <Route path="/board" element={<Board/>}  />
        <Route path="/myboard" element={<Myboard/>}  />
        <Route path="/edit" element={<Write/>}></Route>
        <Route path="/reviewmore" element={<ReviewMore />}></Route>
        <Route path="/reviewwrite" element={<ReviewWrite/>}></Route>
        <Route path="/write" element={<Write />} />
        <Route path="/market" element={<Market />} />
        <Route path="/service" element={<Service />}>
          <Route path="notice" element={<Notice />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        <Route path="service/notice/:id" element={<Noticedetail />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/member" element={<Member />}></Route>
        <Route path="/modify" element={<Member />}></Route>
        <Route path="/findemail" element={<Findemail />}></Route>
        <Route path="/sale" element={<Sale />} />
        <Route path="/salewrite" element={<Salewrite />} />
        <Route path="/salepage" element={<Salepage />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/Assi" element={<Assi />} />
        <Route path="/inquiry/:seq" element={<Inquiry />} />
        <Route path="/inquiry/:seq/:market" element={<Inquiry />} />
        <Route path="/edit/:view" element={<Write />}/>
        <Route path="/choicedesc/:seq"  element={<ChoiceDescpage />}/>
        <Route path="/*" element={<Notfound />}></Route>
       </Routes>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
