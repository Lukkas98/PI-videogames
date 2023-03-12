import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Cards.modules.css"

export default function Cards( {videogames, error} ){

    return(
        <div className="divFlex">
            {
                videogames.length ? (
                    error ? <p>There're no games with the name {videogames[0].error}</p>
                    : videogames.map( (game, i) => {
                        return( 
                            <Card key={i} game={game}/> 
                        )
                    })
                ) : (
                    <p>There're no VideoGames here</p>
                )
            }
            
        </div>
    )
}