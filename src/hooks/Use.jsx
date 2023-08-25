import React, { useEffect, useState } from 'react'
import './Style.css'

const Use = () => {
  // const [User, setUser] = useState("hello world")
  // const [Name, setName] = useState("shahzaib")
  // const [Age, setAge] = useState(23)
  const [User, setUser] = useState({
    name: "shahzaib",
    age: 12,
    message: "hllo boys",
  });

  const [Mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",

  });
  const [text, setText] = useState("enable dark mode")
  const changemod = () => {
    if(Mode.backgroundColor==="white"){
    setMode({
      backgroundColor: "black",
      color: "white",
    });
    setText("enable light mode")
  }
  else{
    setMode({
      backgroundColor: "white",
      color: "black",
    })
    setText("enable dark mode")

  }

  }

  const Changemsg = () => {

    setUser({ ...User, message: 'hello ali' });

  }
  return (
    <div style={Mode}>
      <button onClick={changemod}>{text}</button>
      <h1>this is my usestate</h1>
      <h2>{User.name}</h2>
      <h2>{User.age}</h2>
      <h2>{User.message}</h2>
      {/* <button onClick={()=> setUser("hello zaibi")}>click on this</button> */}
      <button onClick={Changemsg}>submit</button>
    </div>
  )
}






export default Use