import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Menus from '../component/Header/Menus/Menus';

const Main = (props) => {
// console.log(props)
    return (
        <div>
          <Header data={props.keyPress}></Header>  
          <Menus></Menus>
          <Outlet></Outlet>
        </div>
    );
};

export default Main;