import React, { useState } from 'react'
import styles from  './App.module.css';

const App = () => {
  const [title, setTitle] = useState("");
  const changeTitle=(e)=>{
  setTitle(e.target.value);
}
  
  const [description, setDescription] = useState("");
  function changeDescp(e){
    setDescription(e.target.value);
}
const deleteNote=(index)=>{
  const newTask=[...task]
  newTask.splice(index,1);
  setTask(newTask);
}
  const [task, setTask] = useState([])
  return (
    <div className={styles.mainDiv}>
      <div className={styles.formDiv}>

       <form onSubmit={(e)=>{
        e.preventDefault();
        if(!title.trim() || !description.trim())return;//guard clause
          // const prev=[...task];
          setTask(prev=>[...prev,{title,description}])
          setTitle("");
          setDescription("");
       }}>
           <input type="text" placeholder='Title'value={title} onChange={changeTitle}/>
           <textarea placeholder='Description' value={description} onChange={changeDescp}></textarea>
           <button>Add Note</button>
        </form>
      </div>
      <div className={styles.contentDiv}>
        
          {task.map(function(e,index){
            return(   
            <div className={styles.content} key={index}>      
              <div className={styles.title} style={{fontSize:"15px",fontWeight:"bold"}}>{e.title}</div>
              <div className={styles.descp}>{e.description}</div>
              <span onClick={()=>{deleteNote(index)}}>Delete</span>
            </div>
            )               
          })}
        </div>
      
    </div>
  )
}

export default App;

