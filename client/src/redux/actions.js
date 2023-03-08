import axios from "axios";
import { GET_ALLGAMES, CREATE_GAME, GET_GENRES } from "./type";
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
    return{
        type: CREATE_GAME,
        payload: game
    }
}

export const getAllGenres = ()=>{
    return async (dispatch)=>{
        const {data} = await axios("http://localhost:3001/videogames/genres")
        dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
}