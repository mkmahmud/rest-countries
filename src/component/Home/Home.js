import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country/Country';
import './Home.css'


const Home = () => {
    const data = useLoaderData()
    return (
        <div className='Home'>
            {
                data.map(country => <Country key={country.cca3} data={country}></Country>)
            }
        </div>
    );
};

export default Home;