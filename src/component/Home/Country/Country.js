import React from 'react';
import './Country.css'

const Country = ({data}) => {
    // console.log(data)
    const {name, flags} = data;

    return (
        <div className='Country'>
            <h2>{name.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;