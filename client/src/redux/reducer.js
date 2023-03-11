import {  GET_ALLGAMES, CREATE_GAME, GET_GENRES, ORDER, FILTER, SEARCH } from "./type";

const initialState = {
    allVideogames: [],
    gamesCreated: [],
    allGenres: [],
    gamesSearch: [],
    gamesFiltered: []
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {    
        case GET_ALLGAMES:
            return{
                ...state,
                allVideogames: [...state.allVideogames, ...payload],
            }

        case CREATE_GAME:
            return{
                ...state,
                gamesCreated: [...state.gamesCreated, payload],
                allVideogames: [...state.allVideogames, payload]
            }
        
        case GET_GENRES:
            return{
                ...state,
                allGenres: payload
            }
        case SEARCH:
            return{
                ...state,
                gamesSearch: [...payload]
            }
        case FILTER:
            if(payload === "all") {
                return{
                    ...state,
                    gamesFiltered: [...state.allVideogames]
                }
            }
            if(payload === "bd"){
                let filterBdGames = state.allVideogames.filter(game =>{
                    if(game.uuid) return game
                })
                return{
                    ...state,
                    gamesFiltered: filterBdGames
                }
            }
            if(payload === "api"){
                let filterApiGames = state.allVideogames.filter(game =>{
                    if(game.id) return game
                })
                return{
                    ...state,
                    gamesFiltered: filterApiGames
                }
            }     
            
            let filterGamesApi = state.allVideogames.filter(game => {
                if(game.id){ //game api
                    for (let i = 0; i < game.genres.length; i++) {
                        if (game.genres[i].name === payload) return game;
                    }  
                }else{ //game bd
                    console.log(game.genresList);
                    if (game.genresList.includes(payload)) return game;
                }           
            })
            return{
                ...state,
                gamesFiltered: filterGamesApi
            }
        case ORDER:
            let GamesToOrder = []
            let gamesOrdered = []
            state.gamesFiltered.length ? GamesToOrder= [...state.gamesFiltered] : GamesToOrder = [...state.allVideogames];

            if (payload === "A-Z") {
                gamesOrdered = GamesToOrder.sort((a,b)=>{
                    return a.name.localeCompare(b.name);
                })
            }else if(payload === "Z-A"){
                gamesOrdered = GamesToOrder.sort((a,b)=>{
                    return b.name.localeCompare(a.name);
                })
            }else if(payload === "ascending"){
                gamesOrdered = GamesToOrder.sort((a,b)=>{
                    return b.rating - a.rating
                })
            }else if(payload === "descending"){
                gamesOrdered = GamesToOrder.sort((a,b)=>{
                    return a.rating - b.rating
                })
            }
            return{
                ...state,
                gamesFiltered: gamesOrdered
            }

        default:
            return {...state}
    }
}