import { useState } from "react";

function Password(){
    const [Password,setPassword]=useState("React123")
    const [Show,setShow]=useState(false)

    return(
        <div>
            <p>Password</p>
            <input  type={Show?"text":"password"}
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}/>
            <p>Password:{Password}</p>
            
            <button onClick={()=>setShow(!Show)}>{Show?"hide":"show"}</button>
            
        </div>
    )
}

export default Password;