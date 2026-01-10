import React, { useState } from 'react'
import styles from "./styles.module.css"
import 'remixicon/fonts/remixicon.css'

const Form = ({id,deletForm}) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <div className={styles.formDiv}>
      <i className={`ri-close-circle-fill ri-2x ${styles.icon1}`} onClick={()=>{deletForm(id)}}></i>
      <input type="text" placeholder="Write task" className={isComplete==false?styles.inputIncomplete:styles.inputComplete} />
      <i className={`ri-checkbox-fill ri-2x ${styles.icon2}`}
      onClick={()=>
      {setIsComplete(prev=>!prev);}
      }></i>
    </div>
  )
}

export default Form
