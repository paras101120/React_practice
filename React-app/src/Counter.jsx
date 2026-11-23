import { useState } from "react"

function Counter(){
    const [count, setcount]=useState(0)

    function increase(){
        setcount(count + 1)
    }

    function decrease(){
        setcount(count - 1)
    }

    function reset(){
        setcount(0)
    }

    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={increase}>increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={decrease}>decrease</button>

        </div>
    )
}

export default Counter;