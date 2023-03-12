import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGames, getAllGames, getAllGenres, orderGames, searchByName } from './redux/actions.js';
import Landing from './components/Landing/Landing.jsx';

import imageLanding from "./assets/images/FondoLanding.jpg"

function App() {
  let body = document.querySelector("body");
  body.style.backgroundImage = `url(${imageLanding})`

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const allGames = useSelector(state => state.allVideogames);
  const gamesFilterName = useSelector(state => state.gamesSearch);
  const gamesFiltered = useSelector(state => state.gamesFiltered);
  
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);

  useEffect( ()=>{
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, [dispatch]);

  useEffect( ()=>{
    setVideogames(allGames)
    setError(false)
  }, [allGames]);
  

  useEffect( ()=>{
    setVideogames(gamesFilterName)
    setError(false)

    if([...gamesFilterName].length > 0 && [...gamesFilterName][0].error ){
      setError(true);
    } else {
      setError(false);
    }
  }, [gamesFilterName]);

  useEffect(()=>{
    setVideogames(gamesFiltered)
    setError(false)
  }, [gamesFiltered])

  const searchGame = (name)=>{
    dispatch(searchByName(name))
    setVideogames([...gamesFilterName]);
  }

  const filter = (value)=>{
      dispatch(filterGames(value))
      setVideogames([...gamesFiltered])
  }
  const order = (value)=>{
    dispatch(orderGames(value))
    // setVideogames()
  }
  
  return (
    <> 
      {
        pathname === "/home" && <Nav searchGame={searchGame}></Nav>
      }
      
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={<HomePage videogames={videogames} filter={filter} order={order} error={error}/>}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/detail/:id' element={<Detail />}/>
      </Routes>
    </>
  );
}

export default App;
