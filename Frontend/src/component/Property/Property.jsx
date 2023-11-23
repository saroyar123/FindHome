import React from 'react'
import "./Property.css"

const Property = ({ value }) => {
    return (
        <div className='property'>
            <div className='image'>
                <img src='' alt='img' />
            </div>
            <div className='price'>
                <h2>{value.rent}<span>/month</span></h2>
                <h3>{value.name}</h3>
                <h4>Delhi</h4>
                <div className='bordered'></div>
            </div>
            

            <div className='details'>
                <span>Beds</span>
                <span>Beds</span>
                <span>{value.area}</span>

            </div>
        </div>

    )
}

export default Property