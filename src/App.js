import React, { useEffect, useState } from "react";

function App () {
  const [repos,setRepos]=useState([{}])

  useEffect(()=>{
    async function getData(){
      const response=await fetch("https://api.github.com/users/sajid-munawar/repos")
      console.log(response)
      const data2=await response.json();
      console.log(data2)
      setRepos(data2.id)

    }
    getData();
  },[])

  return (<div>
    <ul>
    {repos.map((repoObj,ind)=>{
      return <li key="ind">{repoObj.name}</li>
    })}
    </ul>
  </div>)
}
export default  App;