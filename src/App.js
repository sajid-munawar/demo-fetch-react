import React, { useEffect, useState } from "react";

function App () {
  const [repos,setRepos]=useState([{}])
  const [isFetching,setFetching]=useState(true)


  useEffect(()=>{
    async function getData(){
      const response=await fetch("https://api.github.com/users/sajid-munawar/repos")
      console.log(response)
      const data2=await response.json();
      setFetching(false);
      console.log(data2)
      setRepos(data2)

    }
    getData();
  },[])
  if(isFetching){
    return <div><h2>Loading....</h2></div>
  }

  return (<div>
    <h1>Repositories list</h1>
    <ul>
    {repos.map((repoObj,ind)=>{
      return <li key={ind}>{repoObj.name}</li>
    })}
    </ul>
  </div>)
}
export default  App;