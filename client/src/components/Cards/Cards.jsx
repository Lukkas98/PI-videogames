import Card from "../Card/Card";
import "./Cards.modules.css"

export default function Cards( {videogames} ){

    return(
        <div className="divFlex">
            {
                videogames.length ? (
                    videogames.map( game => {
                        return( 
                            <Card key={game.id} game={game}/> 
                        )
                    })
                ) : (
                    <p>There're no VideoGames here</p>
                )
            }
            
        </div>
    )
}