import { useState } from "react"

function Employee_from(){

    const [Employee,setEmployee]=useState({name:"",age:"",role:"",salary:"",expreience:""})

    function remove(){
        setEmployee({name:"",age:"",role:"",salary:"",expreience:""})
    }
    return(
        <div>

            <input type="text" placeholder="Name" value={Employee.name} onChange={(e)=>setEmployee({...Employee,name:e.target.value})}/>
            <br />
            <input type="text" placeholder="age" value={Employee.age} onChange={(e)=>setEmployee({...Employee,age:e.target.value})}/>
            <br />
            <input type="text" placeholder="role" value={Employee.role} onChange={(e)=>setEmployee({...Employee,role:e.target.value})}/>
            <br />
            <input type="text" placeholder="salary" value={Employee.salary} onChange={(e)=>setEmployee({...Employee,salary:e.target.value})} />
            <br />
            <input type="text" placeholder="expreience" value={Employee.expreience} onChange={(e)=>setEmployee({...Employee,expreience:e.target.value})}/>
            <br />  

            <button onClick={remove}>Reset</button>

            <h2>Employee Data</h2>
            <p>Name:{Employee.name}</p>
            <p>Age:{Employee.age}</p>
            <p>Role:{Employee.role}</p>
            <p>Salary:{Employee.salary}</p>
            <p>Expreience:{Employee.expreience}</p>


        </div>
    )
}

export default Employee_from;