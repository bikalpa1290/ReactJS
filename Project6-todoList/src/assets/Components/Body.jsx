import React from 'react'
import styles from "./styles.module.css"
import Form from './Form'
const Body = () => {
  return (
    <div className={styles.main}>
        <h3>All task</h3>
        <Form/>
    </div>
  )
}

export default Body