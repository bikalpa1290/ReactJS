import React from 'react'
import styles from './right.module.css'
import Card from './Card'
import Left from './Left'
const Right = (props) => {
  return (
  <div className={styles.container}>
      {props.Task.map(function(elem){
        return <Card key={elem.key} head={elem.heading} body={elem.description}/>
      })}
  </div> 
  )
}

export default Right