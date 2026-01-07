import React, { useState } from 'react'
import styles from "./styles.module.css"
import Form from './Form'
import Adder from './Adder'
const Body = () => {
  const [form, setForm] = useState([]);
  const addForm=()=>{
    setForm(prev=>[...prev,prev.length])
  }
  return (
    <div className={styles.main}>
        <h3>All task</h3>
        {form.map(id=>{
          return(
          <Form key={id}/>)
        })}
        <Adder onAdd={addForm}/>
    </div>
  )
}

export default Body