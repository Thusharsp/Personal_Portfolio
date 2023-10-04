import React, {useState} from "react";

const vehicals = [
    {brand:'Hyundai', value:'HY', cars: ['Venue', 'Creta']},
    {brand:'Tata', value:'TA', cars: ['Nexon', 'Safari']},
];

const CarDropdown=()=> {

    const [Selectedbrand, setselectedbrand] = useState("");
    const [Selectedcars, setselectedcars] = useState("");

    const handlebrandchange=(event) => {
        setselectedbrand(event.target.value)
        setselectedcars('')
    }

    const handlecarchange=(event)=> {
        setselectedcars(event.target.value)
    }

    return(
        <div>
            <label>Select The car brand:</label>
            <select id='brand' value={Selectedbrand} onChange={handlebrandchange}>
                {vehicals.map((vehical) => {
                    return(<option key={vehical.value} value={vehical.value}>
                        {vehical.brand}
                        </option>)
                })}
            </select>

            {Selectedbrand && (
            <div>
                <label>Select the cars</label>
                <select id='car' value={Selectedcars} onChange={handlecarchange}>
                {vehicals
                        .find((vehical) => vehical.value === Selectedbrand)
                        .cars.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            )
                        )}
                </select>
            </div>
           ) }

            {Selectedbrand && Selectedcars && 
            <div>
                Selected: {Selectedcars} in {setselectedbrand}
            </div>
            }
        </div>
    )
}
export default CarDropdown