import React from 'react';
import logo from '../../img/logo.png'
import './Header.css'


const Header = (props) => {
//    console.log(props)
    return (
        <div className='mainHeader'>
            <div className='Header'>
                <img src={logo} alt="" />
                <h2>Rest Countries </h2>
                <input type="text" onClick={props.data} placeholder='Search Your Country' />
            </div>
        </div>
    );
};

export default Header;