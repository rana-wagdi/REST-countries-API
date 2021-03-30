import React, {useState, useEffect} from 'react'

const url = "https://restcountries.eu/rest/v2/all"

const Countries = () => {
    const [countries, setCountries] = useState([])

     const fetchCountryData = async () => {
            const response = await fetch(url)
            const countries = await response.json()
            setCountries(countries)
            console.log(countries)
     }
    useEffect( () => {
        fetchCountryData()
        
    }, [])



    return (
        <div>
            {countries.map((country) => {
                const { numericCode, name, population, region, capital, flag } = country
                return (
                  <article key={numericCode}>
                    <div>
                      <img src={flag} alt={name}></img>
                      <h3>{name}</h3>
                      <h4>Population: {population}</h4>
                      <h4>Region: {region}</h4>
                      <h4>Capital: {capital}</h4>
                    </div>
                  </article>
                );
            })}
        </div>
    )
}

export default Countries;
