import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
import 'remixicon/fonts/remixicon.css'

const Form = () => {
  const [isComplete, setIsComplete] = useState(()=>{
    const iscomplete=localStorage.getItem("iscomplete");
    return iscomplete?JSON.parse(iscomplete):false;
  });
  useEffect(() => {
  localStorage.setItem("iscomplete", JSON.stringify(isComplete));
}, [isComplete]);
  return (
    <div className={styles.formDiv}>
      <i className={`ri-close-circle-fill ri-2x ${styles.icon1}`}></i>

      <input type="text" placeholder="Write task" className={isComplete==false?styles.inputIncomplete:styles.inputComplete} />

      <i className={`ri-checkbox-fill ri-2x ${styles.icon2}`}
      onClick={()=>
      {setIsComplete(prev=>!prev);}
      }></i>
    </div>
  )
}

export default Form
