import { useState } from "react"

function Counter5(){

    const [count,SetCount]=useState(0)

    function increase(){
        SetCount(prev=> prev+1)
    }

    function decrease(){
        SetCount(prev=> prev>0?prev-1:0)
    }

    function add(){
        SetCount(prev=> prev+5)
    }

    function sub(){
        SetCount(prev=> prev>5?prev-5:0)
    }

    function reset(){
        SetCount(0)
    }




    return(
        <div>
            <h2>count:{count}</h2>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={add}>add 5</button>
            <button onClick={sub}>sub 5</button>
            <button onClick={reset}>reset</button>
        </div>

    )
}

export default Counter5;