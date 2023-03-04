import "./Detail.modules.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail(){
    const { id } = useParams();

    const [game, setGame] = useState([]);
    
    
    useEffect(async()=>{
        const {data} = await axios(`http://localhost:3001/videogames/${id}`);
        setGame(data);
    },[])

    return(
        <div>
            <p>{game.name}</p>
            <img className="img" src={game.image}/>
        </div>
    )
}