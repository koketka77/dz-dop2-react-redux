import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const HeaderComponent = () => {
    return (
        <div className='header'>

            <Link to={'/'} > <span>Main</span></Link>
            <Link to={'hdgsavj'}><span>About</span> </Link>
            <Link to={'/'}> <span>Posts</span></Link>
        </div>
    );
}

export default HeaderComponent;
