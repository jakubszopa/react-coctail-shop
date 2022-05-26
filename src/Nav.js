import React from 'react';
import LoadingIcon from './LoadingIcon';
import CartonIcon from './CartIcon';

const Nav = () => {
    return <nav>
        <div className="logo">
            <LoadingIcon />
            <h3>React-Coctails</h3>
        </div>
        <CartonIcon />
    </nav>
}

export default Nav;