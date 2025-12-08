import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")

  const submitHandle=(e)=>{
    e.preventDefault();
    console.log("form is submitted", title);
    setTitle("");``
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandle(e);
      }}> 
        <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
          setTitle(e.target.value);
          // console.log(title);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App