// import { useState } from "react"
import { useState } from "react"
import Cards from "../Cards/Cards"

export default function HomePage ({videogames}){

    const [page, setPage] = useState(1);
    const pageSize = 15;

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    //paginado dinamico
    const totalPages = Math.ceil(videogames.length / pageSize);
    let pagination = []
    for (let i = 1; i <= totalPages; i++) {
        pagination.push(
            <button key={i} onClick={() => setPage(i)} >{i}</button>
        )
        
    }

    // const [videoGames, setVideoGames] = useState([])
    return(
        <>
            <h1>Home Page</h1>
            <Cards videogames={videogames.slice(startIndex, endIndex)} />
            {pagination}

            {
                videogames.slice(startIndex, endIndex).length < pageSize ? (
                    <button onClick={()=>{setPage(page - 1)}} >Previous</button>
                ) : (
                    page === 1 ? (
                        <button onClick={()=>{setPage(page + 1)}} >Next</button>
                    ) : (
                        <>
                            <button onClick={()=>{setPage(page - 1)}} >Previous Page</button>
                            <button onClick={()=>{setPage(page + 1)}} >Next Page</button>
                        </>
                    )
                )       
            }
        </>
    )
}