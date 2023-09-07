import beerButton from '../assets/beerButtonsvg.svg'
import rowUp from '../assets/rowup.svg'

function Footer() {
    return(
        <>
            <section className='section--footer'>
                <h2 className='section--footer__h2'>!Hablemos!</h2>
                <button className='section--footer__button--contacto'>
                    <p className='section--footer__button--contacto__p'>Contáctanos</p>
                    <img className='section--footer__button--contacto__img' src={beerButton} alt="logo boton de contactanos" />
                </button>
                {/*<article className='section--footer__article--menu'>
                    <ul className='section--footer__article--menu__ul'>
                        <li>Acerca del curso</li>
                        <li>FAQ</li>
                        <li>Eventos</li>
                        <li>Blog</li>
                    </ul>
    </article>*/}
                <p className='section--footer__p--contact'>Teléfono: +57 3164626774 /+ 60(1) 8064045</p>
                <p className='section--footer__p--correo'>kinderbeer@kinderbeer.com</p>
                <button className='section--footer__button--inicio'>
                    <img className='section--footer__button--inicio__img' src={rowUp} alt="logo flecha inicio de pagina" />
                </button>
            </section>
        </>
    )
}

export { Footer }