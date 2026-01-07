import React from 'react'
import styles from "./app.module.css"
import Body from "./assets/Components/Body"
import Adder from './assets/Components/Adder'
const App = () => {
  return (
    <div className={styles.mainDiv}>
        <Body />
    </div>
  )
}

export default App