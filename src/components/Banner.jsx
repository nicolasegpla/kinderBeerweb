import iconWhatsapp from '../assets/whatsapp-kinder.svg'

function Banner() {
    return (
        <>
            <section className='banner'>
                <div className='banner__div--info'>
                    <h1 className='banner__div--info__h1'>Domingo 18 de junio 2023</h1>
                    <p className='banner__div--info__p'>Próximo curso de cervecería artesanal.</p>
                </div>
                <button className='banner__button'>
                    <p className='banner__button__p'>Mas información</p>
                    <img className='banner__button__img' src={iconWhatsapp} alt="imagen del logo de whatsapp" />
                </button>
            </section>
        </>
    )
}

export { Banner }