import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import axios from "axios";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, getAllGenres } from './redux/actions.js';
import Landing from './components/Landing/Landing.jsx';

import imageLanding from "./assets/images/FondoLanding.jpg" 

function App() {
  let body = document.querySelector("body");
  body.style.backgroundImage = `url(${imageLanding})`

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  
  const dbvideogames = useSelector(state => state.gamesCreated);
  const apivideogames = useSelector(state => state.allVideogames);
  
  const [videogames, setVideogames] = useState([])
  // const videogames = [...dbvideogames, ...apivideogames];
  
  useEffect( ()=>{
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);

  useEffect( ()=>{
    setVideogames([...dbvideogames, ...apivideogames])
  }, [dbvideogames, apivideogames]);

  const searchGame = async (name)=>{
    try {
      const {data} = await axios(`http://localhost:3001/videogames?name=${name}`);
      setVideogames([...data]);
    } catch(err) {
      alert(err.message);
    }
  }

  return (
    <> 
      {
        pathname === "/home" && <Nav searchGame={searchGame}></Nav>
      }
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<HomePage videogames={videogames}/>}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </>
  );
}

export default App;
