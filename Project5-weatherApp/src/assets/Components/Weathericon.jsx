import React from 'react'
import styles from "../../app.module.css"
const Weathericon = (props) => {
  return (
    <div>
        <div className={styles.icon}>
        <span><i class="ri-windy-line"></i><p>{props.winSpeed}m/s</p></span>
        <span> <i class="ri-water-percent-line"></i><p>{props.humid}%</p></span>
        <span><i class="ri-sun-fill"></i><p>{new Date(props.sunRise * 1000).toLocaleTimeString()}</p></span>
        <span><i class="ri-haze-fill"></i><p>{new Date(props.sunSet * 1000).toLocaleTimeString()}</p></span>
      </div>
      <div className={styles.icon}>
        <span><i class="ri-focus-2-fill"></i><p>{props.isVisible}</p></span>  
        <p style={{fontSize:"2rem",border:"2px solid white",display:"flex",alignItems:"center", padding:"3px",borderRadius:"30px"}}>Get informed by us!!</p>    
      </div>
    </div>
  )
}

export default Weathericon