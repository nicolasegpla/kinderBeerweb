import { useState } from 'react'
import logoKinderBeer from '../assets/logo small kinder beer.png'
function NavMobile() {
    return (
        <>
            <nav className='nav'>
                <img className='nav__logo' src={logoKinderBeer} alt="Logo de la empresa kinder beer" />
                <img className='nav__menu' src="/src/assets/menu-kinder-beer.svg" alt="menu desplegable" />
        
            </nav>
        </>
    );

}

export { NavMobile }