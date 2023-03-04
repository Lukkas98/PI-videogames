import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.jsx';
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
// import axios from "axios";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from './redux/actions.js';



function App() {

  // const { pathname } = useLocation();
  const dispatch = useDispatch();
  // const [videogames, setVideogames] = useState([])
  
  const videogames = useSelector(state => state.allVideogames)
  
  useEffect( ()=>{
    dispatch(getAllGames());
  }, [dispatch]);
  
  // useEffect(()=>{
  //   console.log(videogames);
  // }, [videogames]);

  const searchGame = async (id)=>{
    // const {data} = await axios(`http://localhost:3001/videogames/${id}`);
    // setVideogames( oldValues => [...oldValues, data]);
    // dispatch(addGame(data))
  }

  return (
    <>
      <Nav searchGame={searchGame}></Nav>

      <Routes>
        <Route path="/home" element={<HomePage videogames={videogames}/>}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        
      </Routes>
    </>
  );
}

export default App;
