import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

export default function App() {
 const [id,setId]=React.useState('');
 const [url,setUrl]=React.useState('');
 const [name,setName]=React.useState('');
 const [isDanderous,setDengerous]=React.useState();
 const [nasaUrl,setNasaUrl]=React.useState();
 
 const handleChange=(e)=>{
setId(e.target.value);
  }
  
  const handleClick=()=>{
   setUrl("https://api.nasa.gov/neo/rest/v1/neo/"+id+"?api_key=NIUnLIcQQ6eQlOC1KNPximVLUF7ibPoKdmennQbe")
  
  axios.get(url).then(res=>{
    setName(res.data.name);
    setDengerous(res.is_potentially_hazardous_asteroid);
    setNasaUrl(res.data.nasa_jpl_url);
 //   console.log(res.data.estimated_diameter
      
   
  });
}
  return (
    <div className="App">
    
      <input id="input" placeholder="Enter Asteroid ID" onChange={(e)=>handleChange(e)}/>

      <button id="submit" onClick={handleClick} >Submit</button>
    <div>Name: {name}</div> 
     
    <div>nasa_jpl_url:{nasaUrl}</div> 
   <div>is_potentially_hazardous_asteroid: {isDanderous}</div> 
      
    </div>
  );


  }
