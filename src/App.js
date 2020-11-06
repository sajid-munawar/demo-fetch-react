// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  let data={title:"waiting for data"}

  const [todo,setTodo]=useState(data)
  const [isFetching,setFetching]=useState(true);
  useEffect(()=>{

    async function getData(){
      setFetching(true);
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log("response= ", response)
      const data = await response.json()
      setTodo(data);
      setFetching(false);
      console.log("Data= ", data)
    }
    getData();
  },[6])
if(isFetching){
  return <div>
    Data Loading...
  </div>
}


  return (
    <div>
      Hello fetch <br/>
      <span>Title: {todo.title}</span>

    </div>
  );
}

export default App;
