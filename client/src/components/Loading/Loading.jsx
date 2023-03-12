import "./Loading.modules.css"

export default function Loading(){

    return(
        <>
            <div className="tv-container">
                <div className="tv-screen">
                    <h1 className="h1" >Search any game in the world</h1>
                    <div className="btn disabled" >Let's Start</div>
                    <div className="btn disabled">Load</div>
                    <div className="btn disabled">Exit</div>
                </div>
            </div>
        </>
    )
}