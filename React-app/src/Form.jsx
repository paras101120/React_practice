import { useState } from "react"

function Form(){
    const [Name,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    const[Submit,setSubmit]=useState(false)

     function reset(){
        setName("")
        setEmail("")
        setPassword("")
        setSubmit(false)

     }


    return(
        <div>
            <input type="text" placeholder="Name" value={Name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="*******" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={()=>setSubmit(true)}>Submit</button>
            {Submit && <div>
                <h2>Registeration Detail</h2>
               <p>Name:{Name}</p>
                <p>Email:{Email}</p>
                <p>Password:{Password}</p>
                </div>}
                <button onClick={reset}>Reset</button>


            
        </div>
    )
}

export default Form;