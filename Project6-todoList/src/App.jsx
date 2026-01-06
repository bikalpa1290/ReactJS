import React from 'react'
import styles from "./app.module.css"
import Body from "./assets/Components/Body"
const App = () => {
  return (
    <div className={styles.mainDiv}>
      {/* <div style={{display:"flex",justifyContent:"center",marginTop:"10%"}}> */}
        <Body />
      {/* </div> */}
    </div>
  )
}

export default App