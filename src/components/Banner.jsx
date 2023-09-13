import iconWhatsapp from '../assets/whatsapp-kinder.svg'
import logoKinderBeer from '../assets/logo small kinder beer.png'

function Banner({ whatsApp }) {
    return (
        <>
            <section className='banner'>
                <div className='banner__div--info'>
                    <h1 className='banner__div--info__h1'>Domingo 01 de octubre 2023</h1>
                    <p className='banner__div--info__p'>Próximo curso de cervecería artesanal.</p>
                </div>
                <button onClick={whatsApp} className='banner__button'>
                    <p className='banner__button__p'>Mas información</p>
                    <img className='banner__button__img' src={iconWhatsapp} alt="imagen del logo de whatsapp" />
                </button>
            </section>
        </>
    )
}

export { Banner }