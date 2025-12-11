import React from 'react'
import styles from './right.module.css'
import Card from './Card'
const Right = () => {
  return (
  <div className={styles.container}>
      <Card />
      <Card />
      <Card />  
      <Card />
  </div> 
  )
}

export default Right