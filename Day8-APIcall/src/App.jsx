import axios from 'axios'
import { useState } from 'react';
const App = () => {
  const [Data, setData] = useState([])
 async function getData(){
    // const response=await fetch('https://jsonplaceholder.typicode.com/photos');
    // const data= await response.json()
    // console.log(data);                       //by using fetch
    // console.log(response);
  // const response=axios.get('https://jsonplaceholder.typicode.com/photos');
  // console.log((await response).data);
  const {data}=await axios.get('https://jsonplaceholder.typicode.com/photos');
  // console.log( data);
  setData(data);
  // console.log(Data);
  }


  return (
    <div>
      <button onClick={getData}>Click mee</button>
      <div>{Data.map((elem,index)=>{
        return <h3>num={index+1} helloo</h3>
      })}</div>
    </div>
  )
}

export default App