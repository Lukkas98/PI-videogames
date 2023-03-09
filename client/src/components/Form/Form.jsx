import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.modules.css"
import validate from "./validation"
import {createGame} from "../../redux/actions"
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Form(){
    const dispatch = useDispatch()

    const allGenres = useSelector(state => state.allGenres)
    //otener todos los generos

    const [gameData, setGameData] = useState({
        name:"",
        description:"",
        releaseDate:"",
        rating: "",
        platforms: "",
        image: "",
        genres: []
    });

    const [ errors, setErrors ] = useState({
        name:"",
        description:"",
        releaseDate:"",
        rating: "",
        genres: "",
        image: "",
        // genres: []
    });

    const handleInputChange = (e)=>{
        setGameData({
           ...gameData,
           [e.target.name] : e.target.value
        })
        setErrors((validate(gameData)));
    }

    //estado
    const setPlatforms = (e)=>{
        if (!gameData.platforms.includes(e.target.value)) {
            setGameData({
                ...gameData,
                platforms: gameData.platforms.concat(` ${e.target.value}`)
            })
        }
    }

    const setGenres = (e)=>{
        if (!gameData.genres.includes(e.target.value)) {
            setGameData({
                ...gameData,
                genres: [...gameData.genres, e.target.value]
            })
        }else{
            let delGenre = gameData.genres.filter( genre => genre !== e.target.value)
            setGameData({
                ...gameData,
                genres: delGenre
            }) 
        }
    }
    

    const onSubmit = async (e)=>{
        e.preventDefault();
        const {data} = await axios.post("http://localhost:3001/videogames", gameData);
        
        dispatch(createGame(data));
    }

    return(
        <div className="divFormPage">
            <NavLink className="link" to="/home" >BACK HOME</NavLink>
            <div className="containerForm">
                <h2>Create a VideoGame</h2>
                <form className="form" onSubmit={onSubmit}>
                    
                    <input onChange={handleInputChange} type="text" name="name" placeholder="Name" />
                    
                    {errors.gamename && <span>{errors.gamename}</span>}
                    
                    <input onChange={handleInputChange} type="text" name="description" placeholder="description" />
                    
                    {errors.description && <span>{errors.description}</span>}
                    
                    <select onChange={setPlatforms}>
                        <option value="PC">PC</option>
                        <option value="XBOX 360">XBOX 360</option>
                        <option value="XBOX ONE">XBOX ONE</option>
                        <option value="PLAY STATION 1">PLAY STATION 1</option>
                        <option value="PLAY STATION 2">PLAY STATION 2</option>
                        <option value="PLAY STATION 3">PLAY STATION 3</option>
                        <option value="PLAY STATION 4">PLAY STATION 4</option>
                        <option value="PLAY STATION 5">PLAY STATION 5</option>
                    </select>
                    {gameData.platforms && <span className="dataSpan" >{gameData.platforms}</span>}
                    
                    <input onChange={handleInputChange} type="text" name="image" placeholder="image src" />
                    
                    {errors.image && <span>{errors.image}</span>}
                    
                    <input onChange={handleInputChange} type="text" name="releaseDate" placeholder="releaseDate" />
                    
                    {errors.releaseDate && <span>{errors.releaseDate}</span> }
                    
                    <input onChange={handleInputChange} type="text" name="rating" placeholder="rating" />
                    
                    {errors.rating && <span>{errors.rating}</span> }

                    
                    <select onChange={setGenres} defaultValue="Genres" >
                        {
                        allGenres.length && allGenres.map((genre, i) => {
                            return <option key={i}>{genre.name}</option>;
                        })
                        }
                    </select>
                    
                    {gameData.genres && <span className="dataSpan">{gameData.genres}</span>}
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}