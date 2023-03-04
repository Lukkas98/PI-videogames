import axios from "axios";
import { GET_ALLGAMES} from "./type";
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