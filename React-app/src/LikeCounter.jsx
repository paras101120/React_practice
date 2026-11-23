import { useState } from "react"

function LikeCounter(){
    const [likes, setlikes]=useState(0)

    function increase(){
        setlikes(prev=> prev+1)
    }

    function decrease(){
        if(likes>0){
            setlikes(likes - 1)
        }
       
    }

    function reset(){
        setlikes(0)
    }

    return(
        <div>
            <h2>❤️:{likes}</h2>
            <button onClick={increase}>like</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>dislike</button>

        </div>
    )
}

export default LikeCounter;