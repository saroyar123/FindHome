import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Search.css"

const Search = () => {

    // components for select city
    const [selectedCity, setSelectedCity] = useState("")
    const cities = ["Delhi", "Kolkata", "Mumbai", "Patna", "Noida", "Chennai", "Bangalore"]
    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    // components for select type of house
    const[selectedPropertyType,setSelectedPropertyType]=useState("")
    const propertyTypes=["1.5 BHK","2 BHK","3 BHK","4 BHK"]

    const handlePropertyChange = (e) => {
        setSelectedPropertyType(e.target.value);
    };

    // component for handel range

    const [rangeValue,setRangeValue]=useState(0);
    const rangeHandler=(e)=>{
         setRangeValue(e.target.value);
    }
   
    return (
        <div className='search'>
            <div>
                <h4>City</h4>
                <select value={selectedCity} onChange={handleCityChange}>
                    {
                        selectedCity == "" ? <option value={selectedCity}>Select Location</option> : <option value={selectedCity}>{selectedCity}</option>
                    }

                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>

            </div>
            <div>
                <h4>Available From</h4>
                <input type='date'/>
            </div>
            <div>
                <h4>Price</h4>
                <span>{rangeValue*100}</span>
                <input 
                type='range' 
                onChange={rangeHandler} 
                value={rangeValue}
                min={0}
                max={100}
                />
                
            </div>
            <div>
                <h4>Property Type</h4>
                <select value={selectedPropertyType} onChange={handlePropertyChange}>
                    {
                        selectedPropertyType == "" ? <option value={selectedPropertyType}>Select Location</option> : <option value={selectedPropertyType}>{selectedPropertyType}</option>
                    }

                    {propertyTypes.map((property, index) => (
                        <option key={index} value={property}>
                            {property}
                        </option>
                    ))}
                </select>

            </div>
                <button>Apply</button>

        </div>
    )
}

export default Search