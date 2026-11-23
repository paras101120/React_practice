import { useState } from "react"

function Notification(){

    const [show ,setShow]=useState(false);

    return(
        <div>
            {show && <p>you have new massge!!</p>}
            <button onClick={()=>setShow(!show)}>{show?"hide Ntification":"show Notification"}</button>
        </div>

    )
}

export default Notification;