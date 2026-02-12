import React from 'react'
import Navbar from "../src/assets/Components/Navbar"
import Footer from "../src/assets/Components/Footer"
import styles from "./app.module.css"
const App = () => {
  return (
    <div className={styles.main}>
      <Navbar />
      <Footer />
    </div>
  )
}

export default App