import { useState } from "react";
function StudentProfile(){

    const [student, setStudent] = useState({
    name: "Rahul",
    age: 21,
    course: "React"
    });

    return(
        <div>
            <p>Name:{student.name}</p>
            <p>age:{student.age}</p>
            <p>course:{student.course}</p>

             <button onClick={() => setStudent({...student, name: "Amit"})}>
    changeName
</button>
              <button onClick={()=>setStudent(prev=>({...prev,age:prev.age+1}))}>increase</button>
              <button onClick={() => setStudent({...student, course: "Node.js"})}>
    changeCourse
</button>


        </div>
    )
}

export default StudentProfile;