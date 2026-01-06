import React from 'react'
import styles from "./styles.module.css"
import Form from './Form'
import Adder from './Adder'
const Body = () => {
  return (
    <div className={styles.main}>
        <h3>All task</h3>
        <Form/>
        <Form/>
    </div>
  )
}

export default Body