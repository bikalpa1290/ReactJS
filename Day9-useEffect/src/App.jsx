import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(100)
  // const hello=()=>{
  //   console.log("function is running");
  // }
  // hello();
  useEffect(()=>{
    console.log("function is running");
  },[num1,num2])
  // console.log("------------------------");
  return (
    <div>
      <button onClick={()=>{setNum1(prev=>prev+1)}}>click me</button>
      <h1>{num1}</h1>
      <button onClick={()=>{setNum2(prev=>prev+1)}}>Num2</button>
      <h1>{num2}</h1>
    </div>
  )
}

export default App