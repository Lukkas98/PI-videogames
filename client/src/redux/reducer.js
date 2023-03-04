import {  GET_ALLGAMES } from "./type";

const initialState = {
    allVideogames: [],

}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {    
        case GET_ALLGAMES:
            return{
                ...state,
                allVideogames: payload
            }
            
        default:
            return {...state}
    }
}