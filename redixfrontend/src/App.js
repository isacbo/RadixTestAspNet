import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log("Hello there");
    fetch("http://server/WeatherForecast").then( res => res.json()).then(data => setState(
      JSON.stringify( data)
      ));
  }, []);
  return (
    <div className="App">
      <h1>Hello there</h1>
      {state}
    </div>
  );
}

export default App;
