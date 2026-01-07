import React from 'react'
import 'remixicon/fonts/remixicon.css'
import styles from './adder.module.css';
const Adder = ({onAdd}) => {
  return (
    <div>
      <i className={`ri-add-circle-line ${styles.icon3} ri-4x`} onClick={onAdd}></i>
    </div>
  )
}

export default Adder