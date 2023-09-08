import { useState } from 'react'

function CardsItemDos({imagen, titulo, parrafo}) {
    return(
        <>
            <section className='section--info--curso__article__section'>
                <img className='section--info--curso__article__section__img' src={imagen} alt={titulo} />
                <h3 className='section--info--curso__article__section__h3'>{titulo}</h3>
                <p className='section--info--curso__article__section__p'>{parrafo}</p>
            </section>
        </>
    )
}

export { CardsItemDos }