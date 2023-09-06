import logoKinderBeer from '../assets/logo small kinder beer.png'
import menuKinderBeer from '../assets/menu-kinder-beer.svg'
function NavMobile() {
    return (
        <>
            <nav className='nav'>
                <img className='nav__logo' src={logoKinderBeer} alt="Logo de la empresa kinder beer" />
                <img className='nav__menu' src={menuKinderBeer} alt="menu desplegable" />
        
            </nav>
        </>
    );

}

export { NavMobile }