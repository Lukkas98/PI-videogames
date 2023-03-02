import { CREATE_GAME, FILTER, ORDER, DELETE_GAME, GET_GAMES } from "./type";

const initialState = {
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {
        case CREATE_GAME:
              
        case DELETE_GAME:        
            
        case GET_GAMES:
            
        case FILTER:
            
        case ORDER:
           
        default:
            return {...state}
    }
}