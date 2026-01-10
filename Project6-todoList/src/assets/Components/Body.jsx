import React, { useState } from 'react'
import styles from "./styles.module.css"
import Form from './Form'
import Adder from './Adder'
const Body = () => {
  const [form, setForm] = useState([]);
  const addForm=()=>{
    setForm(prev=>[...prev,prev.length])
    console.log(form);
  }
  const deletForm=(id)=>{
    let newform=form.filter(item=>item!==id)
    setForm(newform)
    console.log(form);
  }
  return (
    <div className={styles.main}>
        <h3>All task</h3>
        {form.map(id=>{
          return(
          <div>
            <Form key={id} deletForm={deletForm} id={id}/>
          </div>)
        })}
        <div className={styles.add}>
          <Adder onAdd={addForm}/>
        </div>
    </div>
  )
}

export default Body