import { useState } from "react"
function App() {
  // let count= 5

  let [count, setcount]=useState(5)

  const add=()=>{    //increment the value 
    count=count+1
    if(count===20)
      alert("stop")
    setcount(count)      
    console.log(count)
  }
  const sub=()=>{    //Decreament the vaue
    if(count===1){
      alert("stop")
    }
    setcount(preCounter => preCounter-1)
    setcount(preCounter => preCounter-1)
    setcount(preCounter => preCounter-1)
    setcount(preCounter => preCounter-1)
    console.log(count)
  }
  return (
    <>
    <h1>Hello Avinash</h1>
    <h2>Value = {count} </h2>
    <h2>Value = {count} </h2>
    <h2>Value = {count} </h2>
    <h2>Value = {count} </h2>
    <h2>Value = {count} </h2>
    <h2>Value = {count} </h2>
    <button onClick={sub}>Click me --</button>
    <button onClick={add}>Click me ++</button>
    </>
  )
}
export default App

