// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  let data={title:"waiting for data"}

  const [todo,setTodo]=useState(data)
  useEffect(()=>{

    async function getData(){

      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log("response= ", response)
      const data = await response.json()
      setTodo(data);
      console.log("Data= ", data)
    }
    getData();
  })



  return (
    <div>
      Hello fetch <br/>
      <span>Title: {todo.title}</span>

    </div>
  );
}

export default App;
