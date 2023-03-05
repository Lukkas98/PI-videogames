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
                allVideogames: state.gamesCreated.concat(payload)
            }

        case CREATE_GAME:
            return{
                ...state,
                gamesCreated: state.gamesCreated.concat(payload),
                allVideogames: state.allVideogames.concat(payload)
            }
            
        default:
            return {...state}
    }
}