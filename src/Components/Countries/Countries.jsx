import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries.css'


const Countries = () => {
  const [countries,setCountries] = useState([]);
  const [visitedCountries,setVisitedCountries] = useState([]);
  const [visitedFlags,setvisitedFlags] = useState([]);


  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((res => res.json()))
    .then(data => setCountries(data));
  },[])

  const handleVisitedCountries = (country) =>{
    const newVisitedCountries = [...visitedCountries,country];
    setVisitedCountries(newVisitedCountries);
  } 

  const handleVisitedFlags = (flag) => {
    setvisitedFlags([...visitedFlags,flag])
  }


  return (
    <div>
        <h3>Countries: {countries.length}</h3>
        <div>
          <h4>Visited Countries: {visitedCountries.length}</h4>
          <ul>
            {visitedCountries.map(country => {
            return <li key={country.name.cca3}>{country.name.common}</li>
            })}
          </ul>
        </div>
        <div>
          <h4>Visited Flags: {visitedFlags.length}</h4>
          <div className="flag-container">
            {visitedFlags.map((flag,inx) => <img key={inx} src={flag}></img>)}
          </div>
        </div>
        <div className="card-container">
        {countries.map(country => <Country
         key={country.cca3} 
         handleVisitedCountries = {handleVisitedCountries}
         handleVisitedFlags = {handleVisitedFlags}
         country={country}/>)}
        </div>
    </div>
  );
};

export default Countries;
