import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./app.module.css"

const App = () => {
  const [city, setCity] = useState("kathmandu");
  let response={"coord":{"lon":85.3167,"lat":27.7167},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":287.27,"feels_like":286.36,"temp_min":287.27,"temp_max":287.27,"pressure":1014,"humidity":62,"sea_level":1014,"grnd_level":850},"visibility":7000,"wind":{"speed":4.12,"deg":280},"clouds":{"all":20},"dt":1767350961,"sys":{"type":1,"id":9201,"country":"NP","sunrise":1767316178,"sunset":1767353711},"timezone":20700,"id":1283240,"name":"Kathmandu","cod":200};
  console.log(response.t);
  const getResponse = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72f7f2f8ac1fce8742e904c653c14bc4`
      );
      console.log(res.data);
      response=res.data
      console.log(response);
      
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
const submitHandler=(e)=>{
  e.preventDefault();
  console.log("weather is updated",city);
}
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Location" onChange={(e)=>{setCity(e.target.value)}}/>
        <button onClick={getResponse}>Change</button>
      </form>
      <div className={styles.details}>
        <div className="Photos">
          <img src="https://i.pinimg.com/originals/90/85/bb/9085bb2580eee46db433164fdcca9500.gif" alt="" />
        </div>
        <div className={styles.weather}>
          <h1 style={{margin:"10px",marginLeft:"0px"}}>{city}</h1>
          <h4 style={{margin:"10px"}}>Time</h4>
          <h1 style={{margin:"10px",marginLeft:"0px"}}>Clouds</h1>
          <span style={{margin:"10px"}}>min:{response.weather.temp_min}</span> <span>max:{response.temp_max}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
