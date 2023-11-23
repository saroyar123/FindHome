import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { allProperty } from '../../Reducer/property';
import Navbar from '../Navber/Navbar';
import Search from '../Search/Search';
import Property from '../Property/Property';
import "./Home.css"

const Home = () => {
    const { loading, response } = useSelector((state) => state.allProperty);
    return (
        <div className='main_Body'>
            <Navbar />
            <div className='search_property'>

                <Search />
                {
                    loading == true || response == null ? <h1>Loading</h1> :
                        <>
                            <div className='home'>
                                {
                                    response.response.data.map((value, index) => (
                                        <Property key={index} value={value} />
                                    ))
                                }
                            </div>



                        </>

                }

            </div>

        </div>
    )
}

export default Home