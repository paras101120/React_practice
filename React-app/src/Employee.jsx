function Employee({Name,Role,Salary,Experience,Status="Inactive"}){

    return(
        <div>
            <p>Name:{Name}</p>
            <p>Role:{Role}</p>
            <p>Salary:{Salary}</p>
            <p>Experience:{Experience}</p>
            <p>Status:{Status}</p>

             
            {Status==="Active"?(<p style={{color:"green"}}>Active</p>):(<p style={{color:"red"}}>Inactive</p>)}


        </div>

        
    )

}

export default Employee;