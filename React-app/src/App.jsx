import {useState} from 'react';
import Bookinfo from './BookCounter';
import BookCounter from './BookCounter';
import BookPriceCalculator from './BookPriceCalculator';
import Student from './student';
import Company from './Company';
import Student1 from './Student1';
import Product from './Product';
import Employee from './Employee';
import Counter from './Counter';
import LikeCounter from './LikeCounter';
import Counter5 from './Counter5';
import Student2 from './Student2';
import StudentProfile from './StudentProfile';
import StudentList from './StudentList';
import Login from './login';
import Notification from './Notification';
import Password from './Password';
import TextPreview from './TextPreview';
import Form from './Form';
import Student_form from './student_from';
import Employee_from from './Employee_form';

function App(){
  const [value, setValue] = useState('');

  return (
    <div>
      <h1>Welcome to the App Component</h1>
      <input type ="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter text..."/>
      <p>You entered: {value}</p>
      <button onClick={()=>setValue('')}>Clear</button>
      <BookCounter/>
      <BookPriceCalculator/>
      <Student/>
      <Company/>

      <h1>Student list</h1>

      <Student1 Name="Rahul" Age={22} Course={"B.tech"}/>
      <Student1 Name="Amit" Age={23} Course={"BCA"}/>
      <Student1 Name="Priya" Age={21} Course={"B.Sc"}/>

      <Product name="Laptop" price={50000} category="Electronics" stock="available"/>
      <Product name="Mobile" price={20000} category="" stock="available"/>
      <Product name="shoes" price={2500} category="" stock="out of stock"/>
      <Product name="Watch" price={1500} category="" stock="available"/>


      <h1>Employee Details</h1>

      <Employee Name="Rahul" Role="Frontend Developer" Salary={30000} Experience="1 year" Status=	"Active"/>
      <hr />
      <Employee Name="Amit" Role="Backend Developer" Salary={40000} Experience="2 year" Status=	"Active"/>
      <hr />
      <Employee Name="Priya" Role="Full Stack Developer" Salary={50000} Experience="3 year" Status=	"Inactive"/>
      <hr />
      <Employee Name="Neha" Role="React Developer" Salary={35000} Experience="1 year" Status=	"Not Provided"/>
      <Counter/>

      <h1>Like Counter</h1>
      <LikeCounter/>

      <p>counter</p>
      <Counter5/>
      <br />
      <Student2/>
      <hr />
      <StudentProfile/>
      <hr />
      <StudentList/>
      <br />
      <Login/>
      <br />
      <Notification/>
      <br />
      <Password/>
      <br />
      <TextPreview/>
      <hr />
      <Form/>
      <hr />
      <Student_form/>
      <hr />
      <Employee_from/>

      


    </div>
  )
}
export default App;