import React from 'react';
import HeaderComponent from '../../Components/HeaderComponent/HeaderComponent';
import { Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default Header;
