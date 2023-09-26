import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Test from './pages/Test';
import SearchD from './pages/SearchD';
import Descpage from './pages/Descpage';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/searchd/' element={<SearchD />} />
        <Route path='/test' element={<Test />} />
        <Route path='/searchd/desc/:seq' element={<Descpage />} />
      </Routes>
    </>


  );
}

export default App;
