import { useState } from "react";
import "./Country.css";

const Country = ({country,handleVisitedCountries,handleVisitedFlags}) => {
    //console.log(handleVisitedFlags);
    const [visited,setVisited]=useState(false);
    //console.log(handleVisitedCountries)
const btnHandler=()=>{
    // if(visited){
    //     setVisited(false);
    // }else{
    //     setVisited(true);
    // }
//setVisited(visited?false:true)
setVisited(!visited);
    handleVisitedCountries(country)
}
    const countruCommonName=country.name.common;
    const countryFlag=country.flags.flags.png;
    //console.log(country.ccn3.ccn3);
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img key={country.ccn3.ccn3} src={countryFlag} alt={country.flags.flags.alt} />
            <p>Name:{countruCommonName}</p>
            <p>Area:{country.area.area} {country.area.area>300000? "Big Country":"Small Country"}</p>
            <button onClick={btnHandler}>{visited?"Visited":"Not Visited"} </button>
            <button onClick={()=>{handleVisitedFlags(countryFlag)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;