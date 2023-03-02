import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER, GET_FAVORITES } from "./type";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {
        case ADD_CHARACTER:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }  
        case REMOVE_CHARACTER:        
            let newArray = state.myFavorites.filter(character => character.id !== payload);
            return{
                ...state,
                myFavorites: newArray,
                allCharacters: newArray
            }
        case GET_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.myFavorites, payload]
            }
            
        case FILTER:
            if(payload === "All"){
                return{
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
            }

            let filterArray = [...state.allCharacters].filter( character => character.gender === payload)
            return{
                ...state,
                myFavorites: filterArray
            }
        case ORDER:
            let copyArray
            if (state.myFavorites.length === state.allCharacters.length) {
                copyArray = [...state.allCharacters]
            }else{
                copyArray = [...state.myFavorites]
            }
            let filterid
            if (payload === "Ascendente") {
                filterid = copyArray.sort((charA, charB) => charA.id - charB.id )
            }else if( payload === "Descendente"){
                filterid = copyArray.sort((charA, charB) => charB.id - charA.id )
            }
            return{
                ...state,
                myFavorites: filterid
            }

        default:
            return {...state}
    }
}