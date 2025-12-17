import React from 'react'
import styles from  './App.module.css';
const App = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.formDiv}>
       <form>
           <input type="text" placeholder='Title' />
           <textarea placeholder='Description'></textarea>
           <button>Add Note</button>
        </form>
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div> 
        <div className={styles.content}>
          <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>Hello</div>
          <div className={styles.descp}>my name is Bikalpa Adhikari i am a very goood guyyyy</div>
        </div>                               
      </div>
    </div>
  )
}

export default App;
