import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./app.module.css"
const App = () => {
  const [city, setCity] = useState("");
  const getResponse = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=72f7f2f8ac1fce8742e904c653c14bc4`
      );
      console.log(res.data);
      console.log("city is update");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
const submitHandler=(e)=>{
  e.preventDefault();
  console.log("weather is updated",city);
  setCity("");
}


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Location" value={city} onChange={(e)=>{setCity(e.target.value);}}/>
        <button onClick={getResponse}>Change</button>
      </form>
      <div className={styles.details}>
        <div className="Photos">
          <img src="https://i.pinimg.com/originals/90/85/bb/9085bb2580eee46db433164fdcca9500.gif" alt="" />
        </div>
        <div className={styles.weather}>
          <h1>Location</h1>
          <h4>Time</h4>
          <h1>Clouds</h1>
          <span>max:</span> 
          <span>min:</span>
        </div>
      </div>
    </div>
  );
};

export default App;
