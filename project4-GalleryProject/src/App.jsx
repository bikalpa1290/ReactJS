import React, { useEffect, useState } from 'react'
import styles from "./App.module.css"
import axios from 'axios'
import Photos from './assets/Components/Photos';


const App = () => {
  const [response, setResponse] = useState([]);
  const [index, setIndex] = useState(1);
  const getData=async()=>{
  const {data}=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  // console.log(data.page);
  setResponse(data);
  // console.log(data);
  }
const incIndex=()=>{
  setIndex(prev=>prev+1);
  // console.log(index);
  setResponse([])
}
const decIndex=()=>{
  if(index>1){
    setIndex(prev=>prev-1);
    setResponse([])
  }
}
  useEffect(()=>{
    getData();
  },[index]);
  let printUserImage=<h1 style={{display:"flex", justifyContent:"center", alignItems:"center", margin:"200px"}}>Loading</h1>
  if (response.length>0){
    printUserImage=response.map((elem,idx)=>{
      return (
        <Photos elem={elem} id={idx}/> )
    })
  }
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        {printUserImage}
      </div>
      <div className={styles.btn}>
        <button onClick={decIndex}>Prev</button>
        <h2>Page {index}</h2>
        <button onClick={incIndex}>Next</button>
      </div>
    </div>
  )
}

export default App