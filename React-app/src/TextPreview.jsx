import { useState } from "react";

function TextPreview(){
    const[Message,setMassage]=useState("")

    return(
        <div>
            <input type="text" value={Message} onChange={(e)=>setMassage(e.target.value)}/>
            <p>Message:{Message}</p>
        </div>
    )
}

export default TextPreview;