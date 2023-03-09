import "./Detail.modules.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import imgDefault from "../../assets/images/pngwing.com.png"

export default function Detail(){
    const { id } = useParams();

    const [game, setGame] = useState({});

    useEffect(()=>{
        async function gameData(){
            const {data} = await axios(`http://localhost:3001/videogames/${id}`);
            setGame(data);
        }
        gameData();
    },[id])

    return(
        <div className="containerDivDetail" >
            <NavLink className="link" to="/home" >BACK HOME</NavLink>
            <div className="divDetail">
                {
                    game.name ? (
                        <> 
                            <p className="title">{game.name}</p>
                            <img className="img" src={game.image || imgDefault} alt="img"/>

                            <div className="divGenres">
                                {
                                    game.genresList ? (
                                        game.genresList.map((genre, i) => <span className="genre" key={i}>{genre}</span>)
                                    ) : (
                                        game.genres.map((genre, i) => <span className="genre" key={i} >{genre.name}</span>)
                                    )
                                }
                            </div>
                            {
                            game.id && game.platforms.map((platform, i) => <span className="platform" key={i}>{platform.name}</span>)
                            }                           
                            {
                            game.uuid && <p className="platform">{game.platforms}</p>
                            }    
                            
                            <p className="description"><span dangerouslySetInnerHTML={{__html: game.description}}></span></p>
                            <p>Release Date: {game.releaseDate}</p>
                            <p>Game Rating: {game.rating}</p>
                        </>
                    ) : (
                        <p>No hay nada pibe</p>
                    )
                }
            </div>
        </div>
    )
}