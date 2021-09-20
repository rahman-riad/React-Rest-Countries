import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    // Load API Data
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h2>React Rest Countries API</h2>
            <h4>Available Country: {countries.length}</h4>
            {
                countries.map(country => <Country country={country} ></Country>)
            }
        </div>
    );
};

export default Countries;