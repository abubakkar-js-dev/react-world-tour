import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited] = useState(false);
    const handleVisitStatus = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
        handleVisitedFlags(flags.png);
    }

    return (
        <div style={visited ? {color: 'black'} : {color: 'white'}} className={`country ${visited && 'visited' }`}>
            <h3>Country: {name.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button style={visited ? {backgroundColor: 'skyblue',color: 'gray'} : {backgroundColor: 'black'}} onClick={handleVisitStatus}>{visited ? 'Visited' : 'Visit'}</button>
            <p>{visited ? 'I have visited This country' : 'I want to visit this country'}</p>
        </div>
    );
};

export default Country;