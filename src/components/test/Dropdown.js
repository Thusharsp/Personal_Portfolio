import React, {useState} from 'react';

const countries = [
    { name: 'India', value: 'IN', cities: ['Bangalore', 'Mumbai'] },
    { name: 'Pakistan', value: 'PK', cities: ['Lahore', 'Karachi'] },
  ];
  
  const Dropdown = ()=> {

    const [Selectedcountry, setselectedcountry] = useState("");
    const [selectedcities, setselectedcities] = useState("");

    const handlecountrychange=(event)=> {
        setselectedcountry(event.target.value);
        setselectedcities('');
    }

    const handlecityChange=(event)=>{
        setselectedcities(event.target.value);
    }

    return(
        <div>
           <label>Select Country:</label>
           <select id='country' value={Selectedcountry} onChange={handlecountrychange}>
            {countries.map((country) => {
                return(<option key={country.value} value={country.value}> {country.name} </option>)
            })}
           </select>

           {Selectedcountry && (
            <div>
                <label>Select Cities</label>
                <select id='cities' value={selectedcities} onChange={handlecityChange}>
                    {countries
                    .find((country)=> country.value === Selectedcountry)
                    .cities.map((city)=>(
                        <option key={city} value={city}> {city} </option>
                    ))
                    }
                </select>
            </div>
           )}

           {Selectedcountry && selectedcities && (
            <div>
                You selected: {selectedcities} in {Selectedcountry}
            </div>
           )}
        </div>
    )
  }

  export default Dropdown