import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [response, setResponse] = useState(null);

  const getResponse = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=london&appid=72f7f2f8ac1fce8742e904c653c14bc4`
      );
      setResponse(res.data); // sets the API response
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const changeCity = () => {
    if (!response) return; 
    setResponse(prev => ({ ...prev, name: "Nepal" })); 
  };

  useEffect(() => {
    getResponse(); 
  }, []);

  return (
    <div>
      <button onClick={getResponse}>Refresh Weather</button>
      <h1>City: {response?.name}</h1>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
};

export default App;
