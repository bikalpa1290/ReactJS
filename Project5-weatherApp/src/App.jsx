import axios from "axios";
import React, { useState} from "react";
import styles from "./app.module.css"
import 'remixicon/fonts/remixicon.css'
import "leaflet/dist/leaflet.css";
import WeatherMap from "./assets/Components/WeatherMap";
import WeatherPhoto from "./assets/Components/WeatherPhoto";
import Weatherdetails from "./assets/Components/Weatherdetails";


const App = () => {
  const [city, setCity] = useState("kathmandu");
  const [response, setResponse] = useState({"coord":{"lon":85.3167,"lat":27.7167},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":287.27,"feels_like":286.36,"temp_min":287.27,"temp_max":287.27,"pressure":1014,"humidity":62,"sea_level":1014,"grnd_level":850},"visibility":7000,"wind":{"speed":4.12,"deg":280},"clouds":{"all":20},"dt":1767350961,"sys":{"type":1,"id":9201,"country":"NP","sunrise":1767316178,"sunset":1767353711},"timezone":20700,"id":1283240,"name":"Kathmandu","cod":200})
  const visibilityKm = response.visibility / 1000;
  const humidity=response.main.humidity
  let visibility;
  if(visibilityKm<2){
    visibility="low"
  }else if(2<visibilityKm<5){
    visibility="Hazy"
  }else{
    visibility="clear"
  }
  const getResponse = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72f7f2f8ac1fce8742e904c653c14bc4`
      );
      console.log(res.data);
      setResponse(res.data);
      
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };
const submitHandler=(e)=>{
  e.preventDefault();
}
  return (
    <div className={styles.mainDiv}>
      <div className={styles.div1}>
        <form onSubmit={submitHandler}>
        <input type="text" placeholder="Location" onKeyDown={(e)=>{if(e.key=="Enter"){setCity(e.target.value) ;console.log("clicked");}}}/>
        <button onClick={getResponse}>Change</button>
      </form>
      <div className={styles.details}>
          <WeatherPhoto />
          <Weatherdetails name={response.name} dt={response.dt} clouds={response.clouds.all} temp_min={response.main.temp_min} temp_max={response.main.temp_max}/>
      </div>
      </div>
    <div className={styles.div2}>
      <div className={styles.icon}>
        <span><i class="ri-windy-line"></i><p>{response.wind.speed}m/s</p></span>
        <span> <i class="ri-water-percent-line"></i><p>{humidity}%</p></span>
        <span><i class="ri-sun-fill"></i><p>{new Date(response.sys.sunrise * 1000).toLocaleTimeString()}</p></span>
        <span><i class="ri-haze-fill"></i><p>{new Date(response.sys.sunset * 1000).toLocaleTimeString()}</p></span>
      </div>
      <div className={styles.icon}>
        <span><i class="ri-focus-2-fill"></i><p>{visibility}</p></span>  
        <p style={{fontSize:"2rem",border:"2px solid white",display:"flex",alignItems:"center", padding:"3px",borderRadius:"30px"}}>Get informed by us!!</p>    
      </div>
      <div className={styles.map}>
        <WeatherMap lat={response.coord.lat} lon={response.coord.lon} city={response.name}/>
      </div>
    </div>
    </div>
  );
};

export default App;
