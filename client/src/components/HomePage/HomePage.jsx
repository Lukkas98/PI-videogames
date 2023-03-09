import "./HomePage.modules.css"
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

    // useEffect(()=>{
    //     if (videogames.length < pageSize && page === totalPages) {
    //         setPage(1)
    //     }
    // },[videogames])

    // if(videogames.length < pageSize) setPage(1)
    return(
        <>
            <Cards videogames={videogames.slice(startIndex, endIndex)} />
            <div className="btnsPagination">
                <div className="pagination">
                    {pagination}
                </div>
                {
                    videogames.slice(startIndex, endIndex).length < pageSize ? (
                        totalPages === 1 ? null : <button onClick={()=>{setPage(page - 1)}} >Previous</button>
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
            </div>
        </>
    )
}