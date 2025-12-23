import React, { useEffect, useState } from 'react'
import styles from "./App.module.css"
import axios from 'axios'
const App = () => {
  const [response, setResponse] = useState([]);
  const getData=async()=>{
  const {data}=await axios.get("https://picsum.photos/v2/list?page=2&limit=20")
  setResponse(data);
  }

  useEffect(()=>{
    getData();
  },[])
  let printUserImage="no user Image"
  if (printUserImage.length>0){
    printUserImage=response.map((elem,idx)=>{
      return <a href={elem.url} target="_blank">
      <div className={styles.imgDiv} key={idx} >
        <img src={elem.download_url} alt="No image found" />
        <h3 style={{display:"inline"}}>{elem.author}</h3>
      </div>
      </a>
    })
  }
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        {printUserImage}
      </div>
    </div>
  )
}

export default App