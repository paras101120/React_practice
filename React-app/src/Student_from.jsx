import { useState } from "react"

function Student_form(){

    const[Student,setStudent]=useState({name:"",age:"",course:""})
    
    return(
        <div>
            
            <input type="text"
             placeholder="Name"
             value={Student.name}
             onChange={(e)=>setStudent({...Student,name:e.target.value})} 
            />

            <input type="text"
             placeholder="Age"
             value={Student.age}
             onChange={(e)=>setStudent({...Student,age:e.target.value})}
              />

            <input type="text"
            placeholder="course"
            value={Student.course}
            onChange={(e)=>setStudent({...Student,course:e.target.value})}
            />

            <h1>student details</h1>
            <p>Name:{Student.name}</p>
            <p>Age:{Student.age}</p>
            <p>Course:{Student.course}</p>

            

        </div>
    )
}

export default Student_form;
