import React, { useEffect, useState } from 'react'
import styles from "./app.module.css"
const App = () => {
    // localStorage.setItem("mode",false);
    const [isdark, setisDark] = useState(()=>{
        const storedMode=localStorage.getItem("mode");
        return storedMode?JSON.parse(storedMode):false;
    });
    useEffect(() => {
    localStorage.setItem("mode", isdark);
    }   , [isdark]);

  return (
    <div className={isdark==false?styles.lightMode:styles.darkMode }>
        <button onClick={()=>{setisDark(isdark=>!isdark)}}>Change Mode</button>
    </div>
  )
}

export default App