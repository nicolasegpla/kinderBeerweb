import logoKinderBeer from '../assets/logo small kinder beer.png'
import logoInstagram from '../assets/instagram.svg'
import logoWhatsapp from '../assets/whatsappNav.svg'
function NavMobile({whatsApp, instagramGo}) {
    return (
        <>
            <nav className='nav'>
                <img className='nav__logo' src={logoKinderBeer} alt="Logo de la empresa kinder beer" />
                <div className='nav__div'>
                    <img onClick={whatsApp} className='nav__div__social' src={logoWhatsapp} alt="logo whatsapp" />
                    <img onClick={instagramGo} className='nav__div__social' src={logoInstagram} alt="logo instagram" />
                </div>
                
        
            </nav>
        </>
    );

}

export { NavMobile }