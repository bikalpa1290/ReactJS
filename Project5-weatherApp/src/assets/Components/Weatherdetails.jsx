import React from 'react'
import styles from "../../app.module.css"
const Weatherdetails = (props) => {
  return (
        <div className={styles.weather}>
          <h1 style={{margin:"10px",marginLeft:"0px"}}>{props.name}</h1>
          <h4 style={{margin:"10px"}}>  {new Date(props.dt * 1000).toLocaleString("en-US", {
    timeZone: "Asia/Kathmandu"
  })}</h4>
          <h1 style={{margin:"10px",marginLeft:"0px"}}>clouds:{props.clouds}%</h1>
          <span style={{margin:"10px"}}>min:{props.temp_min}</span> <span>max:{props.temp_max}</span>
        </div>        
  )
}

export default Weatherdetails