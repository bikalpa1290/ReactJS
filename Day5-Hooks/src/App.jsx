import React, { useState } from 'react'
import styles from './assets/components/counter.module.css';
const App = () => {
  // const [val, setVal] = useState(0)
  // const incVal=()=>{
  //   setVal(val=>val+1)
  // }
  // const decVal=()=>{
  //   setVal(val=>val-1)
  // }
  // const reset=()=>{
  //   setVal(0)
  // }
  const initObj={Name:"Bikalpa",Age:20,income:"0000"}
  const initArr=[10,20,30]
  const [user, setUser] = useState({Name:"Bikalpa",Age:20,income:"0000"})
  const [array, setArray] = useState([10,20,30])
  function newArray(){
    const newArr=[...array]
    newArr.push(40)
    setArray(newArr)
  }
  const changeobj=()=>{
    // const newuser={...user}
    // newuser.Name="Bikalpa Adhikari"
    setUser(prev=>({...prev,Age:24,Name:"Bikalpa Adhikari",income:"50 lakh per annum"}))
    // setUser(newuser)
    // console.log(newuser);
  }
  function resetAll(){
    setArray([...initArr])
    setUser({...initObj})
  }
  return (
    <div className={styles.main}>
      <h1>hello my name is {user.Name}. I am {user.Age} years old!. i earn around {user.income}</h1>
      <h2>Array = {array}</h2>
      {/* <div className={styles.text}>{val}</div> */}
        <button onClick={changeobj}>chnage Name</button>
        <button onClick={newArray}>chnage Array</button>
        <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default App