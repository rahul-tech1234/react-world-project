import { use, useState } from "react";
import Country from "./Country/Country";
import "./Countries.css";
const Countries = ({countiesPromise}) => {
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags,setvisitedFlags]=useState([]);
    
    const handleVisitedCountries=(country)=>{
        const newCountryVisited=[...visitedCountries,country];
        setVisitedCountries(newCountryVisited)
    }
    
    const handleVisitedFlags=(flag)=>{
        //console.log(country.flags.flags.png)
         const newVisitedFlag=[...visitedFlags,flag];
         setvisitedFlags(newVisitedFlag)
    }
    
    const countriesData=use(countiesPromise);
    const countries=countriesData.countries;
    //console.log(countries)
    return (
        <div>
            <h1>in the country{countries.length}</h1> 
            <h3>Total Countries Visited:{visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country =><li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
             <h3>Total Visited Flags:{visitedFlags.length}</h3>
             <div className="visited-flags-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} alt="flags.flags.flags.alt" />)
                }
             </div>
            <div className="countries"> 
            {
               countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>) 
            }           
            </div>
        </div>
    );
};

export default Countries;