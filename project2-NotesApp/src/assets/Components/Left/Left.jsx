import React, { useState } from 'react'
import styles from "./left.module.css"
const Left = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const setTitle = (e) => {
    setHeading(e.target.value);
  }

  const setDes = (e) => {
    setDescription(e.target.value);
  }

  return (
    <form 
        className={styles.form} 
        onSubmit={(e) => {
          e.preventDefault();
          console.log("form submitted");
          console.log(heading);
          console.log(description);
        }}
      >
        <input 
          onChange={setTitle} 
          type="text" 
          placeholder='Enter Notes Heading' 
          value={heading} 
        />

        <input 
          onChange={setDes} 
          className={styles.input2} 
          type="text" 
          placeholder='Write Details' 
          value={description} 
        />

        <button>Add your note</button>
      </form>          
  )
}

export default Left