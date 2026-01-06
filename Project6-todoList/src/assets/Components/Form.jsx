import React from 'react'
import styles from "./styles.module.css"
const Form = () => {
  return (
    <div className={styles.formDiv}>
        <input type="text" placeholder='Write task'/>
        <i class="ri-close-circle-line"></i>
    </div>
  )
}

export default Form