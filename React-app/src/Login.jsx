import { useState } from "react"

function Login(){

    const [isLogin,setisLogin]=useState(false)

    return(
        <div>
            <p>{isLogin?"Welcome User!":"Please Login"}</p>

            <button onClick={()=>setisLogin(!isLogin)}>{isLogin?"Logout":"Login"}</button>

        </div>  
    )
}

export default Login;