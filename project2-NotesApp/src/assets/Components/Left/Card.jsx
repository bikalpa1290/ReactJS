import React from 'react'
import styles from "./right.module.css"
const Card = (props) => {
  return (
    <div className={styles.card}>
        <img src='https://i.pinimg.com/736x/6b/27/eb/6b27eb7779f104ede0e869416b51245e.jpg' alt="Notes picture" />
        <div className={styles.imageDiv}>
          <div className={styles.divTitle}>{props.head}</div>
          <div className={styles.divDescrip}>{props.body}</div>
        </div>
    </div>
  )
}

export default Card