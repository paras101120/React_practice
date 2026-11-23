import { useState } from "react"

function Student2(){

    const [name,setName]=useState("Rahul")
    const [age,setAge]=useState(21)
    const [course,setCourse]=useState("React")

    return(
        <div>
            <p>Name:{name}</p>
            <p>age:{age}</p>
            <p>course:{course}</p>
            <button onClick={()=>setName("Amit")}>changeName</button>
            <button onClick={()=>setAge(prev=>prev+1)}>increase</button>
            <button onClick={()=>setCourse("Node.js")}>changeCourse</button>

        </div>


    )
        
    
}

export default Student2;