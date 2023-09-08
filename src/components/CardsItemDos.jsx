import { useState } from 'react'
import rowLeft from '../assets/chevron-left.svg'
import rowRight from '../assets/chevron-right.svg'

function CardsItemDos({imagen, titulo, parrafo, left, right}) {
    return(
        <>
            <section className='info--cards--button'>
                <button onClick={left} className='section--info--curso__button--left'><img src={rowLeft} alt="" /></button>
                <section className='section--info--curso__article__section'>
                    <img className='section--info--curso__article__section__img' src={imagen} alt={titulo} />
                    <h3 className='section--info--curso__article__section__h3'>{titulo}</h3>
                    <p className='section--info--curso__article__section__p'>{parrafo}</p>
                </section>
                <button onClick={right} className='section--info--curso__button--right'><img src={rowRight} alt="" /></button>

            </section>
        </>
    )
}

export { CardsItemDos }