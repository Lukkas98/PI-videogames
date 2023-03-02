import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';


function App() {
  return (
    <>
      <Link to="/home">AL HOME</Link>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        
      </Routes>
    </>
  );
}

export default App;
