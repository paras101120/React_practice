import { useState } from "react"

function StudentList(){

    const [student,setStudent]=useState([
        "Rahul",
        "Amit",
        "Priya"
    ])

    const removeamit=()=>{
        setStudent(prev=>prev.filter(student=>student!=="Amit"))
        
        
    }
    return(
        <div>
            {student.map((student,index)=>(
                <p key={index}>{student}</p>
            ))}

            <button onClick={()=>setStudent(prev=>[...prev,"Neha"])}>Add Neha</button>
            <button onClick={()=>setStudent(prev=>[...prev,"Karan"])}>Add Karan</button>
            <button onClick={removeamit}>Remove Amit</button>
            <button onClick={()=>setStudent([])}>All Clear</button>

        </div>
    )
}

export default StudentList;