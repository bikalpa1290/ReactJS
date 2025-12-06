import React from 'react'
import styles from './button.module.css'

const Button = () => {
  return (
    <div className={styles.btn}>
        <h2>This is a button</h2>
        <button>Click the actual Button</button>
    </div>
  )
}

export default Button