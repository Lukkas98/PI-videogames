import axios from "axios";
import { GET_ALLGAMES, CREATE_GAME } from "./type";
//, FILTER, ORDER, , GET_GAMES

export const getAllGames = ()=>{
    return async (dispatch)=>{
        const {data} = await axios("http://localhost:3001/videogames")
        dispatch({
            type: GET_ALLGAMES,
            payload: data
        })
    }
}

export const createGame = (game)=>{
    return async (dispatch) =>{
        const {data} = await axios.post("http://localhost:3001/videogames", game);
        dispatch({
            type: CREATE_GAME,
            payload: data
        })
    }
}