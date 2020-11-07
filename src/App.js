import React, { useEffect, useState } from "react"
function App() {
  let data={title:"waiting"}
  const [todo,setTodo]=useState(data)
  const [isFetching,setFetching]=useState(true)
  useEffect(() => {
    async function getData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      console.log(response)
      const data2=await response.json()
      setTodo(data2)
      setFetching(false)
    }
    getData();
  },[])
  if (isFetching){
    return (<div>
      Data loading...
    </div>)
  }
  return (<div>
    Hello 
    <br/> {todo.title}
  </div>)
}
export default App;