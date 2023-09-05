import { useState } from 'react'

function CardsItem({imagen, titulo, parrafo}) {
    return(
        <>
            <li className='info--curso__article__section--one'>
                <img className='info--curso__article__section--one__img' src={imagen} alt={titulo} />
                <h3 className='info--curso__article__section--one__h3'>{titulo}</h3>
                <p className='info--curso__article__section--one__p'>{parrafo}</p>
            </li>
        </>
    )
}

export { CardsItem }