import React from 'react'
import styles from './right.module.css'
// import Rightcard from './Rightcard'
const Rightcardcont = (props) => {
  return (
        <div className={styles.absdiv}>
            <h2 style={{backgroundColor:'white',width:'40px',justifyContent:'center',display:'flex',borderRadius:'30px',alignItems:"center",padding:'5px'}}>{props.id}</h2>
            <div>
              <p className={styles.text}>{props.intro}</p>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'7px'}}>
                  <button className={styles.button1}>{props.tag}</button>
                  <button className={styles.button1} style={{padding:'5px',height:'30px',width:'30px'}}><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>    
  )
}

export default Rightcardcont