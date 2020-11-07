import React, { useEffect, useState } from "react"
function App() {
  let data={title:"waiting for data"}
  const [todo,setTodo]=useState(data)
  const [isFetching,setFetching]=useState(true)
    useEffect(() => {
        async function getData() {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            console.log(response)
            const data =await response.json();
            console.log(data)
            setTodo(data)
            setFetching(false)
        }
        getData();
    },[3])
    if(isFetching){
      return (<div>
        Loading Data....
      </div>)
    }

    return (<div>
        Hello fetch <br/> {todo.title}
    </div>)
}
export default App;
