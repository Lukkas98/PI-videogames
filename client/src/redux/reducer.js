import {  GET_ALLGAMES, CREATE_GAME, GET_GENRES } from "./type";

const initialState = {
    allVideogames: [],
    gamesCreated: [],
    allGenres: []
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {    
        case GET_ALLGAMES:
            return{
                ...state,
                allVideogames: state.gamesCreated.concat(payload)
            }

        case CREATE_GAME:
            return{
                ...state,
                gamesCreated: state.gamesCreated.concat(payload)
            }
        
        case GET_GENRES:
            return{
                ...state,
                allGenres: payload
            }
            
        default:
            return {...state}
    }
}