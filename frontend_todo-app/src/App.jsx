import { useState } from 'react';
import './App.css';
function Personname(props)
{
  return <div>
        {
          props.firstname
        }
        {
          props.lastname
        } 
    </div>
}
function App() {
   const [todo,settodo]=useState({
    title:"go to gym",
    description:"go to gym at 7 pm ",
    id:1
  })
  setInterval(()=>{
    settodo(
      {
        title:"go to eat",
        description:" go to eat at 7 pm ",
        id:2
      }
    )
  },3000);
  return (
    <>
           <h1>hi there</h1>
           {
             todo.title
           }
           {
              todo.description
           }
           <Personname firstname={"Vikas"} lastname={"Kumar"}></Personname >
    </>
  )
}




export default App
