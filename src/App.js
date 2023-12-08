import { Route, Routes, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SearchD from "./pages/SearchD";
import Ranking from "./pages/Ranking";
import ReviewMore from "./pages/ReviewMore";
import Board from "./pages/Board";
import Write from "./pages/Write";
import Service from "./pages/Service";
import Market from "./components/Market";
import Notice from './components/Notice';
import FAQ from './components/FAQ';
import Noticedetail from "./components/Noticedetail";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Member from "./pages/Member";
import Findemail from "./pages/Findemail";
import Modify from "./pages/Modify";
import Descpage from "./pages/Descpage";
import Notfound from "./components/Notfound";
import { Provider, useDispatch, useSelector } from "react-redux";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import store, { logIn, loggedIn } from "./store";
import Aside from "./components/Aside";
import Sale from "./components/Sale";
import Buy from "./components/Buy";
import Assi from "./components/Assi";
import Inquiry from "./pages/Inquiry";
import Myboard from "./pages/Myboard";
import { useEffect } from "react";
import Navsearch from "./pages/Navsearch";
import Salepage from "./components/Salepage";
import Salewrite from "./components/Salewrite";
import Navdescpage from "./pages/Navdescpage";
import ReviewCk from "./components/ReviewCk";
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


  const dispatch = useDispatch();
  const uid = sessionStorage.getItem("users");

  useEffect(() => {
    if (uid) {
      dispatch(logIn(uid));
    }
    const fetchUser = async () => {
      if (!uid) return;
      const userDoc = doc(collection(getFirestore(), "users"), uid);
    
      try {
        const docSnapshot = await getDoc(userDoc);
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
