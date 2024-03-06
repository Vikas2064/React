import { useEffect, useState } from 'react';
import './App.css';

///hooks 
function useTodos() {
  const [todos, settodos] = useState([{
    title: "go to gym",
    description: "go to gym at 7 pm ",
    id: 1
  }])
  useEffect(() => {
    fetch("http://localhost:5000/todo", { method: "GET" }).then((response) => {
      response.json().then((res) => {
        // console.log(res)
        settodos(res)
      });
    });

  // if there is some changes occurs in to the backend side then we have to refresh it to see the new
  // new content 
  // if we want to update it automatically then we can use setTimeInterval api
    setInterval(()=>{
      fetch("http://localhost:5000/todo", { method: "GET" }).then((response) => {
        response.json().then((res) => {
          // console.log(res)
          settodos(res)
        });
      });
 
    },1000)
     }, [])
  return todos;
}

function App() {

  const todos=useTodos()

  return (
    <>
      <h1>hi there</h1>
      {
        todos.map((item) => {
          return <>
                  {item.title}
                  {item.description}
                  <button>Delete</button>
                  <br />
            </>
        })
      } 
    </>
  )
}



export default App
