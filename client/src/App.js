import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';


function App() {

  const { pathname } = useLocation();

  return (
    <>
      <Nav></Nav>

      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/detail' element={<Detail />}/>
        
      </Routes>
    </>
  );
}

export default App;
