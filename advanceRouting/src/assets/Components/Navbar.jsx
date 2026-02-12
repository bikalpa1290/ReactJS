import React from 'react'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.main}>
        <h2>Bikalpa Adhikari</h2>
        <div className={styles.link}>
            <a href="/">Home</a>
            <a href="/">Contact</a>
            <a href="/">About</a>
        </div>
    </div>
  )
}

export default Navbar