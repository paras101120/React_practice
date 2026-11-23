import { useState } from "react"; 
function BookCounter(){
    const booktitle="React dev"
    const author="amint"

    const [BookCount,setBookCount]=useState(8);

    function Decrease(){
        setBookCount(prev=>prev-1)
    }

    function increase(){
        setBookCount(prev=>prev+1)
    }

    return(

        <div>
            <h1>Avalibalecopice:<br></br>{BookCount}</h1>
            <p>Book Title :{booktitle}</p>
            <p>Book Auther :{author}</p>
            <button onClick={Decrease} disabled={BookCount === 0 }>Decrease --</button>
            <button onClick={increase} >increase ++</button>
        </div>

        
    )
}

export default BookCounter
