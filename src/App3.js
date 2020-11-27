import React, { useEffect, useState } from "react";
// const pre =(e)=>{
//   e.preventDefault();
// }
const shuffleArray = (array) =>
    [...array].sort(() => Math.random() - 0.5)

function App() {
  // let data={title:"waiting"}
  const [todo,setTodo]=useState({})
  const [isFetching,setFetching]=useState(true)
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      const data2=await response.json()
      console.log(data2)
      console.log(data2.results[1].question)
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
  console.log(todo.results[1].correct_answer)
  return (<div>
    <br/> <b>{todo.results[1].question}</b>
    <br/> {todo.results[1].category}
    {/* <br/> {todo.results[1].correct_answer}<br/> */}
    {shuffleArray(todo.results[1].incorrect_answers.concat(todo.results[1].correct_answer).map(function(value,ind){
      return <ul key={ind}><li>{value}</li></ul>
    }))}
  </div>)
}
export default App;