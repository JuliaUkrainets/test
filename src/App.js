//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [filter, setFilter] = useState('');
  useEffect(()=> {
    if(filter == 'oslo') {
      fetch('./test.json')
      .then(x=> x.json())
      .then(x=> {setData(x)})
    } else {
      fetch('./test2.json')
      .then(x=> x.json())
      .then(x=> {setData(x)})
    }
   
  }, [filter])

  return (
    <div className="App">
      {/* <input value={filter} onChange={e=> 
        setFilter(e.target.value)}/> */}
        <button onClick={e=> setFilter('oslo')}>Oslo</button>
        <button onClick={e=> setFilter('trondheim')}>Trondheim</button>
      {
        data && data.properties.timeseries.slice(0, 1)
        // .filter(x=>x.category.includes(filter))
        .map((x, index) =>
          {
          
      
          return <div key={index}>
                {/* {console.log()} */}
                
                <div style={{height: 20}}>temperatura{x.data.instant.details.air_temperature}</div>
                <div>skyggat{x.data.instant.details.cloud_area_fraction}</div>
                <div>fuktighet{x.data.instant.details.relative_humidity}</div>
                <div>vindretning{x.data.instant.details.wind_from_direction}</div>
                <div>vindt hastighet{x.data.instant.details.wind_speed}</div>
          </div> 
          }
          )}
      </div>
  );
}

export default App;
