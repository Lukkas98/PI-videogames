import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function SearchBar({ searchGame }){

    const [videogame, setVideogame] = useState("")

    const onChange = (e)=>{
        setVideogame(e.target.value)
    }

    return(
        <>
            <NavLink className="links" to="/" >Landing Page</NavLink>
            <NavLink className="links" to="/home" >Home Page</NavLink>
            <NavLink className="links" to="/create" >create game</NavLink>
            <div>
                <input type="text" onChange={onChange} placeholder="Hola" />
                <button onClick={()=>searchGame(videogame)}>Search</button>
            </div>  
        </>
    )
}