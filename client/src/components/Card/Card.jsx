import { NavLink } from "react-router-dom";
import "./Card.modules.css"
//recibe por parametro las props y crea la card
import imgDefault from "../../assets/images/pngwing.com.png"
export default function Card({game}){

    return(
        <div className="divCard">
            <p>{game.name}</p>
            {/* <p>Description: <span dangerouslySetInnerHTML={{__html: game.description}}></span></p> */}
            <NavLink to={`/detail/${game.id || game.uuid}`}>
                <img className="imgGame" src={game.image || imgDefault} alt="img-redundant-alt" />
            </NavLink>
            {
                game.hasOwnProperty("uuid") ? (
                    game.genresList.map( (genre, i) => <span key={i}>{genre}</span>)
                ) : (
                    game.genres.map( (genre, i) => <span key={i} >{genre.name}</span>)
                )
            }
        </div>
    )
}



// description
// : 
// "A labyrinth fades into view; a space you control but that holds you. Completely lost with nowhere else you could be.<br/><br/>Standpoint is a first-person puzzle platformer where the player possesses the ability to change the orientation of the world.  Explore the labyrinth-like environment, solving puzzles and collecting secrets, in order to overcome the stages of Grief.  And ask yourself, do the narrator's cryptic clues to the world hide some deeper sentiment?<br/><br/>With every wall potentially the floor, take advantage of the variety of ways to approach obstacles. Turn a perilous corridor of lasers into a simple pit. Break through barriers as you drift through the tunnels.  Even use death to your advantage.  When up can become down at any moment, will you fly or fall?Key Features:<ul><li>Explore physical manifestations of the stages of grief, as your environment changes to reflect the emotions<br/></li><li>Ponder puzzles which need a whole new way of thinking<br/></li><li>Experience the dynamic soundtrack as it reacts to your movements<br/></li><li>Take advantage of game elements to conquer the time-trial Leaderboards.</li></ul>"
// id
// : 
// 5
// image
// : 
// "https://media.rawg.io/media/screenshots/238/238b1d15ead30bfa1c76e3dad6365554.jpg"
// name
// : 
// "Standpoint"
// platforms
// : 
// (4) [{…}, {…}, {…}, {…}]
// rating
// : 
// 0
// releaseDate
// : 
// "2015-03-05"