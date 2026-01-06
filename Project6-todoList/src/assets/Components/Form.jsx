import React from 'react'
import styles from "./styles.module.css"
import 'remixicon/fonts/remixicon.css'

const Form = () => {
  return (
    <div className={styles.formDiv}>
      <i className={`ri-close-circle-fill ri-2x ${styles.icon1}`}></i>

      <input type="text" placeholder="Write task" />

      <i className={`ri-checkbox-fill ri-2x ${styles.icon2}`}></i>
      {/* <i class="ri-checkbox-fill"></i> */}

    </div>
  )
}

export default Form
