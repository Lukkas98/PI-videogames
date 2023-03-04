import "./Nav.modules.css"
import SearchBar from "../SearchBar/SearchBar";

export default function Nav( {searchGame} ){

    return(
        <>
            <h5 style={{textAlign: "center"}}>Para Pruebas</h5>
            <SearchBar searchGame={searchGame} />    
        </>
    )
}