import {  GET_ALLGAMES, CREATE_GAME } from "./type";

const initialState = {
    allVideogames: [],
    gamesCreated: []
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {    
        case GET_ALLGAMES:
            return{
                ...state,
                allVideogames: [...state.gamesCreated, payload]
            }

        case CREATE_GAME:
            return{
                ...state,
                gamesCreated: [...state.gamesCreated, payload],
                allVideogames: [...state.allVideogames, payload]
            }
            
        default:
            return {...state}
    }
}