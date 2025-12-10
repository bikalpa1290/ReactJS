import React from 'react'
import styles from './App.module.css';
import Left from './assets/Components/Left/Left';
import Right from './assets/Components/Left/Right';

const App = () => {
  return (
    <div className={styles.mainDiv}>
      <Left />  
      <Right />
    </div>
  )
}

export default App;
