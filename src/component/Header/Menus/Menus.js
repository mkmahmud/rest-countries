import React from 'react';
import { Link } from 'react-router-dom';
import './Menus.css'

const Menus = () => {
    return (
       <div className="menus">
         <ul>
                    <li><Link to=''>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/ourWork'>Our Work</Link></li>
        </ul>
       </div>
    );
};

export default Menus;