import "./Detail.modules.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
        <div>
            {
                game.name ? (
                    <> 
                        <p>{game.name}</p>
                        <img className="img" src={game.image || imgDefault} alt="img"/>

                        {
                            game.genresList ? (
                                game.genresList.map( (genre, i) => <span key={i}>{genre}</span>)
                            ) : (
                                game.genres.map( (genre, i) => <span key={i} >{genre.name}</span>)
                            )
                        }
                        {
                          Array.isArray(game.platforms) ? (
                            game.platforms.map((platform, i) => <span key={i}>{platform.name}</span>)
                          ) : (
                            <p>{game.platforms}</p>
                          )
                        }
                        <p><span dangerouslySetInnerHTML={{__html: game.description}}></span></p>
                        <p>{game.releaseDate}</p>
                        <p>{game.rating}</p>
                    </>
                ) : (
                    <p>No hay nada pibe</p>
                )
            }
        </div>
    )
}